interface RecipeBodyProps {
  ingredients: string[];
}

export default function RecipeBody({ ingredients }: RecipeBodyProps) {
  return (
    <div className="text-left">
      <h3 className="font-bold text-xl mb-2">Ingredients:</h3>
      <ol className="list-decimal list-inside mb-8">
        {ingredients.map((ingredient: string) => (
          <li className="mb-1" key={ingredient}>
            {`${ingredient.charAt(0).toUpperCase()}${ingredient.slice(1)}`}
          </li>
        ))}
      </ol>
    </div>
  );
}
