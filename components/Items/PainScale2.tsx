import Image from "next/image";
import React from "react";
import pain1 from "/images/pain-scale/no-pain.svg";

type PainScale2Props = {
  onClick: (value: number, text: string, color: string) => void;
  val: number;
};

const PainScale2 = ({ onClick, val }: PainScale2Props) => {
  return (
    <div className="">
      <div className="join grid-cols-11 w-full items-center grid">
        <div
          onClick={() => onClick(0, "No Pain", "bg-[#649f44]" )}
          className={`join-item btn btn-sm hover:bg-[#649f44] ${
            val == 0 ? "bg-[#649f44]" : null
          }`}
        >
          0
        </div>
        <div
          onClick={() => onClick(1, "Mild Pain", "bg-[#74B451]")}
          className={`join-item btn btn-sm hover:bg-[#74B451] ${
            val == 1 ? "bg-[#74B451]" : null
          }`}
        >
          1
        </div>
        <div
          onClick={() => onClick(2, "Mild Pain", "bg-[#8EB347]")}
          className={`join-item btn btn-sm hover:bg-[#8EB347] ${
            val == 2 ? "bg-[#8EB347]" : null
          }`}
        >
          2
        </div>
        <div
          onClick={() => onClick(3, "Moderate Pain", "bg-[#A8B23D]")}
          className={`join-item btn btn-sm hover:bg-[#C3B032] ${
            val == 3 ? "bg-[#C3B032]" : null
          }`}
        >
          3
        </div>
        <div
          onClick={() => onClick(4, "Moderate Pain", "bg-[#CDBF28]")}
          className={`join-item btn btn-sm hover:bg-[#DEAF27] ${
            val == 4 ? "bg-[#DEAF27]" : null
          }`}
        >
          4
        </div>
        <div
          onClick={() => onClick(5, "Severe Pain", "bg-[#E99E23]")}
          className={`join-item btn btn-sm hover:bg-[#F8AE1D] ${
            val == 5 ? "bg-[#F8AE1D]" : null
          }`}
        >
          5
        </div>
        <div
          onClick={() => onClick(6, "Severe Pain", "bg-[#F99D29]")}
          className={`join-item btn btn-sm hover:bg-[#F99D29] ${
            val == 6 ? "bg-[#F99D29]" : null
          }`}
        >
          6
        </div>
        <div
          onClick={() => onClick(7, "Very Severe Pain", "bg-[#F98C35]")}
          className={`join-item btn btn-sm hover:bg-[#F98C35] ${
            val == 7 ? "bg-[#F98C35]" : null
          }`}
        >
          7
        </div>
        <div
          onClick={() => onClick(8, "Very Severe Pain", "bg-[#FA7B41]")}
          className={`join-item btn btn-sm hover:bg-[#FA7B41] ${
            val == 8 ? "bg-[#FA7B41]" : null
          }`}
        >
          8
        </div>
        <div
          onClick={() => onClick(9, "Worst Pain Possible", "bg-[#FA6A4D]")}
          className={`join-item btn btn-sm hover:bg-[#FA6A4D] ${
            val == 9 ? "bg-[#FA6A4D]" : null
          }`}
        >
          9
        </div>
        <div
          onClick={() => onClick(10, "Worst Pain Possible", "bg-[#FB5959]")}
          className={`join-item btn btn-sm hover:bg-[#FB5959] ${
            val == 10 ? "bg-[#FB5959]" : null
          }`}
        >
          10
        </div>
      </div>
      <div className="grid grid-cols-6 w-full mt-2">
        <div className="justify-start items-start">
          <div className="flex justify-center" >
            <Image
              src="/images/pain-scale/no-pain.svg"
              width="40"
              height="40"
              alt="pain1"
            />
          </div>
          <div className="text-center text-sm font-light">No Pain</div>
        </div>
        <div className="justify-start items-start">
          <div className="flex justify-center" >
            <Image
              src="/images/pain-scale/mild-pain.svg"
              width="40"
              height="40"
              alt="pain1"
            />
          </div>
          <div className="text-center text-sm font-light">Mild Pain</div>
        </div>
        <div className="justify-start items-start">
          <div className="flex justify-center" >
            <Image
              src="/images/pain-scale/moderate-pain.svg"
              width="40"
              height="40"
              alt="pain1"
            />
          </div>
          <div className="text-center text-sm font-light">Moderate Pain</div>
        </div>
        <div className="justify-start items-start">
          <div className="flex justify-center" >
            <Image
              src="/images/pain-scale/severe-pain.svg"
              width="40"
              height="40"
              alt="pain1"
            />
          </div>
          <div className="text-center text-sm font-light">Severe Pain</div>
        </div>
        <div className="justify-start items-start">
          <div className="flex justify-center" >
            <Image
              src="/images/pain-scale/very-severe-pain.svg"
              width="40"
              height="40"
              alt="pain1"
            />
          </div>
          <div className="text-center text-sm font-light">Very Severe Pain</div>
        </div>
        <div className="justify-start items-start">
          <div className="flex justify-center" >
            <Image
              src="/images/pain-scale/worst-pain-possible.svg"
              width="40"
              height="40"
              alt="pain1"
            />
          </div>
          <div className="text-center text-sm font-light">Worst Pain Possible</div>
        </div>
      </div>
    </div>
  );
};

export default PainScale2;
