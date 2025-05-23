import { Categories } from "@/components/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import Title from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="flex flex-col gap-10 md:gap-14 lg:gap-20">
      <header className="flex flex-col gap-4">
        <div className="inline-block">
          <Link href="/blog">
            <Button variant="link" className="p-0 text-foreground">
              BLOG
            </Button>
          </Link>
          &nbsp;/
        </div>
        <div className="flex flex-col">
          <Title>{title}</Title>
          <div className="mt-4 flex flex-col gap-4 md:mt-6 lg:mt-8">
            <div className="text-lg font-bold text-muted-foreground">
              Topics
            </div>
            <div className="flex flex-row items-center gap-4">
              <Categories categories={categories} />
            </div>
            <div className="flex flex-row text-xs text-muted-foreground">
              Published on&nbsp;
              <PublishedAt publishedAt={publishedAt} />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-11 md:flex-row">
        <div>
          <div className="w-[100%] overflow-hidden rounded-md md:w-auto">
            {mainImage ? (
              <figure className="flex flex-col items-start gap-2 lg:col-span-4">
                <Image
                  src={urlFor(mainImage).width(400).height(400).url()}
                  width={400}
                  height={400}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </figure>
            ) : null}
          </div>
        </div>
        <div className="w-[100%] md:w-[70%]">
          {body ? (
            <div
              className="prose text-foreground lg:prose-lg"
              style={{ maxWidth: "100%" }}
            >
              <PortableText value={body} components={components} />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
