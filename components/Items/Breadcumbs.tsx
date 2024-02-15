"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// const endsWithNumber = (str: any) => {
//   return /\d$/.test(str);
// };

const Breadcumbs = ({ customPath }: { customPath?: string }) => {
  const pathname = usePathname();

  if (customPath) {
    return (
      <div className="text-sm breadcrumbs text-primary select-none">
        <ul>
          {customPath.split("/").map((val, index) => {
            return (
              <li className="text-lg" key={index}>
                {index !== customPath.split("/").length - 1 ? (
                  <Link
                    href={customPath
                      .split("/")
                      .slice(0, index + 1)
                      .join("/")}
                    className="link link-hover"
                  >
                    {val.toUpperCase().replace(/-/g, " ")}
                  </Link>
                ) : (
                  val.toUpperCase().replace(/-/g, " ")
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  // if (endsWithNumber(pathname)) {
  //   return (
  //     <div className="text-sm breadcrumbs text-primary select-none">
  //       <ul>
  //         {pathname.split("/").map((val, index) => {
  //           return (
  //             <li className="text-lg" key={index}>
  //               {index !== pathname.split("/").length - 1 ? (
  //                 <Link
  //                   href={pathname
  //                     .split("/")
  //                     .slice(0, index + 1)
  //                     .join("/")}
  //                   className="link link-hover"
  //                 >
  //                   {/* {val.toUpperCase().replace(/-/g, " ")} */}
  //                   {val === "asuhan"
  //                     ? "ASUHAN MEDIS & KEPERAWATAN"
  //                     : val.toUpperCase().replace(/-/g, " ")}
  //                 </Link>
  //               ) : (
  //                 "ASUHAN MEDIS & KEPERAWATAN"
  //               )}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
  // }
  return (
    <div className="text-sm breadcrumbs text-primary select-none">
      <ul>
        {pathname.split("/").map((val, index) => {
          return (
            <li className="text-lg" key={index}>
              {index !== pathname.split("/").length - 1 ? (
                <Link
                  href={pathname
                    .split("/")
                    .slice(0, index + 1)
                    .join("/")}
                  className="link link-hover"
                >
                  {/* {val.toUpperCase().replace(/-/g, " ")} */}
                  {val === "asuhan"
                    ? "ASUHAN MEDIS & KEPERAWATAN"
                    : val.toUpperCase().replace(/-/g, " ")}
                </Link>
              ) : // val.toUpperCase().replace(/-/g, " ")
              val === "asuhan" ? (
                "ASUHAN MEDIS & KEPERAWATAN"
              ) : (
                val.toUpperCase().replace(/-/g, " ")
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcumbs;
