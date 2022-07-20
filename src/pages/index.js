import Head from 'next/head';
import ProductList from '@containers/ProductList';

export default function Home() {
  return (
    <>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    
      <Head>
        <title>React Shop</title>
      </Head>
      <ProductList />
    </>
  );
}
