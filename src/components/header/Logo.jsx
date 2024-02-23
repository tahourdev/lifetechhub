import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      width={600}
      height={300}
      className="h-auto w-auto"
      src="/logo.png"
      alt="logo"
      priority
    />
  );
};

export default Logo;
