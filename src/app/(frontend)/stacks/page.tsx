import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "@/components/Title";
import PostPageHeader from "@/components/PostPageHeader";
import htmlIcon from "../../../../public/stacks/html.svg";
import cssIcon from "../../../../public/stacks/css.svg";
import jsIcon from "../../../../public/stacks/javascript.svg";
import reactIcon from "../../../../public/stacks/react.svg";
import nextIcon from "../../../../public/stacks/nextjs.svg";
import gatsbyIcon from "../../../../public/stacks/gatsby.svg";
import erbIcon from "../../../../public/stacks/erb.png";
import phpIcon from "../../../../public/stacks/php.svg";
import notionIcon from "../../../../public/stacks/notion.avif";
import wordpressIcon from "../../../../public/stacks/wordpress.svg";
import sanityIcon from "../../../../public/stacks/sanity.svg";
import payloadIcon from "../../../../public/stacks/payload.svg";
import gitIcon from "../../../../public/stacks/git.svg";
import forkIcon from "../../../../public/stacks/fork.png";
import bitbucketIcon from "../../../../public/stacks/bitbucket.svg";
import authjsIcon from "../../../../public/stacks/authjs.webp";
import clerkIcon from "../../../../public/stacks/clerk.avif";
import supabaseIcon from "../../../../public/stacks/supabase.svg";
import nenoIcon from "../../../../public/stacks/neon.svg";
import prismaIcon from "../../../../public/stacks/prisma.svg";
import drizzleIcon from "../../../../public/stacks/drizzle.webp";
import figmaIcon from "../../../../public/stacks/figma.avif";
import jiraIcon from "../../../../public/stacks/jira.svg";
import teamsIcon from "../../../../public/stacks/teams.svg";
import vscodeIcon from "../../../../public/stacks/vscode.svg";
import vueIcon from "../../../../public/stacks/vue.svg";
import firebaseIcon from "../../../../public/stacks/firebase.svg";

export const metadata = {
  title: "Stacks",
};

export default function page() {
  return (
    <main className="px-8">
      <section className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Stacks</Title>
          <div className="text-muted-foreground">My tech toolbox</div>
        </PostPageHeader>
        <hr />
        <div className="mb-10 mt-6 md:mb-20 md:mt-9 lg:mb-24 lg:mt-12">
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Development
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-2 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[40px]"
                      src={htmlIcon}
                      alt="HTML icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>HTML</CardTitle>
                  <CardDescription>Markup Language</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-2 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[40px]"
                      src={cssIcon}
                      alt="CSS icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>CSS</CardTitle>
                  <CardDescription>Visual Styling</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={jsIcon}
                      alt="Javascript icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Javascript</CardTitle>
                  <CardDescription>Programming Language</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-2 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[40px]"
                      src={reactIcon}
                      alt="React icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>React</CardTitle>
                  <CardDescription>Javascript Library</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={nextIcon}
                      alt="Next icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Next.js</CardTitle>
                  <CardDescription>React Framework</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={vueIcon}
                      alt="Vue icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Vue.js</CardTitle>
                  <CardDescription>Javascript Framework</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-2 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[40px]"
                      src={gatsbyIcon}
                      alt="Gatsby icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Gatsby</CardTitle>
                  <CardDescription>React Framework</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-2 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[40px]"
                      src={erbIcon}
                      alt="Electron React Boilerplate icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Electron React Boilerplate</CardTitle>
                  <CardDescription>React Desktop App</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image className="w-[32px]" src={phpIcon} alt="PHP icon" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>PHP</CardTitle>
                  <CardDescription>Programming Language</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={wordpressIcon}
                      alt="Wordpress icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Wordpress</CardTitle>
                  <CardDescription>Dynamic Development</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={sanityIcon}
                      alt="Sanity icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Sanity</CardTitle>
                  <CardDescription>Headless CMS</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={payloadIcon}
                      alt="Payload icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Payload</CardTitle>
                  <CardDescription>Headless CMS</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Version Control
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={gitIcon}
                      alt="Git icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Git</CardTitle>
                  <CardDescription>Version Control</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={forkIcon}
                      alt="Fork icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Fork</CardTitle>
                  <CardDescription>Git Client</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={bitbucketIcon}
                      alt="Bitbucket icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Bitbucket</CardTitle>
                  <CardDescription>Version Control System</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Authentication
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={authjsIcon}
                      alt="Auth.js icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Auth.js</CardTitle>
                  <CardDescription>Auth Library</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={clerkIcon}
                      alt="Clerk icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Clerk</CardTitle>
                  <CardDescription>Auth Library</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Database
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={supabaseIcon}
                      alt="Supabase icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Supabase</CardTitle>
                  <CardDescription>PostgreSQL Database</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={nenoIcon}
                      alt="Neon icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Neon</CardTitle>
                  <CardDescription>PostgreSQL Database</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={firebaseIcon}
                      alt="Firebase icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Firebase</CardTitle>
                  <CardDescription>NoSQL Database</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={prismaIcon}
                      alt="Prisma icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Prisma</CardTitle>
                  <CardDescription>Database ORM</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={drizzleIcon}
                      alt="Drizzle icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Drizzle</CardTitle>
                  <CardDescription>Database ORM</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Design
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-[32px]"
                      src={figmaIcon}
                      alt="Figma icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Figma</CardTitle>
                  <CardDescription>Web Design</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Productivity
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={teamsIcon}
                      alt="Teams icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Teams</CardTitle>
                  <CardDescription>Message App</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={jiraIcon}
                      alt="Jira icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Jira</CardTitle>
                  <CardDescription>Project Management</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={notionIcon}
                      alt="Notion icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Notion</CardTitle>
                  <CardDescription>Note Taking App</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex shadow-none dark:bg-muted">
                <div className="flex min-w-[80px] items-center pl-6">
                  <div className="h-[56px] w-[56px] rounded-sm bg-secondary p-3 dark:bg-muted-foreground flex items-center">
                    <Image
                      className="w-full max-w-[32px]"
                      src={vscodeIcon}
                      alt="Visual Studio Code icon"
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Visual Studio</CardTitle>
                  <CardDescription>IDE</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
