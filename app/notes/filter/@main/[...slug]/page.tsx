import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

interface MainProps {
  params: Promise<{ tag?: string[] }>;
}

export default async function FilteredNotesPage({ params }: MainProps) {
  const resolvedParams = await params;

  const tagSegment = resolvedParams.tag?.[0];
  const activeTag = tagSegment === "all" ? undefined : tagSegment;

  const data = await fetchNotes(1, "", activeTag);

  return (
    <div>
      <h3>{activeTag ? `Notes tagged: ${activeTag}` : "All Notes"}</h3>
      <NoteList notes={data?.notes} />
    </div>
  );
}
