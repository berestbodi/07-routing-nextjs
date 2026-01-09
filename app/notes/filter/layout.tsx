import React from "react";
import css from "./LayoutNotes.module.css";

export default function FilterLayout({
  sidebar,
  main,
}: {
  sidebar: React.ReactNode;
  main: React.ReactNode;
}) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>

      <section className={css.notesWrapper}>{main}</section>
    </div>
  );
}
