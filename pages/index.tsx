import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import Select from 'react-select';
import Layout from '@/components/Layout';
import Form from '@/components/Form';
import Card from '@/components/Card';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store';
import { Recipe } from '@/lib/types/Recipe';
import customSelectStyles from '@/lib/customSelectStyles';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const recipesState = useAppSelector(
    (state: RootState) => state.recipes.value
  );
  const selectOptions = [
    { value: 'all', label: 'All' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'vegetarian', label: 'Veggie' },
  ];

  const [selected, setSelected] = useState(selectOptions[0]);

  const handleSelectChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  const filteredRecipes = recipesState.filter((recipe: Recipe) => {
    if (selected.value === 'vegetarian' && recipe.vegetarian) return recipe;
    if (selected.value === 'vegan' && recipe.vegan) return recipe;
    if (selected.value === 'all') return recipe;
  });

  return (
    <Layout>
      <Head>
        <title>My recipes</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">My recipes</h1>
      <div className="w-[350px]">
        <Form />
        <label>Filter</label>
        <Select
          styles={customSelectStyles}
          autoFocus
          onChange={handleSelectChange}
          options={selectOptions}
          value={selected}
        />
      </div>
      <div className="grid grid-cols-1 justify-items-center  w-full lg:grid-cols-3 xl:grid-cols-4">
        {recipesState
          ? filteredRecipes.map((recipe: Recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                <Card key={recipe.id} title={recipe.title} img={recipe.image} />
              </Link>
            ))
          : null}
      </div>
    </Layout>
  );
}
