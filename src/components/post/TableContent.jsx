import React from 'react';

const TableContent = ({ postDetails }) => {
  const tableContent = postDetails.content.raw;
  const h4 = tableContent.children.map((content) => content);
  console.log(h4);

  return (
    <div>
      <h3>Content</h3>
      {tableContent.children.map((content, index) => {
        if (content.type === 'heading-four') <h2 key={index}></h2>;
        return null;
      })}
    </div>
  );
};

export default TableContent;
