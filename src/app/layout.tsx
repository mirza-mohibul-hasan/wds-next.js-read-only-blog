import type { Metadata } from "next";
import "./globalstyles.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Static Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="top-nav">
          <div className="nav-text-large">My App</div>
          <ul className="nav-list">
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/todos">Todos</Link>
            </li>
          </ul>
        </nav>
        <div className="body-container">{children}</div>
      </body>
    </html>
  );
}
