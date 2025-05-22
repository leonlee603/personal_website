import PostPageHeader from "@/components/PostPageHeader";
import Title from "@/components/Title";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function Me() {
  return (
    <main className="px-8">
      <section className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>About Me</Title>
        </PostPageHeader>
        <hr />
        <div className="mb-24 mt-12">
          <div className="mb-12">
            <p className="text-muted-foreground mb-3">
              Hey, I&apos;m Leon!. I&apos;m a front-end developer, who graduated
              from The Hong Kong University of Science and Technology (HKUST)
              majoring in Physics. During my study, I have developed a better
              understanding of abstract theories that involve logical thinking.
              Having good problem solving skills makes me immediately hooked
              into the world of programming once I have found my passion for
              technology.
            </p>
            <p className="text-muted-foreground">
              And this is my personal website for writing, projects, and notes.
              If you want to know more about why did I start programming, please
              check out the blog post{" "}
              <Link
                className="text-primary"
                href="/blog/why-did-i-start-programming"
              >
                here!
              </Link>
            </p>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Contact
            </h2>
            <p className="text-muted-foreground mb-6">
              Feel free to connect with me via socials.
            </p>
            <ul className=" flex flex-col text-primary gap-2 font-semibold">
              <li>
                <a
                  className="inline-block"
                  href="https://www.instagram.com/418_tea_pot"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leonlee603"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/leonlee603" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Hobbies
            </h2>
            <ul className=" flex flex-col text-muted-foreground gap-2">
              <li>Gym</li>
              <li>Reading</li>
              <li>Video Games</li>
              <li>Photography</li>
            </ul>
          </div>
          <div className="mb-12">
            <h2 className="mb-4 text-pretty text-xl font-semibold md:text-2xl lg:text-3xl">
              Resume
            </h2>
            <ul className=" flex flex-col text-primary gap-2">
              <li>
                <Link href="/resume">My resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
