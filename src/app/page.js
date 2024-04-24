'use client';
import Image from "next/image";
import styles from "./page.module.scss";
import { Button, Card } from "react-bootstrap";
import AreaAtuacao from "@/components/area-atuacao/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <AreaAtuacao/>
    </main>
  );
}
