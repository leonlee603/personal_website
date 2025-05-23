import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ProjectCard({
  label,
  description = "",
  infoLink,
  demoLink,
  sourceLink,
}: {
  label: string;
  description?: string;
  infoLink?: string;
  demoLink?: string;
  sourceLink?: string;
}) {
  return (
    <Card className="shadow-none dark:bg-muted">
      <CardHeader>
        <CardTitle className="text-lg text-primary">{label}</CardTitle>
        <CardDescription className="pt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex gap-2">
          {infoLink && (
            <li>
              <Button asChild variant="outline">
                <Link href={infoLink}>Article</Link>
              </Button>
            </li>
          )}
          {demoLink && (
            <li>
              <Button asChild variant="outline">
                <a href={demoLink} target="_blank">
                  Demo
                </a>
              </Button>
            </li>
          )}
          {sourceLink && (
            <li>
              <Button asChild variant="outline">
                <a href={sourceLink} target="_blank">
                  Source
                </a>
              </Button>
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
