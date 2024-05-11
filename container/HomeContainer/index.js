import NavigationTab from "@/components/navigation-tab";
import { useQueriesMutation } from "@/hooks/useQueriesMutation";
import { useRouter } from "next/router";
import PostsContainer from "../PostsContainer";

export default function HomeContainer() {
  const router = useRouter();
  const { category } = router?.query ?? {};

  const { data: categories } = useQueriesMutation({ prefixUrl: "/categories" });

  const handleChange = (key) => {
    router.push(`/tab/${key}`);
  };

  return (
      <NavigationTab
        items={categories?.data?.map((item) => ({
          key: item?.slug,
          title: item?.title,
          children: <PostsContainer tab={category ?? "siaran-pers"} />,
        }))}
        activeKey={category ?? "siaran-pers"}
        onChange={(key) => handleChange(key)}
      />
  );
}
