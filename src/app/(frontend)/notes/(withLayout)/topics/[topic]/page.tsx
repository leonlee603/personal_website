// All note for a topic on page 1
import type { Metadata } from 'next'
import NotesContainer from "@/components/NotesContainer";

export async function generateMetadata({params} : {params: Promise<{ topic: string }>}):Promise<Metadata> {
  const { topic } = await params;
  
  return {
    title: topic.charAt(0).toUpperCase() + topic.slice(1),
  }
}

// Generate static params in layout.tsx for nested dynamic route

export default async function Page({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  return (
    <NotesContainer currentPage="1" topic={topic}  />
  );
}