import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[450px] lg:h-[500] xl:h-[550px] 2xl:h-[500px]">
      <Image
        src="https://a0.muscache.com/im/pictures/a915ff27-6062-436d-a7a9-007685423f7b.jpg?im_w=720"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
      <div className="absolute top-1/4 p-16">
        <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold w-64">
          {" "}
          Not sure where to go? Perfect.
        </p>
        <button className="bg-gray-900 text-white px-10 py-4 mt-4 shadow-lg hover:shadow-2xl rounded-lg font-bold ">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
