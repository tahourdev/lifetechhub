import React from "react";

const PagePost = ({ data }) => {
  return (
    <div>
      {data?.children.map((element, index) => {
        switch (element.type) {
          case "paragraph":
            return (
              <p key={index}>
                {element.children.map((child, childIndex) => {
                  if (child.bold) {
                    return <b>{child.text}</b>;
                  }
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
                  } else if (child.text) {
                    return (
                      <React.Fragment key={childIndex}>
                        {child.text}
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </p>
            );
          case "bulleted-list":
            return (
              <div key={index}>
                {element.children.map((listItem, listItemIndex) => {
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
                                      return <b>{item.text}</b>;
                                    } else if (item.href) {
                                      return (
                                        <React.Fragment key={index}>
                                          {item.children.map(
                                            (itemChild, index) => {
                                              return (
                                                <a
                                                  key={index}
                                                  target="_blank"
                                                  href={item.href}
                                                >
                                                  {itemChild.text}
                                                </a>
                                              );
                                            },
                                          )}
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
              </div>
            );
          case "block-quote":
            return (
              <blockquote key={index}>
                {element.children.map((quoteChild, quoteChildIndex) => (
                  <React.Fragment key={quoteChildIndex}>
                    {quoteChild.text}
                  </React.Fragment>
                ))}
              </blockquote>
            );
          // Add more cases for other types if needed
          default:
            return null;
        }
      })}
    </div>
  );
};

export default PagePost;
