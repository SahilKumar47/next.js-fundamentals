import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { isMainThread } from "worker_threads";

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");

  return {
    revalidate: 10,
    props: {
      myFavTxt: Math.random(),
    },
  };
};

export default function myfruit(props) {
  const router = useRouter();

  return <h1>Hello {props.myFavTxt}</h1>;
}
