import PostPageHeader from "@/components/PostPageHeader";
import Title from "@/components/Title";

export const metadata = {
  title: "About",
};

export default function Me() {
  return (
    <main className="px-8">
      <section className="container mx-auto max-w-1248">
        <PostPageHeader>
          <Title>About Me</Title>
          {/* <div>
            Articles about personal life, hobbies, photography, and everything
            else.
          </div> */}
        </PostPageHeader>
        <hr />
      </section>
    </main>
  );
}
