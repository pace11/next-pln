import CardPost from "@/components/card-post";
import { previewImage } from "@/helpers";
import { useQueriesMutation } from "@/hooks/useQueriesMutation";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export default function DetailPostContainer() {
  const router = useRouter();
  const { slug, category } = router?.query ?? {};

  const { data: detailPost } = useQueriesMutation({
    prefixUrl: `/post/slug/${slug}`,
    enabled: !!slug,
  });

  const { data: postsRelates } = useQueriesMutation({
    prefixUrl: `/posts/relates?slug=${slug}&tag=${category}`,
  });

  return (
    <div className="w-full h-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="col-span-12">
            {detailPost?.success && (
              <CardPost
                type="type-4"
                imgAlt={previewImage({ img: detailPost?.data?.thumbnail })}
                imgSrc={previewImage({ img: detailPost?.data?.thumbnail })}
                imgArray={detailPost?.data?.thumbnail}
                title={detailPost?.data?.title}
                description={detailPost?.data?.description}
                categoryText={detailPost?.data?.categories?.title}
                categoryLink={`/tab/${detailPost?.data?.categories?.slug}`}
                createdAt={dayjs(new Date(detailPost?.data?.created_at)).format(
                  "DD MMM YYYY"
                )}
              />
            )}
          </div>
          {postsRelates?.data?.length > 0 && (
            <div className="border-t-2 border-[#94939b] col-span-12 mt-6">
              <p className="text-[22px] font-semibold py-6">Baca Juga</p>
              <div className="grid grid-cols-12 gap-8">
                {postsRelates?.data?.map((item) => (
                  <div className="col-span-4" key={item?.id}>
                    <CardPost
                      imgAlt={previewImage({ img: item?.thumbnail })}
                      imgSrc={previewImage({ img: item?.thumbnail })}
                      title={item?.title}
                      description={item?.description}
                      categoryText={item?.categories?.title}
                      categoryLink={`/tab/${item?.categories?.slug}`}
                      postLink={`/tab/${item?.categories?.slug}/${item?.slug}`}
                      createdAt={dayjs(new Date(item?.created_at)).format(
                        "DD MMM YYYY"
                      )}
                      showMore={false}
                      showDescription={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
