// libraries for image component
import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
// libraries for code block component
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,
    code: (props) => {
      if (!props.value) return null;
      const { code, language } = props.value;
      return (
        <div>
          <SyntaxHighlighter
            language={language}
            style={materialDark}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};
