'use client';
import Image from "next/image";
import './page.scss';
import { Button, Card } from "react-bootstrap";
import AreaAtuacao from "@/components/area-atuacao/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <AreaAtuacao/>
    </main>
  );
}