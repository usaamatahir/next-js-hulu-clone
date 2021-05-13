import Head from "next/head";
import Details from "../components/Details";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Hulu 2.0 clone with Next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Details />
    </div>
  );
};

export default Home;

export async function getServerSide(context) {
  const genre = context.query.genre;
}
