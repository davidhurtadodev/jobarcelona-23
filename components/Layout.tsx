import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="View your favorite recipes" />
      </Head>
      <main className="flex flex-col justify-center">{children}</main>
    </div>
  );
}
