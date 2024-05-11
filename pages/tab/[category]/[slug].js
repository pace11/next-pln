import dynamic from "next/dynamic";

const DetailPostContainer = dynamic(() =>
  import("@/container/DetailPostContainer")
);

export default function Slug() {
  return <DetailPostContainer />;
}
