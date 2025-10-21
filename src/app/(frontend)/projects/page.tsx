import PostPageHeader from "@/components/PostPageHeader";
import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/Title";
import WorkProjectCard from "@/components/WorkProjectCard";

import { projects, workProjects } from "@/lib/projectsData";

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
