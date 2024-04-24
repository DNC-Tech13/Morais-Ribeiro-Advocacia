'use client';
import Image from "next/image";
import styles from "./page.module.scss";
import { Button, Card } from "react-bootstrap";
import Header from "@/components/header/header";
export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <Header/>
      </header>
      
    </main>
  );
}
