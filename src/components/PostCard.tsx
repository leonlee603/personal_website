import { Categories } from "@/components/Categories";
import { POSTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PostCard(props: POSTS_QUERYResult[0]) {
  const { title, mainImage, publishedAt, categories } = props;

  return (
    <Link className="flex flex-col" href={`/blog/${props.slug!.current}`}>
      <Card className="flex flex-1 flex-col overflow-hidden shadow-none">
        <CardHeader className="p-0">
          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(293).height(195).url()}
              width={586}
              height={390}
              alt={mainImage.alt || title || ""}
            />
          ) : null}
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-4 pb-2">
          <PublishedAt publishedAt={publishedAt} className="mb-2"/>
          <CardTitle className="mb-2 text-lg">{title}</CardTitle>
          {/* <CardDescription className="flex-1">Card Description</CardDescription> */}
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 p-4">
          <Categories categories={categories} />
        </CardFooter>
      </Card>
    </Link>
  );
}
