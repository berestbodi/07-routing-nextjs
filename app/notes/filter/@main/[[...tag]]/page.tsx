import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

export default async function MainNotesPage({
  params,
}: {
  params: Promise<{ tag?: string[] }>;
}) {
  const { tag } = await params;

  const tagValue = tag?.[0];
  const activeTag = tagValue === "all" || !tagValue ? undefined : tagValue;

  const data = await fetchNotes(1, "", activeTag);

  return (
    <div>
      <h2>{activeTag ? `${activeTag}` : "All Notes"}</h2>
      <NoteList notes={data?.notes} />
    </div>
  );
}
