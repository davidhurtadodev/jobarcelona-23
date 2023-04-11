import Image from 'next/image';
import Badge from './Badge';
interface CardProps {
  title: string;
  img: string;
  isVegan: boolean;
  isVegetarian: boolean;
}

export default function Card({ img, title, isVegan, isVegetarian }: CardProps) {
  return (
    <div className="w-[300px] min-h-[320px] ease-in-out duration-300 border-2 hover:shadow-xl hover:scale-110 py-5 px-4 cursor-pointer mb-10 rounded-lg border-[#dae9ef] text-center">
      <div className="w-[200px] h-[200px] relative flex justify-center m-auto">
        <Image
          className="mx-auto mb-4 rounded-xl object-cover"
          src={img}
          alt="title"
          fill
        />
      </div>
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="flex justify-center w-full  mb-4">
        {isVegan ? <Badge classNames="bg-lime-600" text="Vegan" /> : null}
        {isVegetarian ? <Badge classNames="bg-lime-700" text="Veggie" /> : null}
      </div>
    </div>
  );
}
