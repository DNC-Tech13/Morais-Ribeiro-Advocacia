import Header from "@/components/header/header";
import './cardEquipe.scss'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from "next/image";
import Whatsapp from '../../imagens/whatsapp.svg'
import Footer from "@/components/footer/footer";


const cardEquipe = () => {
    return (
        <div>
            <Header />
                <div className="banner">
                    <img src="/images/cardEquipe/equipe.svg" className="banner__imagem"></img>
                    <div className="banner__texto">
                        <h3>Equipe</h3>
                        <h1>Acreditamos no poder do trabalho em equipe.</h1>
                        <h2>Sabemos que nada se realiza sem colaboração.</h2>
                    </div>
                </div>

            <div>
                <Card>
                <Card.Body className='card__box'>
                <div className="card__img">
                    <Card.Img variant="top" src="/images/cardEquipe/gustavo.svg" />
                </div>
                <div className="card__boxEsq">
                    <Card.Title className="title">Dr. Gustavo Santos Ribeiro</Card.Title>
                    <Card.Subtitle className="subtitle">Sócio</Card.Subtitle>
                    <ListGroup className="itens">
                        <ListGroup.Item>Direito do Consumidor</ListGroup.Item>
                        <ListGroup.Item>Direito Civil</ListGroup.Item>
                    </ListGroup>
                </div>
                
                <div className="card__boxDir">
                <ListGroup>
                    <ListGroup.Item><img src="/Location.svg"></img>SÃO PAULO</ListGroup.Item>
                    <ListGroup.Item><img src="/Call.svg"></img>(12) 99160-4267</ListGroup.Item>
                    <ListGroup.Item><img src="/Email.svg"></img>moraisribeiroadvjur@gmail.com</ListGroup.Item>
                    <ListGroup.Item><a href="https://www.linkedin.com/in/gustavo-santos-ribeiro-31b652196/"><img src="/LinkedIn.svg"></img></a>in/gustavo-santos-ribeiro-31b652196/</ListGroup.Item>
                </ListGroup>
                </div>
                </Card.Body>
                </Card>
            </div>

            <div>
                <Card>
                <Card.Body className='card__box'>
                <div className="card__img">
                    <Card.Img variant="top" src="/images/cardEquipe/joao.svg" />
                </div>
                <div className="card__boxEsq">
                    <Card.Title className="title">Dr. João Pedro Ribeiro</Card.Title>
                    <Card.Subtitle className="subtitle">Sócio</Card.Subtitle>
                    <ListGroup className="itens">
                        <ListGroup.Item>Direito Trabalhista</ListGroup.Item>
                        <ListGroup.Item>LGPD</ListGroup.Item>
                    </ListGroup>
                </div>
                
                <div className="card__boxDir">
                <ListGroup>
                    <ListGroup.Item><img src="/Location.svg"></img>SÃO PAULO</ListGroup.Item>
                    <ListGroup.Item><img src="/Call.svg"></img>(12) 99160-4267</ListGroup.Item>
                    <ListGroup.Item><img src="/Email.svg"></img>moraisribeiroadvjur@gmail.com</ListGroup.Item>
                    <ListGroup.Item><a href="https://www.linkedin.com/in/joaopedrorrmoliveira/"><img src="/LinkedIn.svg"></img></a>in/joaopedrorrmoliveira</ListGroup.Item>
                </ListGroup>
                </div>
                </Card.Body>
                </Card>
            </div>

            <div>
                <Card>
                <Card.Body className='card__box'>
                <div className="card__img">
                    <Card.Img variant="top" src="/images/cardEquipe/nikolly.svg" />
                </div>
                <div className="card__boxEsq">
                    <Card.Title className="title">Dra. Nikolly Karoline Morais e Silva</Card.Title>
                    <Card.Subtitle className="subtitle">Sócio</Card.Subtitle>
                    <ListGroup className="itens">
                        <ListGroup.Item>Direito Tributário</ListGroup.Item>
                        <ListGroup.Item>Direito Civil</ListGroup.Item>
                    </ListGroup>
                </div>
                
                <div className="card__boxDir">
                <ListGroup>
                    <ListGroup.Item><img src="/Location.svg"></img>SÃO PAULO</ListGroup.Item>
                    <ListGroup.Item><img src="/Call.svg"></img>(12) 99160-4267</ListGroup.Item>
                    <ListGroup.Item><img src="/Email.svg"></img>moraisribeiroadvjur@gmail.com</ListGroup.Item>
                    <ListGroup.Item><a href="https://www.linkedin.com/in/nikollymorais/"><img src="/LinkedIn.svg"></img></a>in/nikollymorais</ListGroup.Item>
                </ListGroup>
                </div>
                </Card.Body>
                </Card>
            </div>  

            <div className='imgWhatsapp'>
                <a href="https://wa.me/5512991604267?text=Quero+conhecer+mais+das+as+%C3%A1reas+de+atua%C3%A7%C3%A3o.">
                <Image src={Whatsapp}></Image>
                </a>
            </div>
            
            <Footer />
        </div>
    )
}

export default cardEquipe;