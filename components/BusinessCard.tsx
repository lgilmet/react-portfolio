/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { SocialIcon } from "react-social-icons";
// import { Social } from "../typings";

export default function BusinssCard() {
  const socials = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/lucas-guillemette/",
    },
    { title: "GitHub", url: "https://github.com/lgilmet" },
    // { title: "Twitter", url: "" },
    { title: "Instagram", url: "https://www.instagram.com/lucasguillemette/" },
  ];

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex  group md:aspect-[1.76] hover:bg-white/50 transition-all duration-200 mx-2 flex-col flex-wrap sm:flex-row gap-2 md:gap-6 md:min-w-none bg-white/30 p-4 border rounded-md border-slate-200 drop-shadow-lg hover:drop-shadow-2xl">
        <div className="flex flex-col ">
          <div className="flex flex-col items-center flex-1">
            <div className="flex flex-col ">
              <img
                className="h-32 w-32  rounded-full blur-sm group-hover:blur-none transition-all duration-200"
                src="https://media.licdn.com/dms/image/C4E03AQEGeI0pyFfi5A/profile-displayphoto-shrink_400_400/0/1631146324116?e=1676505600&v=beta&t=BUaU9aLaedg4Y0HdMpu0B2Hgf0tR83LIEbkoqqyC0wc"
                alt="Lucas Guillemette"
              />
            </div>
          </div>
          <p className="text-xl pt-4">Lucas Guillemette</p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col flex-1 ">
            <p className="mb-4 font-semibold">Web Developer | Photographer</p>
            <p className="">
              <a
                href="mailto:
              i.lucas.guillemette@gmail.com"
                target="_blank">
                i.lucas.guillemette@gmail.com
              </a>
            </p>
            <p className="">
              <a href="tel:514-993-7415" target="_blank">
                514-993-7415
              </a>
            </p>
          </div>
          <div className="inline-block mt-4">
            {socials?.map((social) => (
              <SocialIcon
                bgColor="#0000"
                fgColor="#000"
                className="mr-2 hover:bg-white/30 rounded-full"
                style={{
                  height: 36,
                  width: 36,
                  marginLeft: "-8px",
                  marginBottom: "-4px",
                }}
                key={social.title}
                label={social.title}
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
