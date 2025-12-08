"use client"

import Link from "next/link";

export const Main = () => {
  return (
    <div className="bg-[#1F1F1F] w-110 p-8 flex flex-col  gap-8 rounded-lg">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <img className="rounded-full w-24 h-24" src="./profile.jpeg" alt="" />
        <p className="text-[26px] font-semibold text-white">Jessica Randall</p>
        <p className="text-[14px] font-semibold text-[#C5F82A]">
          London, United Kingdom
        </p>
        <p className="text-[14px] font-semibold text-white">
          "Front-end developer and avid reader."
        </p>
      </div>
      <ul className="flex flex-col gap-4 *:hover:bg-[#C5F82A] *:hover:text-[#333333]">
        <li className="p-4 text-[16px] text-white bg-[#333333] text-center rounded-lg font-semibold">
          <Link className="inline-block w-full" href="/github">GitHub</Link>
        </li>
        <li className="p-4 text-[16px] text-white bg-[#333333] text-center rounded-lg font-semibold">
          <Link href="/Frontend-Mentor">Frontend Mentor</Link>
        </li>
        <li className="p-4 text-[16px] text-white bg-[#333333] text-center rounded-lg font-semibold">
          <Link href="/LinkedIn">LinkedIn</Link>
        </li>
        <li className="p-4 text-[16px] text-white bg-[#333333] text-center rounded-lg font-semibold">
          <Link href="">Twitter</Link>
        </li>
        <li className="p-4 text-[16px] text-white bg-[#333333] text-center rounded-lg font-semibold">
          <Link href="">Instagram</Link>
        </li>
      </ul>
    </div>
  );
}
