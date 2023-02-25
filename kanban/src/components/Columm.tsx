import { ColummS } from './styles'

import CardZap from './CardZap'
import CardNew from './CardNew'

export const Columm = ({title, section, nextSection, cards, titleState, newTitle, descriptionState, newDescription, addCard, nextColumm}) => {
    
    const nextSectionFake = 'doing'

    const showCard = (card) => {
        return <CardZap key={card.id} id={card.id} title={card.title} description={card.description} columm={section} nextColumm={nextColumm} nextSection={nextSectionFake}></CardZap>
    } 
    
    const dontShowCard = ''

    const storedCards = cards.map((card:any) => {return card.columm === section ? showCard(card) : dontShowCard})

    const newCard = <CardNew titleState={titleState} newTitle={newTitle} descriptionState={descriptionState} newDescription={newDescription} addCard={addCard}></CardNew>

    return(
        <ColummS>
            <h2>{title}</h2>
            {section === 'new'? newCard : storedCards }
        </ColummS>
    )
}