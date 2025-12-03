"use client";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center w-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      {/* Content */}
      <div className="flex items-center justify-center flex-col md:flex-row text-center w-full px-4 sm:px-8 relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-24 md:pr-16 flex flex-col md:items-center md:text-left items-center text-center">
          <div className="header mb-8">
            <div className="flex flex-col items-center">
              <img
                src="/logo/Ignite-Tax-Ai-4.png"
                alt="Ignite taxAI Logo"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  marginBottom: "16px",
                }}
              />
            </div>
            <h1 className="title-font sm:text-6xl text-3xl mb-6 font-bold text-gray-900 text-center">
              IgniteTax<span className="text-blue-600">AI</span>
            </h1>
          </div>
          <p className="mb-8 leading-relaxed sm:text-2xl text-gray-600 text-center font-medium max-w-3xl">
            AI Tax Assistant for Tax Professionals and Businesses
          </p>
          <button className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
