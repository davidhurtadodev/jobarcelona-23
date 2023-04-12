import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store';
import { Recipe } from '@/lib/types/Recipe';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import RecipeHead from '@/components/RecipeHead';
import RecipeBody from '@/components/RecipeBody';

export default function RecipePage() {
  //Get id of the recipe
  const router = useRouter();
  const { id } = router.query;

  // get recipe global state
  const recipesState = useAppSelector(
    (state: RootState) => state.recipes.value
  );
  //find recipe data
  const selectedRecipe = recipesState.find((recipe: Recipe) => {
    return recipe.id === Number(id);
  });

  if (!selectedRecipe) return null;
  else {
    //Retrieve ingredients
    const ingredientsPerStep = selectedRecipe
      .analyzedInstructions![0].steps!.map((step) => step)
      .map(({ ingredients }) => ingredients)
      .map((ingredientsPerStep) => ingredientsPerStep?.map(({ name }) => name));

    //Array for ingredients
    let ingredientsArray: string[] = [];

    ingredientsPerStep?.forEach((ingredient) => {
      ingredientsArray = [...ingredientsArray, ...ingredient!];
    });

    //Filter repeated ingredients
    const notRepeatedIngredients = [...new Set(ingredientsArray)];

    return (
      <div className="text-center py-10">
        <div className="flex flex-col w-full items-center text-left max-w-[300px] m-auto">
          <RecipeHead selectedRecipe={selectedRecipe} />
          <RecipeBody ingredients={notRepeatedIngredients} />
        </div>
        <Link href="/">
          <Button classNames=" text-lg text-white px-4 py-2 rounded-lg">
            Back
          </Button>
        </Link>
      </div>
    );
  }
}
