import Nav from "./Nav";

/* React component */
export default function Layout({ children }) {
  return (
    <div className="mx-14 font-plex">
      {/* Nav for all pages */}
      <Nav />
      {/* All other pages */}
      <main>{children}</main>
    </div>
  );
}
