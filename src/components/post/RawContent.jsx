function RawContent({ content }) {
  const rawContent = content.content.raw.children;
  // Function to generate an ID from the title
  const generateIdFromTitle = (title) => {
    // Remove leading numbers followed by a dot and trim spaces
    const id = title.replace(/^\d+\.\s*/, '').trim();
    // Remove question marks
    const idWithoutQuestionMarks = id.replace(/\?/g, '');
    // Replace spaces, dots, and question marks with dashes and convert to lowercase
    return idWithoutQuestionMarks.toLowerCase().replace(/[ .?]/g, '-');
  };

  // Inject IDs and anchor links into all h2 tags
  const modifiedContent = rawContent.map((child) => {
    if (child.type === 'heading-two') {
      const title = child.children[0].text;
      const id = generateIdFromTitle(title);
      return {
        ...child,
        id, // Inject ID
        children: [
          {
            ...child.children[0],
            text: `${title}`, // Inject anchor link
          },
        ],
      };
    } else {
      return child;
    }
  });
  console.log(modifiedContent);

  return (
    <article>
      {modifiedContent.map((child, index) => {
        if (child.type === 'heading-two') {
          // Render h2 tag with ID and anchor link
          return (
            <h2 id={child.id} key={index}>
              {child.children[0].text}
            </h2>
          );
        } else if (child.type === 'paragraph') {
          // Render paragraph tag
          return (
            <p key={index}>
              {child.children.map((textNode, index) => (
                <>
                  <span className={textNode.bold ? 'font-bold' : ''} key={index}>
                    {textNode.text}
                  </span>
                </>
              ))}
            </p>
          );
        } else if (child.type === 'bulleted-list') {
          return (
            <ul key={index}>
              {child.children.map((listItems, index) => (
                <li className='marker:text-green-500' key={index}>
                  {listItems.children.map((text) => text.children.map((text) => text.text))}
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
