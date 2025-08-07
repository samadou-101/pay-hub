"use client";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1>My Payment Form</h1>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      &copy; {new Date().getFullYear()} My Payment Form
    </footer>
  );
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-gradient-to-br from-blue-950 to-indigo-400">
      <Header />
      <main className="flex flex-col gap-8 p-8 sm:p-20 max-w-xl mx-auto w-full z-10 relative">
        <form
          style={{
            background:
              "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url('https://picsum.photos/1920/1080')",
            backgroundSize: "cover",
          }}
          className="w-full p-6 shadow-lg rounded-xl backdrop-blur-sm border-[4px] border-gray-50 flex flex-col items-center gap-4 dark:text-gray-950 transition-all duration-300 transform hover:scale-105 focus-within:scale-105"
        >
          <div className="flex w-full justify-between items-center mb-2">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold flex-shrink-0"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="flex-grow bg-transparent border-b-[2px] border-gray-500 focus:outline-none pl-1 py-2 pr-4 transition-all duration-300 transform hover:border-blue-800 dark:text-gray-950"
            />
          </div>
          <div className="flex w-full justify-between items-center mb-2">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold flex-shrink-0"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="flex-grow bg-transparent border-b-[2px] border-gray-500 focus:outline-none pl-1 py-2 pr-4 transition-all duration-300 transform hover:border-blue-800 dark:text-gray-950"
            />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
