import Link from "next/link";
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
              <li>Tel:&nbsp;+852 6282 9126</li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Experience
            </h2>
            <ul className="mb-4 flex flex-col gap-3">
              <li>
                <div className="text-lg font-medium">Web Developer</div>
                <div className="text-muted-foreground">
                  Miracle Media Production
                </div>
                <div className="text-muted-foreground">Aug 2021 – Present</div>
              </li>
              <li>
                <div className="text-lg font-medium">
                  Merchandiser (Part-time)
                </div>
                <div className="text-muted-foreground">
                  Grace A.J. Manufacturing Co., Ltd.
                </div>
                <div className="text-muted-foreground">
                  Feb 2020 – July 2021
                </div>
              </li>
              <li>
                <div className="text-lg font-medium">Merchandiser</div>
                <div className="text-muted-foreground">
                  Van Gogh Senses Limited
                </div>
                <div className="text-muted-foreground">Jul 2017 – Jan 2020</div>
              </li>
              <li>
                <div className="text-lg font-medium">
                  Assistant Merchandiser
                </div>
                <div className="text-muted-foreground">
                  Vigor International (H.K.) Limited
                </div>
                <div className="text-muted-foreground">Jun 2014 - Jan 2016</div>
              </li>
              <li>
                <div className="text-lg font-medium">
                  Junior Sales Administrator
                </div>
                <div className="text-muted-foreground">HLD Global Limited</div>
                <div className="text-muted-foreground">Oct 2012 – Mar 2014</div>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Wonder why I switch career from merchandiser to web developer? Check out {" "}
              <Link
                className="text-primary"
                href="/blog/from-merchandiser-to-web-developer"
              >
                here!
              </Link>
            </p>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Education
            </h2>
            <ul className="flex flex-col gap-2">
              <li>
                <div className="text-lg font-semibold">
                  Bachelor of Science, Major in Physics
                </div>
                <div className="text-muted-foreground">
                  The Hong Kong University Of Science And Technology, Sep 2009 -
                  Jul 2012
                </div>
              </li>
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
              Certifications
            </h2>
            <ul className="flex flex-col gap-2 text-muted-foreground">
              <li>AWS Certified Cloud Practitioner</li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Personality
            </h2>
            <ul className="flex flex-col gap-2 text-muted-foreground">
              <li>
                A responsible team player with a mature, professional and
                positive attitude.
              </li>
              <li>
                A self-motivated fast learner who is capable to work well under
                pressure.
              </li>
              <li>Eager to learn and have a strong passion for coding.</li>
              <li>Strong communication skills and detail oriented.</li>
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
