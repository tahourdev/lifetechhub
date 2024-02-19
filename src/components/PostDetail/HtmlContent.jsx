import React from "react";

const HtmlContent = ({ postDetails }) => {
  const content = postDetails.content.html;
  return (
    <div
      className="prose-lg prose-stone list-disc prose-a:decoration-blue-500 prose-a:decoration-2 prose-a:underline-offset-8 
          prose-li:marker:text-xl prose-li:marker:text-red-400 prose-img:rounded-xl"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default HtmlContent;
