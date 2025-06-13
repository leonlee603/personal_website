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
              <ProjectCard
                label="Personal website"
                description="Portfolio"
                infoLink="/notes/revamp-my-personal-website"
                demoLink="https://personal-website-hazel-gamma.vercel.app"
                sourceLink="https://github.com/leonlee603/personal_website"
              />
              <ProjectCard
                label="Money book"
                description="Finances tracking app"
                infoLink="/notes/project-money-book"
                demoLink="https://money-book-delta.vercel.app"
                sourceLink="https://github.com/leonlee603/money_book"
              />
              <ProjectCard
                label="Next auth demo"
                description="Authentication demo with Next.js and Auth.js"
                infoLink="/notes/project-next-auth-demo"
                demoLink="https://next-auth-demo-six-nu.vercel.app"
                sourceLink="https://github.com/leonlee603/next-auth-demo"
              />
              <ProjectCard
                label="Vue.js chatroom demo"
                description="Chatroom demo with Vue.js and Firebase"
                infoLink="/notes/project-vue-chatroom-demo"
                demoLink="https://vue-chat-room-b9d99.web.app"
                sourceLink="https://github.com/leonlee603/chat_room"
              />
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
              <WorkProjectCard
                title={"Asia Bankers Club"}
                imageSrc={abcImg}
                alt={"Asia Bankers Club"}
                link="https://www.asiabankersclub.com/"
                description="Corporate website"
              />

              <WorkProjectCard
                title={"Hong Kong Johnson Holding Co., Ltd"}
                imageSrc={johnsonImg}
                alt={"Hong Kong Johnson Holding Co., Ltd"}
                link="https://johnsonholdings.com"
                description="Corporate website"
              />
              <WorkProjectCard
                title={"TCG Construction Limited"}
                imageSrc={tcgImg}
                alt={"TCG Construction Limited"}
                link="https://tcgconstruction.hk"
                description="Corporate website"
              />
              <WorkProjectCard
                title={"OXFAM Hong Kong"}
                imageSrc={oxfamImg}
                alt={"OXFAM Hong Kong"}
                link="https://eshop.oxfam.org.hk/en"
                description="Charity website"
              />
              <WorkProjectCard
                title={"Education Metas"}
                imageSrc={educationMetasImg}
                alt={"Education Metas"}
                link="https://educationmetas.com"
                description="Corporate website"
              />
              <WorkProjectCard
                title={"STS"}
                imageSrc={stsImg}
                alt={"STS"}
                link="https://sts-certified.com/"
                description="Corporate website"
              />
              <WorkProjectCard
                title={"China State Construction Engineering Limited"}
                imageSrc={cscehkImg}
                alt={"China State Construction Engineering Limited"}
                link="https://esg.cscechk.com/2023/chi"
                description="Single page for report"
              />
              <WorkProjectCard
                title={"Grand Moore Capital Limited"}
                imageSrc={grandMooreImg}
                alt={"Grand Moore Capital Limited"}
                link="https://www.grandmoore.com"
                description="Corporate website"
              />
              <WorkProjectCard
                title={"Dream Global Holding Limited"}
                imageSrc={dghImg}
                alt={"Dream Global Holding Limited"}
                link="https://dgh.miracledeveloper.com/"
                description="Corporate website"
              />
              <WorkProjectCard
                title={"Zhen Hua Engineering Co., Ltd"}
                imageSrc={chechkImg}
                alt={"Zhen Hua Engineering Co., Ltd"}
                link="https://www.chechk.com"
                description="Corporate website"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
