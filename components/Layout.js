import Nav from "./Nav";

/* React component */
export default function Layout({ children }) {
  return (
    <div className="xmx-14">
      {/* Nav for all pages */}
      <Nav />
      {/* All other pages */}
      <main className="min-h-screen bg-gray-light">{children}</main>
    </div>
  );
}
