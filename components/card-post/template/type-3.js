/* eslint-disable @next/next/no-img-element */
import { IMAGE_FALLBACK } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Type3({
  imgSrc,
  imgAlt,
  title,
  description,
  categoryText,
  categoryLink,
  postLink,
  createdAt,
  showMore,
  showDescription,
}) {
  return (
    <div className="w-full text-neutral-600">
      <div className={`w-full relative h-[250px] max-[768px]:h-[200px]`}>
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
      <p className="text-[12px]">
        <Link className="text-[#14a2ba] hover:underline" href={categoryLink}>
          {categoryText}
        </Link>{" "}
        || <span>{createdAt}</span>
      </p>
      <p className="text-[16px] hover:text-neutral-400 hover:cursor-pointer">
        <Link href={postLink}>{title}</Link>
      </p>
      {showDescription && (
        <div
          className="line-clamp-2 text-[12px]"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
      )}
      {showMore && (
        <p className="mt-2 text-[12px] text-[#14a2ba] hover:cursor-pointer hover:underline">
          <Link href={postLink}>Selengkapnya &gt;</Link>
        </p>
      )}
    </div>
  );
}
