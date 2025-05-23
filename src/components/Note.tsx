import { Categories } from "@/components/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { NOTE_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import Title from "@/components/Title";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Toc } from "./TableOfContent";

export function Note(props: NonNullable<NOTE_QUERYResult>) {
  const { title, body, publishedAt, topics, headings } = props;

  return (
    <article className="flex flex-col gap-10 md:gap-14 lg:gap-20">
      <header className="flex flex-col gap-4">
        <div className="inline-block">
          <Link href="/notes">
            <Button variant="link" className="p-0 text-foreground">
              NOTES
            </Button>
          </Link>
          &nbsp;/
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex w-[100%] flex-col pr-0 md:w-[70%] md:pr-9">
            <Title>{title}</Title>
            <div className="mt-4 flex flex-col gap-4 md:mt-6 lg:mt-8">
              <div className="text-lg font-bold text-muted-foreground">
                Topics
              </div>
              <div className="flex flex-row items-center gap-4">
                <Categories categories={topics} />
              </div>
              <div className="flex flex-row text-xs text-muted-foreground">
                Published on&nbsp;
                <PublishedAt publishedAt={publishedAt} />
              </div>
            </div>
          </div>
          <div className="hidden overflow-hidden rounded-md md:block md:w-[30%]">
            {/* {mainImage ? (
              <figure className="flex flex-col items-start gap-2">
                <Image
                  src={urlFor(mainImage).width(624).url()}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={500}
                  height={300}
                  alt=""
                />
              </figure>
            ) : null} */}
          </div>
        </div>
      </header>

      {body ? (
        <div
          className="prose flex flex-row text-foreground lg:prose-lg"
          style={{ maxWidth: "unset" }}
        >
          <div className="potable-text-container w-[100%] md:w-[70%]">
            <PortableText value={body} components={components} />
          </div>
          <div className="hidden md:block md:w-[30%]">
            <Toc headings={headings} title="Table of Contents" />
          </div>
        </div>
      ) : null}
    </article>
  );
}
