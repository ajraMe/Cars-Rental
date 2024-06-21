import React from 'react'
import Link from "next/link";
import {FaTwitter, FaFacebook, FaYoutube, FaInstagram,FaTelegram} from "react-icons/fa";

const socials = [
    {icon: <FaTwitter />, path: ""},
    {icon: <FaFacebook />, path: ""},
    {icon: <FaYoutube />, path: ""},
    {icon: <FaInstagram />, path: ""},
    {icon: <FaTelegram />, path: ""},
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;