import Layout from "@/components/layout/DefaultLayout"
import "./privacidade.scss"

const Privacidade = () => {
  return (
    <>
    <Layout>
      <main className="privacidade">
        <div className="privacidade__Container">
          <h1>Política de Privacidade</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Bem-vindo à Política de Privacidade da Morais & Ribeiro, uma empresa de advocacia comprometida com a proteção <br/>
            da privacidade e dos dados pessoais de nossos clientes. Esta política descreve como coletamos, usamos e <br/>
            protegemos as informações que você nos fornece quando utiliza nossos serviços ou visita nosso site.
          </p>
        </div>
        <div className="privacidade__Container">
          <h1>Informações Coletadas</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Coletamos informações pessoais fornecidas por você voluntariamente, como nome, endereço de e-mail, número de <br/>
            telefone e endereço residencial, quando você preenche formulários em nosso site, entra em contato conosco por e- <br/>
            mail ou telefone, ou nos fornece informações durante a prestação de nossos serviços. 
          </p>
        </div>
        <div className="privacidade__Container">
          <h1>Uso de Informações</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Utilizamos suas informações pessoais para fornecer os serviços jurídicos solicitados, comunicar-nos com você sobre <br/>
            assuntos relacionados aos nossos serviços, processar pagamentos, responder às suas perguntas e fornecer suporte <br/>
            ao cliente. 
          </p>
        </div>
        <div className="privacidade__Container">
          <h1>Compartilhamento com Terceiros</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a prestação de <br/>
            nossos serviços, cumprimento de obrigações legais ou com seu consentimento explícito. 
            </p>
        </div>
        <div className="privacidade__Container">
          <h1>Cookies e Tecnologias de Rastreamento</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Nosso site utiliza cookies e outras tecnologias de rastreamento para melhorar sua experiência de navegação e <br/>
            analisar o tráfego do site. Você pode controlar o uso de cookies através das configurações do seu navegador.
          </p>
        </div>
        <div className="privacidade__Container">
          <h1>Segurança de Dados</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso <br/> 
            não autorizado, uso indevido, alteração ou destruição. 
          </p>
        </div>
        <div className="privacidade__Container">
          <h1>Direitos dos Titulares dos Dados</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Você tem o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais a qualquer momento. Para <br/>
            exercer esses direitos ou se tiver dúvidas sobre nossa política de privacidade, entre em contato conosco utilizando <br/>
            as informações fornecidas abaixo.
          </p>
        </div>
        <div className="privacidade__Container">
          <h1>Atualizações na Política de Privacidade</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Esta política de privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas de <br/>
            privacidade. Qualquer alteração significativa será comunicada a você através de nosso site ou por outros meios <br/>
            apropriados.
          </p>
        </div>
        <div className="privacidade__Container">
          <h1>Contato</h1>
          <div className="privacidade__Barra"><img src="barra.svg"/></div>
          <p>
            Se você tiver dúvidas, preocupações ou reclamações sobre nossa política de privacidade ou o tratamento de seus <br/>
            dados pessoais, entre em contato conosco:
          </p>
          <div className="privacidade__Contatos">
            <h1 className="privacidade__h1c" style={{fontSize:'28px', fontWeight:'600', marginTop:'10px'}}>Morais & Ribeiro - Advocacia</h1>
            <p>
              Endereço: R. Antônio Aleixo da Silva | nº 1880 | Jardim Satélite <br/>
              São José dos Campos - SP, 12231-650 <br/>
              E-mail: moraisribeiroadvjur@gmail.com <br/>     
              Telefone: (12) 99160-4267 </p>
          </div>
        </div>
    </main>
  </Layout>
    </>
  )
}

export default Privacidade