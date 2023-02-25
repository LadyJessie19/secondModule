import { ColummS } from './styles'

import CardZap from './CardZap'
import CardNew from './CardNew'

export const Columm = ({title, section, cards}) => {
    
    const showCard = (card) => {
        return <CardZap key={card.id} title={card.title} description={card.description}></CardZap>
    } 
    
    const dontShowCard = ''

    const storedCards = cards.map((card) => {return card.columm === section ? showCard(card) : dontShowCard})

    const newCard = <CardNew></CardNew>
    return(
        <ColummS>
            <h2>{title}</h2>
            {newCard}
        </ColummS>
    )
}