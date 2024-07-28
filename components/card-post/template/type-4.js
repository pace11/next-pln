/* eslint-disable @next/next/no-img-element */
import { IMAGE_FALLBACK } from "@/constants";
import { previewMultipleImg } from "@/helpers";
import Image from "next/image";
import Link from "next/link";

export default function Type4({
  imgSrc,
  imgArray,
  imgAlt,
  title,
  description,
  categoryText,
  categoryLink,
  postLink,
  createdAt,
}) {
  return (
    <div className="w-full text-neutral-600">
      <p className="text-[14px]">
        <Link className="text-[#14a2ba] hover:underline" href={categoryLink}>
          {categoryText}
        </Link>{" "}
        || <span>{createdAt}</span>
      </p>
      <p className="mt-6 mb-6 text-[30px] font-normal">{title}</p>
      <div className={`w-full relative h-[500px]`}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          objectFit="cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={IMAGE_FALLBACK}
          loading="lazy"
        />
      </div>
      <div
        className="mt-6 text-[14px]"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
      <div className="grid grid-cols-12 gap-8">
        {previewMultipleImg({ img: imgArray })?.map((item, idx) => (
          <div className="col-span-4" key={idx}>
            <div className={`w-full relative h-[250px] max-[768px]:h-[200px]`}>
              <Image
                src={item?.url}
                alt={item?.url}
                fill
                objectFit="cover"
                sizes="100vw"
                placeholder="blur"
                blurDataURL={IMAGE_FALLBACK}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
