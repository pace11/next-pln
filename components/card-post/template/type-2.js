/* eslint-disable @next/next/no-img-element */
import { IMAGE_FALLBACK } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Type2({
  imgSrc,
  imgAlt,
  title,
  categoryText,
  categoryLink,
  postLink,
  createdAt,
}) {
  return (
    <div className="w-full text-white">
      <div className={`w-full relative h-[300px] max-[768px]:h-[200px]`}>
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
        <div className="absolute bottom-0 bg-neutral-900/90 h-auto w-full p-2">
          <p className="text-[11px]">
            <Link
              className="hover:text-[#efe62f] hover:underline"
              href={categoryLink}
            >
              {categoryText}
            </Link>{" "}
            || <span>{createdAt}</span>
          </p>
          <p className="line-clamp-2 text-[14px] font-normal hover:text-[#efe62f] hover:cursor-pointer">
            <Link href={postLink}>{title}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
