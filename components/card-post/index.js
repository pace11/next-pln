/* eslint-disable @next/next/no-img-element */
import { IMAGE_FALLBACK } from "@/constants";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

const Type1 = dynamic(() => import("@/components/card-post/template/type-1"));
const Type2 = dynamic(() => import("@/components/card-post/template/type-2"));
const Type3 = dynamic(() => import("@/components/card-post/template/type-3"));
const Type4 = dynamic(() => import("@/components/card-post/template/type-4"));

const templates = {
  "type-1": Type1,
  "type-2": Type2,
  "type-3": Type3,
  "type-4": Type4,
};

function CardPost({
  type = "type-3",
  imgSrc = IMAGE_FALLBACK,
  imgAlt = "",
  imgHeight = "400px",
  imgArray = "",
  title = "Post title",
  description = "Post description",
  categoryText = "category",
  categoryLink = "#",
  postLink = "#",
  createdAt = dayjs(new Date()).format("DD MMM YYYY"),
  onClickDetail = () => {},
  showMore = true,
  showDescription = true,
}) {
  const RenderComponent = templates?.[type] ?? null;
  if (RenderComponent)
    return (
      <RenderComponent
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        imgHeight={imgHeight}
        imgArray={imgArray}
        title={title}
        description={description}
        categoryText={categoryText}
        categoryLink={categoryLink}
        postLink={postLink}
        createdAt={createdAt}
        onClickDetail={onClickDetail}
        showMore={showMore}
        showDescription={showDescription}
      />
    );
}

export default CardPost;
