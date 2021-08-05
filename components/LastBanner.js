import Image from "next/image";

function LastBanner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
      <div className="absolute md:1/4 xl:top-1/3 p-16">
        <h2 className="text-white text-l sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold w-64">
          Try Hosting
        </h2>
        <p className="text-white text-s font-medium w-72">
          Earn extra income and unlock new opportunities by sharing your space.
        </p>
        <button className="bg-white  px-10 py-4 mt-4 shadow-lg hover:shadow-2xl rounded-lg font-bold ">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default LastBanner;
