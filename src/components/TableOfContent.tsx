import { cn } from "@/lib/utils";
import { NOTE_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import slugify from "slugify";

// Define the type for the Headings
type Headings = NonNullable<NOTE_QUERYResult>["headings"];

// Define the type for each node in the tree structure
type TreeNode = {
  text: string;
  slug: string;
  children?: TreeNode[];
};

export function nestHeadings(blocks: Headings): TreeNode[] {
  const treeNodes: TreeNode[] = [];
  const stack: { node: TreeNode; level: number }[] = [];

  blocks?.forEach((block) => {
    if (!block.style || !block.children) return;

    const level = parseInt(block.style.replace("h", ""), 10);

    const text =
      block.children.map((child) => child.text || "").join(" ") || "Untitled";

    const treeNode: TreeNode = {
      slug: slugify(text, {
        lower: true,
        remove: /[.]/g,
      }),
      text,
      children: [],
    };

    while (stack.length > 0) {
      const topStack = stack[stack.length - 1];

      if (topStack && topStack.level < level) break;

      stack.pop();
    }

    if (stack.length > 0) {
      const parentNode = stack[stack.length - 1]?.node;
      if (parentNode && !parentNode.children) {
        parentNode.children = [];
      }
      parentNode?.children?.push(treeNode);
    } else {
      treeNodes.push(treeNode);
    }

    stack.push({ node: treeNode, level });
  });

  return treeNodes;
}

export function RenderToc({
  elements,
  level = 1,
}: {
  elements: TreeNode[];
  level?: number;
}) {
  return (
    <ul
      className={cn("space-y-2 text-sm font-semibold list-none", {
        "space-y-1 font-normal": level > 1,
        "space-y-3.5 border-l": level === 1,
      })}
      style={{ paddingInlineStart: "0.5rem" }}
    >
      {elements.map((el) => (
        <li
          key={el.text}
          className={cn({
            "[&:first-child]:mt-2": level > 1,
          })}
        >
          <Link
            href={`#${el.slug}`}
            className="hover:underline hover:underline-offset-4"
          >
            {el.text}
          </Link>
          {el.children && (
            <RenderToc elements={el.children} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export function Toc({
  headings,
  title,
}: {
  headings: Headings;
  title?: string;
}) {
  return (
    <section className="sticky top-16 my-5 flex flex-col px-9">
      <div className="font-bold" style={{ margin: "0" }}>
        {title ?? "Table of Contents"}
      </div>
      <nav className="">
        <RenderToc elements={nestHeadings(headings)} level={1} />
      </nav>
    </section>
  );
}
