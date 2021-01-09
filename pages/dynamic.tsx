import { GetStaticProps } from "next";
import path from "path";

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");

  const txt = fs.readFileSync(
    path.join(process.cwd(), "public/robots.txt"),
    "utf8"
  );

  return {
    revalidate: 1,
    props: {
      myFavTxt: txt,
    },
  };
};

export default function Dynamic(props) {
  return <h1>Dynamic Text - {props.myFavTxt}</h1>;
}
