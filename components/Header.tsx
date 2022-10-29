import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
    socials: Social[];
};

export default function Header({ socials }: Props) {
    return (
        <header className="flex justify-between max-w-screen-lg lg:mx-auto m-4">
            <div>
                <p>Lucas Guillemette</p>
                <p>Web dev</p>
            </div>

            <div className="text-right">
                <p>i.lucas.guillemette@gmail.com</p>
                <p>514-993-7415</p>
                {socials?.map((social) => (
                    <SocialIcon
                        className="ml-2"
                        style={{ height: 25, width: 25 }}
                        key={social._id}
                        label={social.title}
                        target="_blank"
                        url={social.url}
                    />
                ))}
            </div>
        </header>
    );
}