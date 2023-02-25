import { Columm, CardNew, InputTitle, InputTextarea, CardTask, Title, EditIcon, Text, ButtonsBottom, NextIcon, PreviousIcon, CardEdit } from "../components/styles"

import addIcon from '../assets/add.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/trash.svg'
import nextIcon from '../assets/right.svg'
import previousIcon from '../assets/left.svg'
import cancelIcon from '../assets/cancel.svg'
import saveIcon from '../assets/save.svg'

import { useState } from "react"

const Background = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

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

    return(
        <>
        <Columm>
            <h2>New</h2>
            <CardNew>
                <InputTitle type="text" placeholder="Title" value={title} onChange={(e) => newTitle(e)}/>
                <InputTextarea placeholder="Description" value={description} onChange={(e) => newDescription(e)}/><br/>
                <img onClick={alert} src={addIcon} alt="" />
            </CardNew>
        </Columm>
        <Columm>
            <h2>To Do</h2>
            <CardTask>
                <Title>Titulo do Card I 
                <EditIcon><img onClick={alert} src={editIcon} alt="" /></EditIcon> </Title>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <ButtonsBottom>
                    <img onClick={alert} src={deleteIcon} alt="" />
                    <NextIcon><img onClick={alert} src={nextIcon} alt="" /></NextIcon>
                </ButtonsBottom>
            </CardTask>
            <CardTask>
                <Title>Titulo do Card II 
                <EditIcon><img onClick={alert} src={editIcon} alt="" /></EditIcon> </Title>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <ButtonsBottom>
                    <img onClick={alert} src={deleteIcon} alt="" />
                    <NextIcon><img onClick={alert} src={nextIcon} alt="" /></NextIcon>
                </ButtonsBottom>
            </CardTask> 
        </Columm>
        <Columm>
            <h2>Doing</h2>
            <CardTask>
                <Title>Card Doing 
                <EditIcon><img onClick={alert} src={editIcon} alt="" /></EditIcon> </Title>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <ButtonsBottom>
                    <PreviousIcon> <img onClick={alert} src={previousIcon} alt="" /> </PreviousIcon>
                    <img onClick={alert} src={deleteIcon} alt="" />
                    <NextIcon><img onClick={alert} src={nextIcon} alt="" /></NextIcon>
                </ButtonsBottom>
            </CardTask>
        </Columm>
        <Columm>
            <h2>Done</h2>
            <CardTask>
                <Title>Card Done 
                <EditIcon><img onClick={alert} src={editIcon} alt="" /></EditIcon> </Title>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <ButtonsBottom>
                    <PreviousIcon> <img onClick={alert} src={previousIcon} alt="" /> </PreviousIcon>
                    <img onClick={alert} src={deleteIcon} alt="" />
                </ButtonsBottom>
            </CardTask>
            <CardEdit>
                <InputTitle type="text" placeholder="Title" />
                <InputTextarea placeholder="Description" /><br/>
                <ButtonsBottom>
                    <PreviousIcon> <img onClick={alert} src={cancelIcon} alt="" /> </PreviousIcon>
                    <img onClick={alert} src={saveIcon} alt="" />
                </ButtonsBottom>
            </CardEdit>
        </Columm>
        </>
    )
}

export default Background