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
import { StaticImageData } from "next/image";

const developmentStacks: {
  padding: string;
  size: string;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}[] = [
  {
    padding: "p-2",
    size: "w-[40px]",
    icon: htmlIcon,
    iconAlt: "HTML icon",
    title: "HTML",
    description: "Markup Language",
  },
  {
    padding: "p-2",
    size: "w-full max-w-[40px]",
    icon: cssIcon,
    iconAlt: "CSS icon",
    title: "CSS",
    description: "Visual Styling",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: jsIcon,
    iconAlt: "Javascript icon",
    title: "Javascript",
    description: "Programming Language",
  },
  {
    padding: "p-2",
    size: "w-full max-w-[40px]",
    icon: reactIcon,
    iconAlt: "React icon",
    title: "React",
    description: "Javascript Library",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: nextIcon,
    iconAlt: "Next icon",
    title: "Next.js",
    description: "React Framework",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: vueIcon,
    iconAlt: "Vue icon",
    title: "Vue.js",
    description: "Javascript Framework",
  },
  {
    padding: "p-2",
    size: "w-full max-w-[40px]",
    icon: gatsbyIcon,
    iconAlt: "Gatsby icon",
    title: "Gatsby",
    description: "React Framework",
  },
  {
    padding: "p-2",
    size: "w-full max-w-[40px]",
    icon: erbIcon,
    iconAlt: "Electron React Boilerplate icon",
    title: "Electron React Boilerplate",
    description: "React Desktop App",
  },
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: phpIcon,
    iconAlt: "PHP icon",
    title: "PHP",
    description: "Programming Language",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: wordpressIcon,
    iconAlt: "Wordpress icon",
    title: "Wordpress",
    description: "Dynamic Development",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: sanityIcon,
    iconAlt: "Sanity icon",
    title: "Sanity",
    description: "Headless CMS",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: payloadIcon,
    iconAlt: "Payload icon",
    title: "Payload",
    description: "Headless CMS",
  },
];

const visionControlStacks: {
  padding: string;
  size: string;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}[] = [
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: gitIcon,
    iconAlt: "Git icon",
    title: "Git",
    description: "Version Control",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: forkIcon,
    iconAlt: "Fork icon",
    title: "Fork",
    description: "Git Client",
  },
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: bitbucketIcon,
    iconAlt: "Bitbucket icon",
    title: "Bitbucket",
    description: "Version Control System",
  },
];

const authenticationStacks: {
  padding: string;
  size: string;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}[] = [
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: authjsIcon,
    iconAlt: "Auth.js icon",
    title: "Auth.js",
    description: "Auth Library",
  },
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: clerkIcon,
    iconAlt: "Clerk icon",
    title: "Clerk",
    description: "Auth Library",
  },
];

const databaseStacks: {
  padding: string;
  size: string;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}[] = [
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: supabaseIcon,
    iconAlt: "Supabase icon",
    title: "Supabase",
    description: "PostgreSQL Database",
  },
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: nenoIcon,
    iconAlt: "Neon icon",
    title: "Neon",
    description: "PostgreSQL Database",
  },
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: firebaseIcon,
    iconAlt: "Firebase icon",
    title: "Firebase",
    description: "NoSQL Database",
  },
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: prismaIcon,
    iconAlt: "Prisma icon",
    title: "Prisma",
    description: "Database ORM",
  },
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: drizzleIcon,
    iconAlt: "Drizzle icon",
    title: "Drizzle",
    description: "Database ORM",
  },
];

const designStacks: {
  padding: string;
  size: string;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}[] = [
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: figmaIcon,
    iconAlt: "Figma icon",
    title: "Figma",
    description: "Web Design",
  },
];

const productivityStacks: {
  padding: string;
  size: string;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}[] = [
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: teamsIcon,
    iconAlt: "Teams icon",
    title: "Teams",
    description: "Message App",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: jiraIcon,
    iconAlt: "Jira icon",
    title: "Jira",
    description: "Project Management",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: notionIcon,
    iconAlt: "Notion icon",
    title: "Notion",
    description: "Note Taking App",
  },
  {
    padding: "p-3",
    size: "w-full max-w-[32px]",
    icon: vscodeIcon,
    iconAlt: "Visual Studio Code icon",
    title: "Visual Studio",
    description: "IDE",
  },
];

export const metadata = {
  title: "Stacks",
};

function StackCard({
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
              {developmentStacks.length >= 1 &&
                developmentStacks.map((developmentStack) => (
                  <StackCard
                    key={developmentStack.title}
                    padding={developmentStack.padding}
                    size={developmentStack.size}
                    icon={developmentStack.icon}
                    iconAlt={developmentStack.iconAlt}
                    title={developmentStack.title}
                    description={developmentStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Version Control
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {visionControlStacks.length >= 1 &&
                visionControlStacks.map((visionControlStack) => (
                  <StackCard
                    key={visionControlStack.title}
                    padding={visionControlStack.padding}
                    size={visionControlStack.size}
                    icon={visionControlStack.icon}
                    iconAlt={visionControlStack.iconAlt}
                    title={visionControlStack.title}
                    description={visionControlStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Authentication
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {authenticationStacks.length >= 1 &&
                authenticationStacks.map((authenticationStack) => (
                  <StackCard
                    key={authenticationStack.title}
                    padding={authenticationStack.padding}
                    size={authenticationStack.size}
                    icon={authenticationStack.icon}
                    iconAlt={authenticationStack.iconAlt}
                    title={authenticationStack.title}
                    description={authenticationStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Database
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {databaseStacks.length >= 1 &&
                databaseStacks.map((databaseStack) => (
                  <StackCard
                    key={databaseStack.title}
                    padding={databaseStack.padding}
                    size={databaseStack.size}
                    icon={databaseStack.icon}
                    iconAlt={databaseStack.iconAlt}
                    title={databaseStack.title}
                    description={databaseStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Design
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {designStacks.length >= 1 &&
                designStacks.map((designStack) => (
                  <StackCard
                    key={designStack.title}
                    padding={designStack.padding}
                    size={designStack.size}
                    icon={designStack.icon}
                    iconAlt={designStack.iconAlt}
                    title={designStack.title}
                    description={designStack.description}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Productivity
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {productivityStacks.length >= 1 &&
                productivityStacks.map((productivityStack) => (
                  <StackCard
                    key={productivityStack.title}
                    padding={productivityStack.padding}
                    size={productivityStack.size}
                    icon={productivityStack.icon}
                    iconAlt={productivityStack.iconAlt}
                    title={productivityStack.title}
                    description={productivityStack.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
