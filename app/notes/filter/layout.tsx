import { ReactNode } from "react";

interface FilterLayoutProps {
  sidebar: ReactNode;
  main: ReactNode;
}

export default function FilterLayout({ sidebar, main }: FilterLayoutProps) {
  return (
    <div>
      <aside>{sidebar}</aside>
      <main>{main}</main>
    </div>
  );
}
