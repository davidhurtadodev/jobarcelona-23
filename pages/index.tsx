import Head from 'next/head';

import { Inter } from 'next/font/google';

import Layout from '@/components/Layout';
import Form from '@/components/Form';
import Input from '@/components/Input';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My recipes</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">My recipes</h1>
      <Form />
    </Layout>
  );
}
