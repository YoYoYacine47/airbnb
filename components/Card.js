import Image from "next/image";

function Card({ img, location, distance }) {
  return (
    <div className="flex items-center space-x-4 hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative flex h-16 w-16">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>

      <div className="ml-2">
        <h2 className="font-semibold">{location}</h2>
        <h3 className="text-gray-700">{distance}</h3>
      </div>
    </div>
  );
}

export default Card;
