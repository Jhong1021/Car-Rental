import React from 'react';

const teamMembers = [
  {
    name: "Jan Lester",
    role: "CEO",
    img: "https://img.freepik.com/free-photo/front-view-portrait-businessman-with-glasses_23-2148816831.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725062400&semt=ais_hybrid",
    bio: "Jan is the visionary behind our company, dedicated to providing the best car rental experience.",
  },
  {
    name: "Glen Serdeño",
    role: "Operations Manager",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&s",
    bio: "Glen oversees daily operations, ensuring everything runs smoothly and efficiently.",
  },
  {
    name: "La Alcantara",
    role: "Customer Service Specialist",
    img: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
    bio: "La is our go-to person for customer support, always ready to assist and solve problems.",
  },
];

const TeamMember = ({ name, role, img, bio }) => {
  return (
    <div className="w-full md:w-1/3 p-4 text-center">
      <img src={img} alt={name} className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg" />
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      <p className="text-gray-500">{bio}</p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section id='aboutus' className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            At our car rental company, we are committed to delivering a seamless and enjoyable rental experience.
            Whether you're planning a road trip, need a temporary vehicle, or are looking for a business rental,
            we provide top-quality cars and exceptional customer service to meet your needs.
          </p>
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Mission Statement</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our mission is to make car rentals easy and accessible for everyone. We strive to offer a wide range
            of vehicles, flexible rental options, and outstanding support to ensure our customers have a hassle-free experience.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Meet the Team</h2>
          <div className="flex flex-wrap -m-4">
            {teamMembers.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
