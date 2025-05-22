import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Title from "@/components/Title";
import PostPageHeader from "@/components/PostPageHeader";
import figmaIcon from "../../../../public/stacks/figma.avif";
import htmlIcon from "../../../../public/stacks/html.svg";
import cssIcon from "../../../../public/stacks/css.svg";
import reactIcon from "../../../../public/stacks/react.svg";
import notionIcon from "../../../../public/stacks/notion.avif";
import nextIcon from "../../../../public/stacks/nextjs.svg";
import wordpressIcon from "../../../../public/stacks/wordpress.png";
import teamsIcon from "../../../../public/stacks/teams.svg";

export const metadata = {
  title: "Stacks",
};

export default function page() {
  return (
    <main className="px-8">
      <section className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Stacks</Title>
          <div className="text-muted-foreground">My Tech Toolbox</div>
        </PostPageHeader>
        <hr />
        <div className="grid grid-cols-3 gap-4">
            <Card className="flex shadow-none">
              <div className="flex items-center pl-6">
                <div className="rounded-sm bg-secondary p-2">
                  <Image className="w-[40px]" src={htmlIcon} alt="figma icon" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>HTML</CardTitle>
                <CardDescription>Markup Language</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none">
              <div className="flex items-center pl-6">
                <div className="rounded-sm bg-secondary p-2">
                  <Image
                    className="w-full max-w-[40px]"
                    src={cssIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>CSS</CardTitle>
                <CardDescription>Visual Styling</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none">
              <div className="flex items-center pl-6">
                <div className="rounded-sm bg-secondary p-2">
                  <Image
                    className="w-full max-w-[40px]"
                    src={reactIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>React</CardTitle>
                <CardDescription>Javascript Library</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none">
              <div className="flex items-center pl-6">
                <div className="rounded-sm bg-secondary p-2">
                  <Image
                    className="w-full max-w-[40px]"
                    src={nextIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Next.js</CardTitle>
                <CardDescription>React Framework</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none">
              <div className="flex items-center pl-6">
                <div className="rounded-sm bg-secondary p-3">
                  <Image
                    className="w-full max-w-[32px]"
                    src={wordpressIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Wordpress</CardTitle>
                <CardDescription>Dynamic Development</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none">
              <div className="flex items-center pl-6">
                <div className="rounded-sm bg-secondary p-3">
                  <Image
                    className="w-[32px]"
                    src={figmaIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Figma</CardTitle>
                <CardDescription>Web Design</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none">
              <div className="flex items-center pl-6">
                <div className="rounded-sm bg-secondary p-3">
                  <Image
                    className="w-full max-w-[32px]"
                    src={notionIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Notion</CardTitle>
                <CardDescription>Note Taking App</CardDescription>
              </CardHeader>
            </Card>
            <Card className="flex shadow-none">
              <div className="flex items-center pl-6">
                <div className="rounded-sm bg-secondary p-3">
                  <Image
                    className="w-full max-w-[32px]"
                    src={teamsIcon}
                    alt="figma icon"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Teams</CardTitle>
                <CardDescription>Message App</CardDescription>
              </CardHeader>
            </Card>
          </div>
      </section>
    </main>
  );
}
