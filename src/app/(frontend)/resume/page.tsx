import PostPageHeader from "@/components/PostPageHeader";
import Title from "@/components/Title";

export const metadata = {
  title: "Resume",
};

export default function page() {
  return (
    <main className="px-8">
      <section className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>Leon Lee</Title>
        </PostPageHeader>
        <hr />
        <div className="mb-10 mt-6 md:mb-20 md:mt-9 lg:mb-24 lg:mt-12">
          <div className="mb-12">
            <ul className="flex flex-col gap-2 text-muted-foreground">
              <li>
                Email:&nbsp;
                <a className="text-primary" href="mailto:" target="_blank">
                  leonleepingho@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:&nbsp;
                <a
                  className="text-primary"
                  href="https://www.linkedin.com/in/leonlee603"
                  target="_blank"
                >
                  @leonlee603
                </a>
              </li>
              <li>
                GitHub:&nbsp;
                <a
                  className="text-primary"
                  href="https://github.com/leonlee603"
                  target="_blank"
                >
                  @leonlee603
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Experience
            </h2>
            <ul className="flex flex-col gap-2 font-semibold text-primary">
              <li></li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Education
            </h2>
            <ul className="flex flex-col gap-2 font-semibold text-primary">
              <li></li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Skills
            </h2>
            <ul className="flex flex-col gap-2 text-muted-foreground">
              <li>Languages : Javascript, Typescript, PHP, HTML, CSS</li>
              <li>Frameworks : Next.js, Gatsby</li>
              <li>Libraries : React, Auth.js, Clerk, TailwindCSS, Bootstrap</li>
              <li>CMS : Wordpress, Sanity, Payload</li>
              <li>Database : Supabase, Neon, Prisma, Drizzle</li>
              <li>Version Control System : Git, Bitbucket, GitHub</li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Languages
            </h2>
            <ul className="flex flex-col gap-2 text-muted-foreground">
              <li>Cantonese : Native</li>
              <li>English : Fluent</li>
              <li>Mandarin : Fluent</li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Availability
            </h2>
            <ul className="flex flex-col gap-2 text-muted-foreground">
              <li>One month&apos;s notice</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
