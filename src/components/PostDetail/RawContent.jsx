import clsx from "clsx";

function RawContent({ contents }) {
  return (
    <article>
      {contents.map((child, index) => {
        if (child.type === "heading-two") {
          // Render h2 tag with ID and anchor link
          return (
            <h2
              className="font-medium text-slate-800"
              id={child.id}
              key={index}
            >
              {child.children[0].text}
            </h2>
          );
        } else if (child.type === "paragraph") {
          // Render paragraph tag
          return (
            <p className="font-[400] text-slate-700" key={index}>
              {child.children.map((textNode, index) => (
                <>
                  <span
                    className={textNode.bold ? "font-bold" : ""}
                    key={index}
                  >
                    {textNode.text}
                  </span>
                </>
              ))}
            </p>
          );
        } else if (child.type === "bulleted-list") {
          return (
            <ul key={index}>
              {child.children.map((listItems, index) => (
                <li className="marker:text-green-500" key={index}>
                  {listItems.children.map((text) =>
                    text.children.map((text) => text.text),
                  )}
                </li>
              ))}
            </ul>
          );
        }
        // Add other cases for different types as needed
        return null;
      })}
    </article>
  );
}

export default RawContent;
