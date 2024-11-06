import React from "react";
import { SocialIcon } from "react-social-icons";
import { AiOutlinePhone } from "react-icons/ai";
import Image from "next/image";

export default function BusinessCard() {
  const socials = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/lucas-guillemette/",
    },
    { title: "GitHub", url: "https://github.com/lgilmet" },
    { title: "Twitter", url: "https://twitter.com/lucagilmet" },
    { title: "Instagram", url: "https://www.instagram.com/lucasguillemette/" },
  ];

  return (
    <div className=" flex items-center justify-center ">
      <div className="flex group md:aspect-[1.76] bg-secondary transition-all duration-200 mx-2 flex-col flex-wrap sm:flex-row gap-2 md:gap-6 md:min-w-none  p-4  rounded-lg drop-shadow-lg hover:drop-shadow-2xl">
        <div className="flex flex-col ">
          <div className="flex flex-col items-center flex-1">
            <div className="flex flex-col ">
              <Image
                className="h-32 w-32  rounded-full  transition-all duration-200"
                src="/img/lucas-selfie.jpg"
                alt="Lucas Guillemette"
                width={128}
                height={128}
              />
            </div>
          </div>
          <p className="text-xl pt-4">Lucas Guillemette</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col flex-1 ">
            <div className="">
              <p className="font-semibold">Web Developer | Photographer</p>
              {/* <p className="mb-4 text-sm">for bureau1024</p> */}
            </div>
            <p className="mt-2">
              <a
                href="mailto:
              i.lucas.guillemette@gmail.com"
                className="underline underline-offset-2 hover:underline-offset-1"
                target="_blank"
                rel="noreferrer"
              >
                i.lucas.guillemette@gmail.com
              </a>
            </p>
            <p className="group flex gap-1 items-center ">
              <a
                href="tel:514-993-7415"
                className="group-hover:underline underline-offset-2 hover:underline-offset-1"
                target="_blank"
                rel="noreferrer"
              >
                514-993-7415
              </a>
              <AiOutlinePhone className="hidden group-hover:block" />
            </p>
          </div>
          <div className="inline-block flex gap-2">
            {socials?.map((social) => (
              <SocialIcon
                bgColor="#0000"
                fgColor="currentColor"
                style={{
                  height: 36,
                  width: 36,
                  marginLeft: "-8px",
                  marginBottom: "-4px",
                }}
                className="hover:bg-white/30 rounded-full hover:border hover:bg-white transition-all duration-200"
                key={social.title}
                // label={social.title}
                target="_blank"
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
