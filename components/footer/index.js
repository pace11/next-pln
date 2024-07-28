/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { contactUs, mediaSocial, sitemap } from "@/constants";
import Image from "next/image";
import { Fragment } from "react";

export default function Footer() {
  return (
    <footer className="text-white text-[12px] font-normal">
      <div className="bg-[#e7f6f9] h-[25px]"></div>
      <div className="bg-gradient-to-r from-[#14a2b8] to-[#128ea1]">
        <div className="px-56 max-[1024px]:px-24 max-[768px]:pr-6 max-[768px]:pl-6 grid grid-cols-12 pt-4 pb-4">
          <div className="col-span-4 max-[768px]:col-span-12">
            <p className="text-[16px] font-bold mb-3">Hubungi Kami</p>
            <table>
              <tbody>
                {contactUs?.map((item, idx) => (
                  <Fragment key={String(idx)}>
                    <tr>
                      {item?.contact_us?.img_src && (
                        <td rowSpan="6" width="150">
                          <Image
                            className="align-middle"
                            src={item?.contact_us?.img_src}
                            width={item?.contact_us?.width}
                            height={item?.contact_us?.width}
                          />
                        </td>
                      )}
                      <td className="p-[2px]">
                        <Image
                          className="align-middle"
                          src={item?.img_src}
                          width={item?.width}
                          height={item?.width}
                        />
                      </td>
                      <td className="p-[2px]">{item?.text}</td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-span-4 max-[768px]:col-span-12 md:mt-6">
            <p className="text-[16px] font-bold mb-3">Sitemap</p>
            <ul className="list-none" style={{ columnCount: 2 }}>
              {sitemap?.map((item, idx) => (
                <li key={String(idx)}>
                  <a
                    className="hover:underline"
                    href={item?.href}
                    target={item?.target}
                    rel={item?.rel}
                  >
                    {item?.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-4 max-[768px]:col-span-12 md:mt-6">
            <p className="text-[16px] font-bold mb-3">Ikuti Kami</p>
            <div className="flex flex-row">
              <table>
                <tbody>
                  <tr>
                    {mediaSocial?.map((item, idx) => (
                      <td key={String(idx)}>
                        <a
                          href={item?.href}
                          target={item?.target}
                          rel={item?.rel}
                        >
                          <Image
                            className="rounded-[5px] m-[2px]"
                            src={item?.img_src}
                            alt={item?.img_src}
                            width={38}
                            height={38}
                          />
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr className="border-2 border-solid" />
        <div>
          <p className="text-center pt-4 pb-4">
            Copyright © {new Date().getFullYear()} PT PLN (Persero) All Rights
            Reserved
          </p>
        </div>
        <div className="bg-footer-custom bg-cover bg-center h-64 w-full"></div>
      </div>
    </footer>
  );
}
