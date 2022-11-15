import Nav from "./Nav";

/* React component */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Nav for all pages */}
      <Nav />
      {/* All other pages */}
      <main>{children}</main>
      <>Footer</>
    </>
  );
}
