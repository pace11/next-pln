/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Image from "next/image";
export default function Header() {
  return (
    <nav className="grid grid-cols-12 max-[768]">
      <div className="col-span-9 max-[768px]:col-span-6 bg-gradient-to-r from-[#0f798a] to-[#14a0b7] flex items-center justify-end pr-2 pl-32 h-[51px]">
        <a
          className="bg-white hover:bg-gray-200 pr-3 pl-3 border-1 rounded-lg text-blue-pln"
          href={process.env.NEXT_PUBLIC_DOMAIN_DASHBOARD}
          target="_blank"
        >
          LOGIN
        </a>
        {/* <ul className="list-none m-0 p-0 overflow-hidden">
          <li className="float-right">
            <a
              className="block text-white text-center no-underline text-[11px] font-normal hover:bg-blue-pln flex items-center pl-2 pr-2"
              href="#"
            >
              PELANGGAN
            </a>
          </li>
          <li className="float-left">
            <a
              className="block text-white text-center no-underline text-[11px] font-normal hover:bg-blue-pln flex items-center pl-2 pr-2"
              href="#"
            >
              MEDIA
            </a>
          </li>
        </ul> */}
      </div>
      <div className="col-span-3 max-[768px]:col-span-6">
        <Link href="/">
          <Image
            src="/logo-header-20170501a.jpeg"
            alt="PT PLN (Persero)"
            title="PT PLN (Persero)"
            width="280"
            height="0"
            quality={100}
          />
        </Link>
      </div>
    </nav>
  );
}
