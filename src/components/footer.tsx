import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-between mt-auto mb-2 text-[10px] lg:text-[12px] max-custom-xsm:text-[8px] max-md:px-[2%] ">
      <p className="">© 2024 Amirov&apos;s Prod. All rights reserved.</p>
      <a
        href="https://wa.me/380965360759"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-500 transition"
      >
        Connect with Me
      </a>
    </footer>
  );
}
