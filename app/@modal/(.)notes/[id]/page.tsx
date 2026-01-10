import { fetchNoteById } from "@/lib/api";
import NotePreview from "./NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

const ModalPage = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <NotePreview>
      <div>
        <h2>{note.title}</h2>
      </div>
      <p>{note.content}</p>
      <p>{new Date(note.createdAt).toLocaleDateString()}</p>
    </NotePreview>
  );
};

export default ModalPage;
