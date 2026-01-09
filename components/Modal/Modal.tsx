"use client";

import css from "./Modal.module.css";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css["backdrop"]} onClick={close}>
      <div className={css["modal"]}>{children}</div>
    </div>
  );
}
