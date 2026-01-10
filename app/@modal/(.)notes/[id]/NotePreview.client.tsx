"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";

export default function NotePreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return <Modal onClose={handleClose}>{children}</Modal>;
}
