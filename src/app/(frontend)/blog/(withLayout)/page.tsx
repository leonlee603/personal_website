// All posts on page 1
import BlogContainer from "@/components/BlogContainer";

export const metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <BlogContainer currentPage="1" category=""  />
  );
}
