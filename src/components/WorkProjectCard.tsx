// import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function WorkProjectCard({
  title,
  imageSrc,
  alt,
  link,
  description
}: {
  title: string;
  imageSrc: StaticImageData;
  alt: string;
  link: string;
  description?: string
}) {
  return (
    <a href={link} target="_blank">
      <Card className="flex h-[100%] flex-1 flex-col overflow-hidden shadow-none">
        <CardHeader className="p-0">
          <Image src={imageSrc} width={586} height={390} alt={alt} placeholder="blur"/>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-4 pb-2">
          <CardTitle className="mb-2 text-lg">{title}</CardTitle>
          <CardDescription className="flex-1">{description || ""}</CardDescription>
        </CardContent>
      </Card>
    </a>
  );
}
