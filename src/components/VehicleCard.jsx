import React from 'react';

const VehicleCard = ({ image, name, description, price, transmission, passengers, doors, luggageCapacity }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 md:w-1/2 lg:w-1/4">
      <div className="relative">
        <img
          src={image}
          alt="Car Image"
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <ul className="list-none mb-4">
          <li className="text-gray-600 text-sm">Transmission: {transmission}</li>
          <li className="text-gray-600 text-sm">Passengers: {passengers}</li>
          <li className="text-gray-600 text-sm">Doors: {doors}</li>
          <li className="text-gray-600 text-sm">Luggage Capacity: {luggageCapacity}</li>
        </ul>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-gray-900">₱{price} per day</p>
          <button className="block rounded px-6 py-2 text-base font-medium text-white shadow bg-red-500 hover:bg-red-700 focus:outline-none focus:ring active:bg-red-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
