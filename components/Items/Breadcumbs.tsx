"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// const endsWithNumber = (str: any) => {
//   return /\d$/.test(str);
// };
export type CustomPath = {
  renderPath: string;
  linkPath: string;
};

const Breadcumbs = ({ customPath }: { customPath?: CustomPath }) => {
  const pathname = usePathname();

  if (customPath) {
    return (
      <div className="text-sm breadcrumbs text-primary select-none">
        <ul>
          {customPath.renderPath.split("/").map((val, index) => {
            return (
              <li className="text-lg" key={index}>
                {index !== customPath.renderPath.split("/").length - 1 ? (
                  <Link
                    href={customPath.linkPath
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
