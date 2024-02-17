import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image height={100} width={220} quality={70} src="/logo.png" alt="logo" />
  );
};

export default Logo;
