import Head from 'next/head';

import { Inter } from 'next/font/google';

import Layout from '@/components/Layout';
import Form from '@/components/Form';
import Card from '@/components/Card';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store';
import { Recipe } from '@/lib/types/Recipe';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const recipesState = useAppSelector(
    (state: RootState) => state.recipes.value
  );
  return (
    <Layout>
      <Head>
        <title>My recipes</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">My recipes</h1>
      <Form />
      <div className="grid grid-cols-1 justify-items-center  w-full lg:grid-cols-3 xl:grid-cols-4">
        {recipesState
          ? recipesState.map((recipe: Recipe) => (
              <Card key={recipe.id} title={recipe.title} img={recipe.image} />
            ))
          : null}
      </div>
    </Layout>
  );
}
