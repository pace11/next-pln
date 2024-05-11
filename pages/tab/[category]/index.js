import dynamic from "next/dynamic";

const HomeContainer = dynamic(() => import("@/container/HomeContainer"));

export default function Category() {
  return <HomeContainer />;
}
