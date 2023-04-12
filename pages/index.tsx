import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import SelectCustom from '@/components/SelectCustom';
import Layout from '@/components/Layout';
import Form from '@/components/Form';
import Card from '@/components/Card';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store';
import { Recipe } from '@/lib/types/Recipe';

export default function Home() {
  // Recipes global state
  const recipesState = useAppSelector(
    (state: RootState) => state.recipes.value
  );

  const selectOptions = [
    { value: 'all', label: 'All' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Veggie' },
  ];

  const [selected, setSelected] = useState(selectOptions[0]);

  const handleSelectChange = (selectedOption: {
    value: string;
    label: string;
  }) => {
    setSelected(selectedOption);
  };

  const filteredRecipes = recipesState.filter((recipe: Recipe) => {
    if (selected.value === 'vegetarian' && recipe.vegetarian) return recipe;
    else if (selected.value === 'vegan' && recipe.vegan) return recipe;
    else if (selected.value === 'all') return recipe;
  });

  return (
    <Layout>
      <Head>
        <title>My recipes</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">My recipes</h1>
      <div className="w-[350px]">
        <Form />
        <SelectCustom
          value={selected}
          onChange={handleSelectChange}
          options={selectOptions}
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center  w-full lg:grid-cols-3 xl:grid-cols-4">
        {recipesState
          ? filteredRecipes.map((recipe: Recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                <Card
                  key={recipe.id}
                  title={recipe.title}
                  img={recipe.image}
                  isVegetarian={recipe.vegetarian}
                  isVegan={recipe.vegan}
                />
              </Link>
            ))
          : null}
      </div>
    </Layout>
  );
}
