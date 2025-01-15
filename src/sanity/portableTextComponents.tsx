import Image from 'next/image';
import { PortableTextComponents, toPlainText } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
// libraries for code block component
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import slugify from 'slugify';

export const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const slug = slugify(toPlainText(value), {
        lower: true,
        remove: /[.]/g,
      });
      return <h2 id={slug}>{children}</h2>;
    },
    h3: ({ children, value }) => {
      const slug = slugify(toPlainText(value), {
        lower: true,
        remove: /[.]/g,
      });
      return <h3 id={slug}>{children}</h3>;
    },
    h4: ({ children, value }) => {
      const slug = slugify(toPlainText(value), {
        lower: true,
        remove: /[.]/g,
      });
      return <h4 id={slug}>{children}</h4>;
    },
  },
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="not-prose h-auto w-full"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto('format')
            .url()}
          alt={props?.value?.alt || ''}
          width="600"
          height="400"
        />
      ) : null,
    code: (props) => {
      if (!props.value) return null;
      const { code, language, filename } = props.value;
      const customHighlighterFileNameStyle = {
        margin: '0.5em 0px 0px',
        padding: '0.6em 1em',
        color: '#CCC',
        borderTopLeftRadius: '0.375rem',
        borderTopRightRadius: '0.375rem',
        backgroundColor: 'rgb(47, 47, 47)',
        borderStyle: "solid",
        borderColor: '#CCC',
        borderWidth: '0 0 1px',
      };
      const customHighlighterStyle = {
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        margin: '0px 0px 0.5em'
      };
      
      return (
        <div style={{fontSize: '0.875rem'}}>
          {filename && <div className="text-sm" style={customHighlighterFileNameStyle}>{filename}</div>}
          <SyntaxHighlighter
            language={language}
            style={materialDark}
            showLineNumbers
            customStyle={filename ? customHighlighterStyle : undefined}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};
