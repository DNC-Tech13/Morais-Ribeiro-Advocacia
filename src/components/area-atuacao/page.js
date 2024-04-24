import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Auction from "../../imagens/Auction.svg";
import Scales from "../../imagens/Scales.svg";
import LawBook from "../../imagens/Law-Book.svg";
import PolicyDocument from "../../imagens/Policy-Document.svg";
import NextPage from "../../imagens/Next-Page.svg";
import Whatsapp from "../../imagens/whatsapp.svg";
import styles from "./page.module.scss";

export default function AreaAtuacao() {
  return (
    <div>
      <div className={styles.areaAtuacao}>
        <h1>Principais Áreas de Atuação</h1>
      </div>

      <Container>
        <Row>
          <Col xs={12} md={10} xl={6}>
            <div className={styles.cardbox}>
              <div className={styles.cardImagem}>
                <Image src={Auction} alt="Auction image"></Image>
              </div>
              <div className={styles.cardTexto}>
                <h2>DIREITO DO CONSUMIDOR</h2>
                <p>
                  É o ramo do direito que trata das relações de consumo, visando
                  proteger os direitos dos consumidores e equilibrar as relações
                  entre consumidores e fornecedores de produtos e serviços.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={10} xl={6}>
            <div className={styles.cardbox}>
              <div className={styles.cardImagem}>
                <Image src={Scales} alt="Scales image"></Image>
              </div>
              <div className={styles.cardTexto}>
                <h2>DIREITO TRABALHISTA</h2>
                <p>
                  Protege os direitos dos trabalhadores na relação com
                  empregadores, definindo regras para contratação, jornada,
                  salário, segurança, saúde, férias, licenças e solução de
                  conflitos.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={10} xl={6}>
            <div className={styles.cardbox}>
              <div className={styles.cardImagem}>
                <Image src={LawBook} alt="Law Book image"></Image>
              </div>
              <div className={styles.cardTexto}>
                <h2>DIREITO TRIBUTÁRIO</h2>
                <p>
                  É o ramo do direito que regula a relação entre o Estado e os
                  contribuintes, envolvendo a instituição, arrecadação e
                  fiscalização dos tributos.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={10} xl={6}>
            <div className={styles.cardbox}>
              <div className={styles.cardImagem}>
                <Image src={Scales} alt="Scales image"></Image>
              </div>
              <div className={styles.cardTexto}>
                <h2>DIREITO CIVIL</h2>
                <p>
                  É o conjunto de normas que regulam as relações entre as
                  pessoas, sejam elas físicas ou jurídicas, em aspectos como
                  família, contratos, propriedade e responsabilidade civil.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} xl={6}>
            <div className={styles.cardbox}>
              <div className={styles.cardImagem}>
                <Image src={PolicyDocument} alt="Policy Document image"></Image>
              </div>
              <div className={styles.cardTexto}>
                <h2>LGPD</h2>
                <p>
                  Proteção à privacidade dos indivíduos, regulando a coleta,
                  armazenamento, tratamento e uso de dados pessoais por empresas
                  e pessoas físicas.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={10} xl={6}>
            <div className={styles.cardbox}>
              <div className={styles.cardTexto}>
                <h1>Conheça mais dos nossas áreas de atuação</h1>
                <div className="d-flex justify-content-end">
                  <button>
                    <Image src={NextPage} alt="Next Page image"></Image>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.imgWhatsapp}>
        <a href="https://wa.me/5512991604267?text=Quero+conhecer+mais+das+as+%C3%A1reas+de+atua%C3%A7%C3%A3o.">
          <Image src={Whatsapp}></Image>
        </a>
      </div>
    </div>
  );
}
