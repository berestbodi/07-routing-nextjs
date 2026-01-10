import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";

export default async function MainNotesPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const currentSlug = slug[0];

  const activeTag = currentSlug === "all" ? undefined : currentSlug;

  const data = await fetchNotes(1, "", activeTag);

  return (
    <div>
      <h2>{activeTag ? `Notes: ${activeTag}` : "All Notes"}</h2>
      <NoteList notes={data?.notes} />
    </div>
  );
}
