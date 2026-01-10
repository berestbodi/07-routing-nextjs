import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

export default async function MainNotesPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const slugValue = slug?.[0];

  const activeTag = slugValue === "all" || !slugValue ? undefined : slugValue;

  const data = await fetchNotes(1, "", activeTag);

  return (
    <div>
      <h2 style={{ marginBottom: "20px", textTransform: "capitalize" }}>
        {activeTag ? activeTag : "All Notes"}
      </h2>
      <NoteList notes={data?.notes} />
    </div>
  );
}
