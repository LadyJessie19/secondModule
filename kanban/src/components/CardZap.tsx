import { CardTask, Title, EditIcon, Text, ButtonsBottom, NextIcon, PreviousIcon, DeleteIcon, CardEdit } from "./styles"

import addIcon from '../assets/add.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/trash.svg'
import nextIcon from '../assets/right.svg'
import previousIcon from '../assets/left.svg'
import cancelIcon from '../assets/cancel.svg'
import saveIcon from '../assets/save.svg'

const CardZap = ({ id, title, description, columm, nextColumm, previousColumm, nextSection, columms }) => {
    
    const alert = () => {
        window.alert('12 anos')
    }

    const objIcons = {
        addI: <img onClick={alert} src={addIcon} alt="addIcon" />,
        deleteI: <img onClick={() => previousColumm(id)} src={deleteIcon} alt="deleteIcon" />,
        editI: <img onClick={alert} src={editIcon} alt="editIcon" />,
        nextI: <img onClick={() => nextColumm(id)} src={nextIcon} alt="nextIcon" />,
        previousI: <img onClick={() => previousColumm(id)} src={previousIcon} alt="previousIcon" />,
        cancelI: <img onClick={alert} src={cancelIcon} alt="cancelIcon" />,
        saveI: <img onClick={alert} src={saveIcon} alt="saveIcon" />
    }

    return(
        <CardTask>
                <Title>{title} 
                <EditIcon>{objIcons.editI}</EditIcon></Title>
                <Text>{description}</Text>
                <ButtonsBottom>
                    <PreviousIcon>{objIcons.previousI}</PreviousIcon>
                    <DeleteIcon>{objIcons.deleteI}</DeleteIcon>
                    <NextIcon>{objIcons.nextI}</NextIcon>
                </ButtonsBottom>
        </CardTask>
    )
}

export default CardZap