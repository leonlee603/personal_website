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
    <Card className="flex flex-col shadow-none dark:border-accent dark:bg-muted">
      <CardHeader className="flex-1">
        <CardTitle className="text-lg text-primary">{label}</CardTitle>
        <CardDescription className="pt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex gap-2">
          {infoLink && (
            <li>
              <Button asChild variant="outline" className="dark:bg-muted dark:border-accent dark:hover:border-primary dark:hover:text-primary transition-colors">
                <Link href={infoLink}>Article</Link>
              </Button>
            </li>
          )}
          {demoLink && (
            <li>
              <Button asChild variant="outline" className="dark:bg-muted dark:border-accent dark:hover:border-primary dark:hover:text-primary transition-colors">
                <a href={demoLink} target="_blank">
                  Demo
                </a>
              </Button>
            </li>
          )}
          {sourceLink && (
            <li>
              <Button asChild variant="outline" className="dark:bg-muted dark:border-accent dark:hover:border-primary dark:hover:text-primary transition-colors">
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
