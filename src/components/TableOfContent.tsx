"use client";

import { cn } from "@/lib/utils";
import { NOTE_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import slugify from "slugify";
import { useEffect, useMemo, useState } from "react";

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

function flattenHeadings(nodes: TreeNode[]): TreeNode[] {
  return nodes.flatMap((node) => [
    node,
    ...(node.children ? flattenHeadings(node.children) : []),
  ]);
}

export function RenderToc({
  elements,
  activeId,
  level = 1,
}: {
  elements: TreeNode[];
  activeId?: string;
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
      {elements.map((el) => {
        const isActive = el.slug === activeId;

        return (
          <li
            key={el.text}
            className={cn({
              "[&:first-child]:mt-2": level > 1,
            })}
          >
            <Link
              href={`#${el.slug}`}
              className={cn(
                "no-underline transition-colors hover:bg-secondary px-2 py-1 rounded-md",
                isActive ? "font-semibold text-primary bg-secondary" : "text-foreground"
              )}
            >
              {el.text}
            </Link>
            {el.children && (
              <RenderToc
                elements={el.children}
                level={level + 1}
                activeId={activeId}
              />
            )}
          </li>
        );
      })}
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
  const nestedHeadings = useMemo(() => nestHeadings(headings), [headings]);
  const flatHeadings = useMemo(
    () => flattenHeadings(nestedHeadings),
    [nestedHeadings]
  );
  const [activeId, setActiveId] = useState("");

  // useEffect(() => {
  //   const headingElements = flatHeadings
  //     .map((heading) => document.getElementById(heading.slug))
  //     .filter((el): el is HTMLElement => !!el);

  //   if (!headingElements.length) return;

  //   const visibleHeadings = new Map<string, IntersectionObserverEntry>();

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         visibleHeadings.set(entry.target.id, entry);
  //       });

  //       const currentlyVisible = Array.from(visibleHeadings.values())
  //         .filter((entry) => entry.isIntersecting)
  //         .sort((a, b) => {
  //           const aIndex = flatHeadings.findIndex(
  //             (h) => h.slug === a.target.id
  //           );
  //           const bIndex = flatHeadings.findIndex(
  //             (h) => h.slug === b.target.id
  //           );
  //           return aIndex - bIndex;
  //         });

  //       if (currentlyVisible.length > 0) {
  //         setActiveId(currentlyVisible[0].target.id);
  //       }
  //     },
  //     {
  //       rootMargin: "-80px 0px -60% 0px",
  //       threshold: 0,
  //     }
  //   );

  //   headingElements.forEach((el) => observer.observe(el));

  //   return () => observer.disconnect();
  // }, [flatHeadings]);

  useEffect(() => {
    const headingElements = flatHeadings
      .map((heading) => document.getElementById(heading.slug))
      .filter((el): el is HTMLElement => !!el);
  
    if (!headingElements.length) return;
  
    const visibleHeadings = new Map<string, IntersectionObserverEntry>();
    const lastHeading = flatHeadings[flatHeadings.length - 1];
  
    const setActiveHeadingFromVisible = () => {
      const currentlyVisible = Array.from(visibleHeadings.values())
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          const aIndex = flatHeadings.findIndex((h) => h.slug === a.target.id);
          const bIndex = flatHeadings.findIndex((h) => h.slug === b.target.id);
          return aIndex - bIndex;
        });
  
      if (currentlyVisible.length > 0) {
        setActiveId(currentlyVisible[0].target.id);
      }
    };
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleHeadings.set(entry.target.id, entry);
        });
  
        setActiveHeadingFromVisible();
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );
  
    headingElements.forEach((el) => observer.observe(el));
  
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
  
      const isNearBottom = scrollTop + viewportHeight >= fullHeight - 24;
  
      if (isNearBottom && lastHeading) {
        setActiveId(lastHeading.slug);
        return;
      }
  
      setActiveHeadingFromVisible();
    };
  
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [flatHeadings]);

  return (
    <section className="sticky top-16 my-5 flex flex-col px-9">
      <div className="font-bold" style={{ margin: "0" }}>
        {title ?? "Table of Contents"}
      </div>
      <nav className="">
        <RenderToc
          elements={nestHeadings(headings)}
          level={1}
          activeId={activeId}
        />
      </nav>
    </section>
  );
}
