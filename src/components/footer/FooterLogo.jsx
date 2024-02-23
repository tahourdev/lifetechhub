import React from "react";
import Image from "next/image";

export default function FooterLogo() {
  return (
    <div className="w-full px-10 md:px-0">
      <Image
        width={200}
        height={100}
        className="h-auto w-auto"
        src="/logo.png"
        alt="Logo"
        priority
        quality={100}
      />
      <p className="prose prose-sm mt-6 text-slate-300 dark:prose-invert">
        Welcome to Life Tech Hub – your ultimate destination for tech updates,
        health insights, travel adventures, how-to guides, and cultural
        highlights. Explore a hub of diverse content that enriches your life
        with knowledge and entertainment.
      </p>
    </div>
  );
}
