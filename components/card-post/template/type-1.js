/* eslint-disable @next/next/no-img-element */
import { IMAGE_FALLBACK } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Type1({
  imgSrc,
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
      <div className={`w-full relative h-[500px] max-[768px]:h-[400px]`}>
        <Image
          src={imgSrc || "/img-not-found.png"}
          alt={imgAlt}
          fill
          objectFit="cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={IMAGE_FALLBACK}
          loading="lazy"
        />
      </div>
      <p className="text-[14px]">
        <Link className="text-[#14a2ba] hover:underline" href={categoryLink}>
          {categoryText}
        </Link>{" "}
        || <span>{createdAt}</span>
      </p>
      <p className="text-[24px] hover:text-neutral-400 hover:cursor-pointer">
        <Link href={postLink}>{title}</Link>
      </p>
      <div
        className="line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
    </div>
  );
}
