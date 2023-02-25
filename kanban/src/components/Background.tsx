import { useState, useEffect } from "react"
import { stored } from '../data/stored'
import { Back } from "./styles"
import { Columm } from './Columm'

import addIcon from '../assets/add.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/trash.svg'
import nextIcon from '../assets/right.svg'
import previousIcon from '../assets/left.svg'
import cancelIcon from '../assets/cancel.svg'
import saveIcon from '../assets/save.svg'

const Background = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cards, setCards] = useState(stored)

    useEffect(() => {
        console.log('ocorreu uma mudança')
        console.log(cards)
    }, [cards])

    const TODO = 'to do'
    const DOING = 'doing'
    const DONE = 'done'

    const newTitle = (e) => {
        setTitle(e.target.value)
    }

    const newDescription = (e) => {
        setDescription(e.target.value)
    }

    const addCard = () => {
        setCards([...cards, {id: (stored.length + 1), title: title, description: description, columm: TODO}]) 
    }
    
    const nextColumm = (id, section) => {
        const obj = cards.filter((card) => card.id === id)
        const otherCards = cards.filter((card) => card.id !== id)
        setCards([otherCards[0], {...obj[0], columm : section}])
    }

    const titleColumm = {
        NEW: 'New',
        TODO: 'To Do',
        DOING: 'Doing',
        DONE: 'Done'
    }

    const sectionColumm = {
        NEW: 'new',
        TODO: 'to do',
        DOING: 'doing',
        DONE: 'done'
    }

    return(
        <Back>
        <Columm title={titleColumm.NEW} cards={cards} section={sectionColumm.NEW} titleState={title} newTitle={newTitle} descriptionState={description} newDescription={newDescription} addCard={addCard} nextColumm={nextColumm}></Columm>
        <Columm title={titleColumm.TODO} cards={cards} section={sectionColumm.TODO} nextColumm={nextColumm}></Columm>
        <Columm title={titleColumm.DOING} cards={cards} section={sectionColumm.DOING} nextColumm={nextColumm}></Columm>
        <Columm title={titleColumm.DONE} cards={cards} section={sectionColumm.DONE} nextColumm={nextColumm}></Columm>
        </Back>
    )
}

export default Background