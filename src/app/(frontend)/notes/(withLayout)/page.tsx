// All notes on page 1
import NotesContainer from "@/components/NotesContainer";

export const metadata = {
  title: "Notes",
  description: "Notes, references, and tutorials on programming, web development.",
};

export default function Page() {
  return (
    <NotesContainer currentPage="1" topic=""  />
  );
}
