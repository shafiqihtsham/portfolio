import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col text-center w-screen h-screen justify-center content-center align-middle items-center">
      <h1 className="text-4xl font-light">Currently in development 👨🏽‍💻 </h1>
      <div className="pt-10 flex flex-row gap-10">
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <Link href="/">Blue Pill</Link>
        </button>

        <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline-red active:bg-red-800 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <Link href="https://youtu.be/dQw4w9WgXcQ">Red Pill</Link>
        </button>
      </div>
    </div>
  );
}
