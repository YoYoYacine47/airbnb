import Image from "next/image";

function BigCard({ img, title }) {
  return (
    <div className=" cursor-pointer ">
      <div className="relative flex h-96 w-96 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h4 className="mt-2 font-medium text-l">{title}</h4>
    </div>
  );
}

export default BigCard;
