import { FaHome } from 'react-icons/fa';
import {
  LuBuilding,
  LuCastle,
  LuMountain,
  LuTent,
  LuWaves,
} from 'react-icons/lu';

export const LISTINGS = [
  {
    id: 1,
    title: 'Traditional Riad in the Medina',
    location: 'Marrakech, Morocco',
    image: '/assets/images/image1.jpeg',
    price: 95,
  },
  {
    id: 2,
    title: 'Luxury Ocean View Apartment',
    location: 'Cape Town, South Africa',
    image: '/assets/images/image2.jpeg',
    price: 180,
  },
  {
    id: 3,
    title: 'Cozy Studio Near City Center',
    location: 'Lisbon, Portugal',
    image: '/assets/images/image3.jpeg',
    price: 110,
  },
  {
    id: 4,
    title: 'Desert Retreat with Mountain Views',
    location: 'Ouarzazate, Morocco',
    image: '/assets/images/image4.jpeg',
    price: 85,
  },
  {
    id: 5,
    title: 'Modern Apartment in the CBD',
    location: 'Johannesburg, South Africa',
    image: '/assets/images/image5.jpeg',
    price: 140,
  },
  {
    id: 6,
    title: 'Charming Loft in Historic District',
    location: 'Paris, France',
    image: '/assets/images/image6.jpeg',
    price: 240,
  },
];

export const CATEGORIES = [
  {
    id: 1,
    label: 'House',
    icon: FaHome,
    slug: 'house',
  },
  {
    id: 2,
    label: 'Apartment',
    icon: LuBuilding,
    slug: 'apartment',
  },
  {
    id: 3,
    label: 'Cabin',
    icon: LuMountain,
    slug: 'cabin',
  },
  {
    id: 4,
    label: 'Beach',
    icon: LuWaves,
    slug: 'beach',
  },
  {
    id: 5,
    label: 'Camping',
    icon: LuTent,
    slug: 'camping',
  },
  {
    id: 6,
    label: 'Castle',
    icon: LuCastle,
    slug: 'castle',
  },
];
