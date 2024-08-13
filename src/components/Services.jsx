import React from 'react';

const services = [
  {
    title: "Self Drive",
    description: "Enjoy the freedom of driving yourself with our self-drive rental options.",
    img: "https://onroadz.com/wp-content/uploads/2021/12/Self-Drive-Car-Rentals-in-Coimbatore.jpg", // Replace with actual image URL
  },
  {
    title: "With Driver",
    description: "Relax and let our professional drivers take you to your destination.",
    img: "https://www.car-rental-with-driver.com/images/news-en/car-rental-with-driver-milan-discover-our-strength.jpg", // Replace with actual image URL
  },
  {
    title: "Business Car Rental",
    description: "Elevate your business travel experience with our premium car rental services.",
    img: "https://cdn.open-pr.com/L/8/L807108030_g.jpg", // Replace with actual image URL
  },
];

const ServiceCard = ({ title, description, img }) => {
  return (
    <div id='services' className="w-full md:w-1/3 p-4 flex flex-col items-center text-center bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={img} alt={title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              img={service.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
