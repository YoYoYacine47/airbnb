import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[400px] sm:h-[450px] lg:h-[500] xl:h-[650px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
        className="cursor-pointer"
      />
      <div className="absolute top-1/4 p-16">
        <p className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold w-64 text-white">
          {" "}
          My Personal Toutch
        </p>
        <button className="bg-white px-10 py-4 mt-4 shadow-lg hover:shadow-2xl rounded-lg font-bold ">
          explore now
        </button>
      </div>
    </div>
  );
}

export default Banner;
