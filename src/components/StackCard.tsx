import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StackCard({
  padding,
  size,
  icon,
  iconAlt,
  title,
  description,
}: {
  padding: string;
  size: string;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="flex shadow-none dark:bg-muted">
      <div className="flex min-w-[80px] items-center pl-6">
        <div
          className={`h-[56px] w-[56px] rounded-sm bg-secondary ${padding} dark:bg-muted-foreground flex items-center`}
        >
          <Image className={size} src={icon} alt={iconAlt} />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}