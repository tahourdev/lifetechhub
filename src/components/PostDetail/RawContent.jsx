import clsx from "clsx";
import Image from "next/image";
import React from "react";

function RawContent({ contents }) {
  const renderLink = (child, index) => {
    return (
      <a
        className={clsx(
          `font-normal text-blue-700 no-underline hover:text-blue-500`,
        )}
        key={index}
        href={child.href}
        target="_blank"
        rel={child.rel}
      >
        {child.children.map((linkChild, linkChildIndex) => {
          return renderStyledText(linkChild, linkChildIndex);
        })}
      </a>
    );
  };

  const renderStyledText = (child, index) => {
    if (child.underline && child.bold && child.italic) {
      return (
        <b key={index}>
          <i>
            <u>{child.text}</u>
          </i>
        </b>
      );
    } else if (child.bold && child.underline) {
      return (
        <b key={index}>
          <u>{child.text}</u>
        </b>
      );
    } else if (child.bold && child.italic) {
      return (
        <b key={index}>
          <i>{child.text}</i>
        </b>
      );
    } else if (child.italic && child.underline) {
      return (
        <u key={index}>
          <i>{child.text}</i>
        </u>
      );
    } else if (child.underline) {
      return <u key={index}>{child.text}</u>;
    } else if (child.bold) {
      return <b key={index}>{child.text}</b>;
    } else if (child.italic) {
      return <em key={index}>{child.text}</em>;
    }

    return <span key={index}>{child.text}</span>;
  };

  const renderParagraph = (child, index) => (
    <div key={index}>
      {child.children.map((paragraphChild, childIndex) => {
        if (paragraphChild.type === "link") {
          return renderLink(paragraphChild, childIndex);
        } else if (
          paragraphChild.bold ||
          paragraphChild.underline ||
          paragraphChild.italic
        ) {
          return renderStyledText(paragraphChild, childIndex);
        } else if (paragraphChild.text.includes("\n")) {
          // Replace '\n' with <br /> to preserve line breaks
          const lines = paragraphChild.text.split("\n");
          return lines.map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {lineIndex > 0 && <br />}
              {line}
            </React.Fragment>
          ));
        }
        return <span key={childIndex}>{paragraphChild.text}</span>;
      })}
    </div>
  );

  const renderBulletedList = (child, index) => (
    <ul key={index} className="marker:text-green-500">
      {child.children.map((listItem, listItemIndex) => (
        <li key={listItemIndex}>
          {listItem.children.map((listItemChild, listItemChildIndex) => {
            if (listItemChild.type === "list-item-child") {
              return (
                <React.Fragment key={listItemChildIndex}>
                  {listItemChild.children.map((item, itemIndex) => {
                    if (item.underline || item.bold || item.italic) {
                      return renderStyledText(item, itemIndex);
                    } else if (item.type === "paragraph") {
                      return renderParagraph(item, itemIndex);
                    } else if (item.href) {
                      return (
                        <React.Fragment key={itemIndex}>
                          {renderLink(item, itemIndex)}
                          {renderStyledText(item, itemIndex)}
                        </React.Fragment>
                      );
                    }

                    return item.text;
                  })}
                </React.Fragment>
              );
            }
            return null;
          })}
        </li>
      ))}
    </ul>
  );

  const renderBlockQuote = (child, index) => (
    <React.Fragment key={index} className="">
      {child.children.map((quoteChild, quoteChildIndex) => (
        <blockquote
          className="border-l-[#4c68a2] text-[#3e598f]"
          key={quoteChildIndex}
        >
          {quoteChild.text}
        </blockquote>
      ))}
    </React.Fragment>
  );

  return (
    <div>
      {contents.map((child, index) => {
        if (child.type === "heading-one") {
          return (
            <h1 key={index} className="text-3xl font-medium text-slate-800">
              {child.children[0].text}
            </h1>
          );
        } else if (child.type === "heading-two") {
          return (
            <h2
              className="border-b-[1.5px] border-slate-300/70 pb-2 text-2xl font-medium text-slate-800"
              id={child.id}
              key={index}
            >
              {child.children[0].text}
            </h2>
          );
        } else if (child.type === "heading-three") {
          return (
            <h3 className="text-xl font-medium text-slate-800" key={index}>
              {child.children[0].text}
            </h3>
          );
        } else if (child.type === "paragraph") {
          return renderParagraph(child, index);
        } else if (child.type === "bulleted-list") {
          return renderBulletedList(child, index);
        } else if (child.type === "image") {
          return (
            <React.Fragment key={index}>
              <Image
                priority
                width={500}
                height={500}
                className="h-full w-full rounded-md"
                src={child.src}
                alt=""
              />
            </React.Fragment>
          );
        } else if (child.type === "block-quote") {
          return renderBlockQuote(child, index);
        }
        return null;
      })}
    </div>
  );
}

export default RawContent;
