import ReactMarkdown from "react-markdown";

// Import markdown files
import markdown from '../md/es/work-and-stage-with-us.md';

const MarkdownTest = () => {
  return (
    <article className="prose lg:prose-xl">
      <ReactMarkdown
        // Pass it as children
        children={markdown}
        skipHtml // Skip this if you don't use ChakraUI
      />
    </article>
  );
};

export default MarkdownTest;