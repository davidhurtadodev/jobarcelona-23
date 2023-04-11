import Image from 'next/image';
import Badge from './Badge';
import { Recipe } from '@/lib/types/Recipe';

interface RecipeHeadProps {
  selectedRecipe: Recipe;
}
export default function RecipeHead({ selectedRecipe }: RecipeHeadProps) {
  return (
    <>
      <Image
        width={300}
        height={300}
        src={selectedRecipe?.image}
        alt={selectedRecipe.title}
        className="rounded-xl mb-4"
      />
      <h1 className="text-3xl font-bold mb-6">{selectedRecipe?.title}</h1>
      <div className="flex justify-start w-full  mb-4">
        {selectedRecipe.vegetarian && (
          <Badge text="Vegie" classNames="bg-lime-700" />
        )}
        {selectedRecipe.vegan && (
          <Badge text="Vegan" classNames="bg-lime-600" />
        )}
      </div>
    </>
  );
}
