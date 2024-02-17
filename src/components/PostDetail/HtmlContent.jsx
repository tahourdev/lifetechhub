import React from 'react';

const HtmlContent = ({ postDetails }) => {
  const content = postDetails.content.html;
  return (
    <div
      className='prose-a:decoration-blue-500 prose-li:marker:text-red-400 prose-li:marker:text-xl list-disc prose-lg prose-stone 
          prose-a:decoration-2 prose-a:underline-offset-8 prose-img:rounded-xl'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default HtmlContent;
