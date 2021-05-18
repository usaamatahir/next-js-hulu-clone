import { GetServerSideProps } from "next";
import Head from "next/head";
import Details from "../components/Details";
import Header from "../components/Header";
import Nav from "../components/Nav";
import request from "../utils/request";

const Home = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Hulu 2.0 clone with Next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Details results={results} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre: string | string[] = context?.query?.genre;
  const data = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request?.fetchTrending?.url
    }`
  ).then((response) => response.json());

  return {
    props: {
      results: data.results,
    },
  };
};
