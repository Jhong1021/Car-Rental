import React from 'react';

const Home = () => {
  return (
    <section id='home'>
      <div className="relative bg-[url(https://images.inc.com/uploaded_files/image/1920x1080/getty_649362670_395940.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left lg:text-left">
            <h1 className="text-3xl font-extrabold text-rose-500 sm:text-5xl">
              Drive Your Journey,
              <strong className="block font-extrabold text-rose-500"> Rent with Confidence. </strong>
            </h1>

            <p className="mt-4 max-w-lg text-black sm:text-xl sm:leading-relaxed font-bold">
              "Discover your perfect ride with ease—explore our wide range of reliable and stylish rental vehicles tailored for every journey."
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4">
              <a
                href="#"
                className="block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
