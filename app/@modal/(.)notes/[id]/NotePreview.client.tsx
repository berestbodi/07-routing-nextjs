"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.module.css";

export default function NotePreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      {children}
      <button className={css["button-close"]} onClick={handleClose}>
        Close
      </button>
    </Modal>
  );
}
