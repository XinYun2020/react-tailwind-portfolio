import Nav from "./Nav";
import ThemeProvider from "../contexts/ThemeContext";

/* React component */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Nav for all pages */}
      <ThemeProvider>
        <Nav />
        {/* All other pages */}
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
