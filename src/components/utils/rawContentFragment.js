import Image from "next/image";
import React from "react";

export default function getRawContentFragment(index, text, obj, type) {
  let modifiedText = text;

  const renderStyledText = (child, index) => {
    if (child.underline && child.bold && child.italic) {
      return (
        <b key={index}>
          <i>
            <u>{child.text}</u>
          </i>
        </b>
      );
    } else if (child.bold && child.italic) {
      return (
        <b key={index}>
          <i>{child.text}</i>
        </b>
      );
    } else if (child.bold) {
      return <b key={index}>{child.text}</b>;
    } else if (child.italic) {
      return <em key={index}>{child.text}</em>;
    }

    return <span key={index}>{child.text}</span>;
  };

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case "heading-one":
      return (
        <h2 key={index} className="mb-4 text-3xl font-semibold">
          {modifiedText}
        </h2>
      );
    case "heading-two":
      return (
        <h2 key={index} className="mb-4 text-2xl font-semibold">
          {modifiedText}
        </h2>
      );

    case "heading-three":
      return (
        <h3 key={index} className="text-xl font-semibold">
          {modifiedText}
        </h3>
      );
    case "heading-four":
      return (
        <h4 key={index} className="">
          {modifiedText}
        </h4>
      );
    case "paragraph":
      return (
        <div key={index}>
          {obj.children.map((child, childIndex) => {
            if (child.type === "link") {
              return (
                <a
                  key={childIndex}
                  href={child.href}
                  target="_blank"
                  rel={child.rel}
                >
                  {child.children.map((linkChild, linkChildIndex) => (
                    <React.Fragment key={linkChildIndex}>
                      {linkChild.text}
                    </React.Fragment>
                  ))}
                </a>
              );
            } else if (child.bold || child.underline || child.italic) {
              return renderStyledText(child, childIndex);
            } else if (child.text) {
              return renderStyledText(child, childIndex);
            }
            return null;
          })}
        </div>
      );
    case "bulleted-list":
      return (
        <React.Fragment key={index}>
          {obj.children.map((listItem, listItemIndex) => {
            if (listItem.type === "list-item") {
              return (
                <li key={listItemIndex} className="marker:text-green-500">
                  {listItem.children.map(
                    (listItemChild, listItemChildIndex) => {
                      if (listItemChild.type === "list-item-child") {
                        return (
                          <React.Fragment key={listItemChildIndex}>
                            {listItemChild.children.map((item, index) => {
                              if (item.bold) {
                                return <b key={index}>{item.text}</b>;
                              } else if (item.href) {
                                return (
                                  <React.Fragment key={index}>
                                    {item.children.map((itemChild, index) => {
                                      return (
                                        <a
                                          key={index}
                                          target="_blank"
                                          href={item.href}
                                        >
                                          {itemChild.text}
                                        </a>
                                      );
                                    })}
                                  </React.Fragment>
                                );
                              } else if (item.type === "paragraph") {
                                return (
                                  <React.Fragment key={index}>
                                    {item.children.map((item, i) => {
                                      if (item.bold) {
                                        return <b key={i}>{item.text}</b>;
                                      }
                                      return item.text;
                                    })}
                                  </React.Fragment>
                                );
                              }
                              return item.text;
                            })}
                          </React.Fragment>
                        );
                      }
                    },
                  )}
                </li>
              );
            }
          })}
        </React.Fragment>
      );

    case "image":
      return (
        <Image
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
          priority
        />
      );

    case "block-quote":
      return (
        <React.Fragment key={index} className="">
          <blockquote className="border-l-[#4c68a2] text-[#3e598f]">
            {modifiedText}
          </blockquote>
        </React.Fragment>
      );

    default:
      return modifiedText;
  }
}
