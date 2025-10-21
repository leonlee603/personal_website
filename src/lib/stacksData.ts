import { StaticImageData } from "next/image";

import htmlIcon from "../../public/stacks/html.svg";
import cssIcon from "../../public/stacks/css.svg";
import jsIcon from "../../public/stacks/javascript.svg";
import reactIcon from "../../public/stacks/react.svg";
import nextIcon from "../../public/stacks/nextjs.svg";
import vueIcon from "../../public/stacks/vue.svg";
import gatsbyIcon from "../../public/stacks/gatsby.svg";
import erbIcon from "../../public/stacks/erb.png";
import phpIcon from "../../public/stacks/php.svg";
import wordpressIcon from "../../public/stacks/wordpress.svg";
import sanityIcon from "../../public/stacks/sanity.svg";
import payloadIcon from "../../public/stacks/payload.svg";

import gitIcon from "../../public/stacks/git.svg";
import forkIcon from "../../public/stacks/fork.png";
import bitbucketIcon from "../../public/stacks/bitbucket.svg";

import authjsIcon from "../../public/stacks/authjs.webp";
import clerkIcon from "../../public/stacks/clerk.avif";

import supabaseIcon from "../../public/stacks/supabase.svg";
import nenoIcon from "../../public/stacks/neon.svg";
import firebaseIcon from "../../public/stacks/firebase.svg";
import prismaIcon from "../../public/stacks/prisma.svg";
import drizzleIcon from "../../public/stacks/drizzle.webp";

import figmaIcon from "../../public/stacks/figma.avif";

import teamsIcon from "../../public/stacks/teams.svg";
import jiraIcon from "../../public/stacks/jira.svg";
import notionIcon from "../../public/stacks/notion.avif";
import vscodeIcon from "../../public/stacks/vscode.svg";

type StackCardProps = {
  padding: string;
  size: string;
  icon: StaticImageData;
  iconAlt: string;
  title: string;
  description: string;
}

export const developmentStacks: StackCardProps[] = [
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

export const visionControlStacks: StackCardProps[] = [
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

export const authenticationStacks: StackCardProps[] = [
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

export const databaseStacks: StackCardProps[] = [
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

export const designStacks: StackCardProps[] = [
  {
    padding: "p-3",
    size: "w-[32px]",
    icon: figmaIcon,
    iconAlt: "Figma icon",
    title: "Figma",
    description: "Web Design",
  },
];

export const productivityStacks: StackCardProps[] = [
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