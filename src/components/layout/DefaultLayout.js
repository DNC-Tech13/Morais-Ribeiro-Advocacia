import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import { ThemeProvider } from "react-bootstrap";
import "@/styles/globals.scss";

export default function Layout({ children }) {
  return (
    <ThemeProvider breakpoints={["xl", "md"]} minBreakpoint="xxs">
      <header style={{ position: "fixed", width: "100%", zIndex: 999 }}>
        <Header />
      </header>
      <main style={{ marginTop: "130px" }}>
        {/* Adiciona um margintop para que evite que o header sobreponha o conteudo inicial*/}
        {children}
      </main>
    </ThemeProvider>
  );
}
