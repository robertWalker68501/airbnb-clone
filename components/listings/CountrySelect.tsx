'use client';

import useCountries, { ICountry } from '@/custom-hooks/useCountries';
import Select, { SingleValue } from 'react-select';

interface ICountrySelect {
  value: ICountry | null;
  onChange: (value: ICountry | null) => void;
}

const CountrySelect = ({ value, onChange }: ICountrySelect) => {
  const { getAllCountries } = useCountries();

  return (
    <Select<ICountry, false>
      instanceId='country-select'
      placeholder='Search for a country'
      isClearable
      options={getAllCountries()}
      value={value}
      onChange={(val: SingleValue<ICountry>) => onChange(val ?? null)}
      openMenuOnClick
      openMenuOnFocus
      menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
      menuPosition='fixed'
      styles={{
        menuPortal: (base) => ({ ...base, zIndex: 99999 }),
      }}
      formatOptionLabel={(option) => (
        <div className='flex items-center py-2'>
          <span className='font-semibold text-gray-600'>{option.label}</span>
          <span className='ml-2 text-sm text-gray-400'>{option.region}</span>
        </div>
      )}
      classNames={{
        control: () => 'p-3 border-2',
        input: () => 'text-lg',
        option: () => 'text-lg',
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 12,
        colors: {
          ...theme.colors,
          primary: '#ffe4e6',
          primary25: '#ffe4e6',
        },
      })}
    />
  );
};

export default CountrySelect;
