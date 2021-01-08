import { useRouter } from "next/router";

export default function FruitSubName() {
  const router = useRouter();
  console.log(router);
  return (
    <h1>
      Hello {router.query.name} {router.query.subname}
    </h1>
  );
}
