import React from 'react';

const teamMembers = [
  {
    name: "Jan Lester",
    role: "CEO",
    img: "https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-1/295908517_5397205707059415_6358912750643085375_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=4tbHkZD8u4AQ7kNvgG3PmSq&_nc_ht=scontent.fmnl17-6.fna&oh=00_AYBkI_PBqZkgRAlnuEQNQpZThI-1mpejDOu5lnWmLJP5LQ&oe=66C0C6DB", // Replace with actual image URL
    bio: "Jan is the visionary behind our company, dedicated to providing the best car rental experience.",
  },
  {
    name: "Glen Serdeño",
    role: "Operations Manager",
    img: "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/382987555_7231737546855766_4011020421764839181_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=mgbs_EP3bykQ7kNvgGov_Ch&_nc_ht=scontent.fmnl17-2.fna&oh=00_AYBZlUFalx4ts46GLtso0orv3qGd0ZauNo6aundBSO5Jlg&oe=66C0BFE3", // Replace with actual image URL
    bio: "Glen oversees daily operations, ensuring everything runs smoothly and efficiently.",
  },
  {
    name: "La Alcantara",
    role: "Customer Service Specialist",
    img: "https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/449298640_2280457188958427_1314692579417369936_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CKaZ3SGdT5IQ7kNvgEEUuMX&_nc_ht=scontent.fmnl17-4.fna&oh=00_AYBXkbBZ1GSIRGuPGv5Thc6oVw5ql9yzshxwIJS5Fp3dtw&oe=66C0CEC0", // Replace with actual image URL
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
