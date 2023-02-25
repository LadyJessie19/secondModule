import { useState } from "react"
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

    const alert = () => {
        return window.alert('clicou!')
    }

    const newTitle = (e) => {
        setTitle(e.target.value)
    }

    const newDescription = (e) => {
        setDescription(e.target.value)
    }

    const newCard = () => {
        
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
        <Columm title={titleColumm.NEW} cards={cards} section={sectionColumm.NEW}></Columm>
        <Columm title={titleColumm.TODO} cards={cards} section={sectionColumm.TODO}></Columm>
        <Columm title={titleColumm.DOING} cards={cards} section={sectionColumm.DOING}></Columm>
        <Columm title={titleColumm.DONE} cards={cards} section={sectionColumm.DONE}></Columm>
        </Back>
    )
}

export default Background