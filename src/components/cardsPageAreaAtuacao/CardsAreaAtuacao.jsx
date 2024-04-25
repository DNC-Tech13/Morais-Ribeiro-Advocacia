import styles from './CardsAreaAtuacao.module.scss'

function cardsAreaAtuacao() {

  const areaAtuacao = ['Direito do Consumidor', 'Direito Trabalhista', 'Direito Tributário', 'Direito Civil',
    'Direito da Família', 'Direito Empresarial', 'Direito Criminal', 'Direito Previdenciário', 'Direito Internacional',
    'Parte Adversa', 'Proposta de Acordo']

  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap">
        {areaAtuacao.map((area, i) => {
          return (
            <div className={styles.box}>
            <img src={`./Public/areas_atuacao_back${i + 1}.png`} />
            <a href={`area/${i + 1}`}>{area}</a>
        </div>
          )
        })}
      </div>
    </>
  )
}

export default cardsAreaAtuacao;