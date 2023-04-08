import Image from 'next/image';
interface CardProps {
  title: string;
  img: string;
}

export default function Card({ img, title }: CardProps) {
  return (
    <div className="w-[300px] ease-in-out duration-300 border-2 hover:shadow-xl hover:scale-110 py-5 px-4 cursor-pointer mb-10 rounded-lg border-[#dae9ef] text-center">
      <Image
        width={200}
        height={200}
        className="mx-auto mb-4 rounded-xl"
        src={img}
        alt="title"
      />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}
