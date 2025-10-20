import PostPageHeader from "@/components/PostPageHeader";
import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/Title";
import WorkProjectCard from "@/components/WorkProjectCard";
import johnsonImg from "../../../../public/projects/johnson.jpeg";
import educationMetasImg from "../../../../public/projects/education_metas.jpeg";
import tcgImg from "../../../../public/projects/tcg.jpeg";
import oxfamImg from "../../../../public/projects/oxfam.jpeg";
import stsImg from "../../../../public/projects/sts.jpeg";
import chechkImg from "../../../../public/projects/chechk.jpeg";
import cscehkImg from "../../../../public/projects/cscechk.jpeg";
import grandMooreImg from "../../../../public/projects/grandMoore.jpeg";
import dghImg from "../../../../public/projects/dgh.jpeg";
import abcImg from "../../../../public/projects/abc.jpeg";
import { StaticImageData } from "next/image";

const projects: {
  label: string;
  description?: string;
  infoLink?: string;
  demoLink?: string;
  sourceLink?: string;
}[] = [
  {
    label: "Personal Website",
    description: "Portfolio",
    infoLink: "/notes/revamp-my-personal-website",
    demoLink: "https://personal-website-hazel-gamma.vercel.app",
    sourceLink: "https://github.com/leonlee603/personal_website",
  },
  {
    label: "Right Booking Demo",
    description: "A booking website for short-term homestay like airbnb",
    demoLink: "https://right-booking.vercel.app",
    sourceLink: "https://github.com/leonlee603/right_booking",
  },
  {
    label: "Money Book Demo",
    description: "Finances tracking app",
    infoLink: "/notes/project-money-book-demo",
    demoLink: "https://money-book-delta.vercel.app",
    sourceLink: "https://github.com/leonlee603/money_book",
  },
  {
    label: "Next Auth Demo",
    description: "Authentication demo with Next.js and Auth.js",
    infoLink: "/notes/project-next-auth-demo",
    demoLink: "https://next-auth-demo-six-nu.vercel.app",
    sourceLink: "https://github.com/leonlee603/next-auth-demo",
  },
  // {
  //   label: "Vue.js Chatroom Demo",
  //   description: "Chatroom demo with Vue.js and Firebase",
  //   infoLink: "/notes/project-vue-chatroom-demo",
  //   demoLink: "https://vue-chat-room-b9d99.web.app",
  //   sourceLink: "https://github.com/leonlee603/chat_room",
  // },
];

const workProjects: {
  title: string;
  imageSrc: StaticImageData;
  alt: string;
  link: string;
  description?: string;
}[] = [
  {
    title: "Asia Bankers Club",
    imageSrc: abcImg,
    alt: "Asia Bankers Club",
    link: "https://www.asiabankersclub.com",
    description: "Corporate website",
  },
  {
    title: "Hong Kong Johnson Holding Co., Ltd",
    imageSrc: johnsonImg,
    alt: "Hong Kong Johnson Holding Co., Ltd",
    link: "https://johnsonholdings.com",
    description: "Corporate website",
  },
  {
    title: "TCG Construction Limited",
    imageSrc: tcgImg,
    alt: "TCG Construction Limited",
    link: "https://tcgconstruction.hk",
    description: "Corporate website",
  },
  {
    title: "OXFAM Hong Kong",
    imageSrc: oxfamImg,
    alt: "OXFAM Hong Kong",
    link: "https://eshop.oxfam.org.hk/en",
    description: "Charity website",
  },
  {
    title: "Education Metas",
    imageSrc: educationMetasImg,
    alt: "Education Metas",
    link: "https://educationmetas.com",
    description: "Corporate website",
  },
  {
    title: "STS",
    imageSrc: stsImg,
    alt: "STS",
    link: "https://sts-certified.com",
    description: "Corporate website",
  },
  {
    title: "China State Construction Engineering Limited",
    imageSrc: cscehkImg,
    alt: "China State Construction Engineering Limited",
    link: "https://esg.cscechk.com/2023/chi",
    description: "Single page for report",
  },
  {
    title: "Grand Moore Capital Limited",
    imageSrc: grandMooreImg,
    alt: "Grand Moore Capital Limited",
    link: "https://www.grandmoore.com",
    description: "Corporate website",
  },
  {
    title: "Dream Global Holding Limited",
    imageSrc: dghImg,
    alt: "Dream Global Holding Limited",
    link: "https://dreamglobalholdings.com",
    description: "Corporate website",
  },
  {
    title: "Zhen Hua Engineering Co., Ltd",
    imageSrc: chechkImg,
    alt: "Zhen Hua Engineering Co., Ltd",
    link: "https://www.chechk.com",
    description: "Corporate website",
  },
];

export const metadata = {
  title: "Projects",
};

export default function page() {
  return (
    <main className="px-8">
      <section className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Projects</Title>
          {/* <div>
            Articles about personal life, hobbies, photography, and everything
            else.
          </div> */}
        </PostPageHeader>
        <hr />
        <div className="mb-10 mt-6 md:mb-20 md:mt-9 lg:mb-24 lg:mt-12">
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              GitHub projects
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.length >= 1 &&
                projects.map((project) => (
                  <ProjectCard
                    key={project.label}
                    label={project.label}
                    description={project.description ?? undefined}
                    infoLink={project.infoLink ?? undefined}
                    demoLink={project.demoLink ?? undefined}
                    sourceLink={project.sourceLink ?? undefined}
                  />
                ))}
            </div>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Websites created from work
            </h2>
            <div className="mb-5 text-muted-foreground">
              Here are some of the websites I&apos; made over the years.
            </div>
            <div className="grid gap-6 pb-12 md:grid-cols-2 lg:grid-cols-4">
              {workProjects.length >= 1 &&
                workProjects.map((workProject) => (
                  <WorkProjectCard
                    key={workProject.title}
                    title={workProject.title}
                    imageSrc={workProject.imageSrc}
                    alt={workProject.alt}
                    link={workProject.link}
                    description={workProject.description}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
