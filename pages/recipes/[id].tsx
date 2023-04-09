import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store';
import { Recipe } from '@/lib/types/Recipe';
import Button from '@/components/Button';

export default function RecipePage() {
  //Get id of the recipe
  const router = useRouter();
  const { id } = router.query;

  //Find recipe data
  const recipesState = useAppSelector(
    (state: RootState) => state.recipes.value
  );
  const selectedRecipe = recipesState.find((recipe: Recipe) => {
    console.log(typeof recipe.id, typeof id);
    return recipe.id === Number(id);
  });

  if (selectedRecipe) {
    const ingredientsPerStep = selectedRecipe?.analyzedInstructions[0].steps
      .map((step) => step)
      .map(({ ingredients }) => ingredients)
      .map((ingredientsPerStep) => ingredientsPerStep?.map(({ name }) => name));
    let ingredientsArray: string[] = [];
    ingredientsPerStep?.forEach((step: string[]) => {
      ingredientsArray = [...ingredientsArray, ...step];
    });
    const notRepeatedIngredients = [...new Set(ingredientsArray)];
    console.log(notRepeatedIngredients);
    console.log(selectedRecipe);
    return (
      <div className="text-center py-10">
        <div className="flex flex-col w-full items-center text-left max-w-[300px] m-auto">
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
              <span className="bg-lime-700 mr-4 w-[70px] cursor-pointer py-1 rounded-md text-center text-white block">
                Veggie
              </span>
            )}
            {selectedRecipe.vegan && (
              <span className="bg-green-600 mr-4 w-[70px] py-1 rounded-md text-center text-white block">
                Vegan
              </span>
            )}
          </div>
          <div className="text-left">
            <h3 className="font-bold text-xl mb-2">Ingredients:</h3>
            <ol className="list-decimal list-inside mb-8">
              {notRepeatedIngredients.map((ingredient: string) => (
                <li className="mb-1" key={ingredient}>
                  {`${ingredient.charAt(0).toUpperCase()}${ingredient.slice(
                    1
                  )}`}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <Link href="/">
          <Button classNames=" text-lg text-white px-4 py-2 rounded-lg">
            Back
          </Button>
        </Link>
      </div>
    );
  } else return null;
}
