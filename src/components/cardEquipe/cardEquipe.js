import { getScreenSize } from '@/lib/getScreensize';
import './cardEquipe.scss'
import Image from "next/image";
import { useEffect, useState } from "react";


const CardEquipe = (props) => {
    const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    const { width } = getScreenSize();
    setScreenSize(width);
    addEventListener("resize", () => {
      const { width } = getScreenSize();
      setScreenSize(width);
    });
    return () => {
      removeEventListener("resize", () => {});
    };
  }, []);
    return (
        <div className='cardEquipe_wrapper'>
            <div className='cardEquipe_content'>
                <Image src={props.imgUrl} alt="Equipe" width={screenSize > 768? (screenSize>1100? 300 : 150) : 100} height={screenSize > 768? (screenSize>1100? 300 : 150) : 100} />
                <div className='cardEquipe_content-info'>
                    <h2>{props.nome}</h2>
                    <h3>{props.cargo}</h3>
                    <div>
                        {props?.areasAtuacao && props?.areasAtuacao.map((desc, index) => {
                            return <p key={index}>{desc}</p>
                        })}
                    </div>
                </div>
            </div>
            <div className='cardEquipe_contact'>
                <a href={props.location} target='_blank'>
                    <Image src="/Location.svg" alt="location" width={screenSize > 768? (screenSize>1100? 50 : 25) : 25} height={screenSize > 768? (screenSize>1100? 50 : 25) : 25} />
                    {props.locationLabel}
                </a>
                <a href={'phone:'+props.phoneNumber} target='_blank'>
                    <Image src="/Call.svg" alt="Email" width={screenSize > 768? (screenSize>1100? 50 : 25) : 25} height={screenSize > 768? (screenSize>1100? 50 : 25) : 25} />
                    {props.phoneLabel}
                </a>
                <a href={'mailto:'+props.emailAdress} target='_blank'>
                    <Image src="/Email.svg" alt="Email" width={screenSize > 768? (screenSize>1100? 50 : 25) : 25} height={screenSize > 768? (screenSize>1100? 50 : 25) : 25} />
                    {props.emailAdress}
                </a>
                <a href={props.linkedinUrl} target='_blank'>
                    <Image src="/LinkedIn.svg" alt="Linkedin" width={screenSize > 768? (screenSize>1100? 50 : 25) : 25} height={screenSize > 768? (screenSize>1100? 50 : 25) : 25} />
                    {props.linkedinLabel}
                </a>
            </div>
        </div>
    )
}

export default CardEquipe;