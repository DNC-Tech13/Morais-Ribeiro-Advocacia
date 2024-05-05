import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import { ThemeProvider } from "react-bootstrap";
import "@/styles/globals.scss";
import WhatsappButton from "../whatsappButton/whatsappButton";

export default function Layout({ children }) {
  return (
    <ThemeProvider breakpoints={["xl", "md"]} minBreakpoint="xxs">
      {/* <header>
        <Header />
      </header> */}
      {children}
      <WhatsappButton/>
    </ThemeProvider>
  );
}
