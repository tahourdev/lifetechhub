import React from 'react';
import Image from 'next/image';

export default function FooterLogo() {
  return (
    <div className='w-full md:px-0 px-10'>
      <Image width={200} height={100} src='/logo.png' alt='Logo' quality={100} />
      <p className='prose prose-sm dark:prose-invert mt-6'>
        Welcome to Life Tech Hub – your ultimate destination for tech updates, health insights, travel
        adventures, how-to guides, and cultural highlights. Explore a hub of diverse content that enriches
        your life with knowledge and entertainment.
      </p>
    </div>
  );
}
