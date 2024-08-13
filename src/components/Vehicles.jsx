// Vehicles.js
import React from 'react';
import VehicleCard from './VehicleCard';

const vehicleDetails = [
  {
    image: 'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/gallery/2020-toyota-vios-exterior-quarter-front-philippines-5f1be0011eb90.jpg',
    name: 'Toyota Vios',
    price: 1849,
    transmission: 'Automatic',
    passengers: 5,
    doors: 4,
    luggageCapacity: 2,
    buttonColor: 'bg-green-500 hover:bg-green-700'
  },
  {
    image: 'https://www.toyotaotis.com.ph/wp-content/uploads/2017/04/avanza_galbig_3.jpg',
    name: 'Toyota Avanza',
    price: 3199,
    transmission: 'Automatic',
    passengers: 7,
    doors: 5,
    luggageCapacity: 5,
    buttonColor: 'bg-green-500 hover:bg-green-700'
  },
  {
    image: 'https://www.autodeal.com.ph/custom/blog-post/header/2022-geely-coolray-facelift-620dabb27f375.jpg',
    name: 'Geely Coolray',
    price: 2199,
    transmission: 'Automatic',
    passengers: 5,
    doors: 4,
    luggageCapacity: 2,
    buttonColor: 'bg-green-500 hover:bg-green-700'
  },
  {
    image: 'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/mobile/gallery/2022-toyota-fortuner-exterior-quarter-front-philippines-62fefdab14b9b.jpg',
    name: 'Toyota Fortuner',
    price: 3199,
    transmission: 'Manual',
    passengers: 7,
    doors: 5,
    luggageCapacity: 6,
    buttonColor: 'bg-green-500 hover:bg-green-700'
  },
  {
    image: 'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/mobile/gallery/2022-mitsubishi-xpander-philippines-front-quarter-625e26552587c.jpg',
    name: 'Mitsubishi Xpander',
    price: 3499,
    transmission: 'Automatic',
    passengers: 7,
    doors: 4,
    luggageCapacity: 5,
    buttonColor: 'bg-rose-600 hover:bg-rose-700'
  },
  {
    image: 'https://i0.wp.com/www.toyotamotorscebu.com/wp-content/uploads/2020/01/Toyota-Hiace-Grandia-September-2018-Promo.jpg?fit=645%2C365&ssl=1',
    name: 'Toyota Hiace',
    price: 5199,
    transmission: 'Automatic',
    passengers: 14,
    doors: 4,
    luggageCapacity: 10,
    buttonColor: 'bg-rose-600 hover:bg-rose-700'
  }
];

const Vehicles = () => {
  return (
    <div id='vehicles' className="flex flex-col justify-center md:flex-row md:flex-wrap">
      {vehicleDetails.slice(0, 4).map((vehicle, i) => (
        <VehicleCard key={i} {...vehicle} />
      ))}
      {vehicleDetails.slice(4, 6).map((vehicle, i) => (
        <VehicleCard key={i + 4} {...vehicle} />
      ))}
    </div>
  );
};

export default Vehicles;
