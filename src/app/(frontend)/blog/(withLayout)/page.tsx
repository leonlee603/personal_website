// All posts on page 1
import BlogContainer from "@/components/BlogContainer";

export const metadata = {
  title: "Blog",
  description: "Articles about personal life, hobbies, photography, and everything else.",
};

export default function Page() {
  return (
    <BlogContainer currentPage="1" category=""  />
  );
}
