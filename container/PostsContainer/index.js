import CardPost from "@/components/card-post";
import { useQueriesMutation } from "@/hooks/useQueriesMutation";
import dayjs from "dayjs";

export default function PostsContainer({ tab }) {
  const { data: bannerPosts } = useQueriesMutation({
    prefixUrl: `/posts?slug=${tab}&posted=true&banner=true`,
  });

  const { data: listPosts } = useQueriesMutation({
    prefixUrl: `/posts?slug=${tab}&posted=true&banner=false`,
  });

  return (
    <div className="w-full h-auto">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 max-[768px]:col-span-12">
          {bannerPosts?.data?.slice(0, 1)?.map((item) => (
            <div className="col-span-12" key={item?.id}>
              <CardPost
                type="type-1"
                imgAlt={item?.thumbnail}
                imgSrc={
                  item?.thumbnail
                    ? `${process.env.NEXT_PUBLIC_PATH_IMAGE}/${item?.thumbnail}`
                    : ""
                }
                title={item?.title}
                description={item?.description}
                categoryText={item?.categories?.title}
                categoryLink={`/tab/${item?.categories?.slug}`}
                postLink={`/tab/${item?.categories?.slug}/${item?.slug}`}
                createdAt={dayjs(new Date(item?.created_at)).format(
                  "DD MMM YYYY"
                )}
              />
            </div>
          ))}
        </div>
        <div className="col-span-4 max-[768px]:col-span-12">
          <div className="grid grid-cols-12 gap-8">
            {bannerPosts?.data?.slice(1, 3)?.map((item) => (
              <div className="col-span-12" key={item?.id}>
                <CardPost
                  type="type-2"
                  imgAlt={item?.thumbnail}
                  imgSrc={
                    item?.thumbnail
                      ? `${process.env.NEXT_PUBLIC_PATH_IMAGE}/${item?.thumbnail}`
                      : ""
                  }
                  title={item?.title}
                  description={item?.description}
                  categoryText={item?.categories?.title}
                  categoryLink={`/tab/${item?.categories?.slug}`}
                  postLink={`/tab/${item?.categories?.slug}/${item?.slug}`}
                  createdAt={dayjs(new Date(item?.created_at)).format(
                    "DD MMM YYYY"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {listPosts?.data?.length > 0 && (
        <div className="border-t-2 border-[#14a2ba] mt-8 grid grid-cols-12 gap-8 pt-10">
          {listPosts?.data?.map((item) => (
            <div
              className="col-span-3 max-[768px]:col-span-6 max-[425px]:col-span-12"
              key={item?.id}
            >
              <CardPost
                imgAlt={item?.thumbnail}
                imgSrc={
                  item?.thumbnail
                    ? `${process.env.NEXT_PUBLIC_PATH_IMAGE}/${item?.thumbnail}`
                    : ""
                }
                title={item?.title}
                description={item?.description}
                categoryText={item?.categories?.title}
                categoryLink={`/tab/${item?.categories?.slug}`}
                postLink={`/tab/${item?.categories?.slug}/${item?.slug}`}
                createdAt={dayjs(new Date(item?.created_at)).format(
                  "DD MMM YYYY"
                )}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
