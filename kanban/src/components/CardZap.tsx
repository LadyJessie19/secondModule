import { CardNew, InputTitle, InputTextarea, CardTask, Title, EditIcon, Text, ButtonsBottom, NextIcon, PreviousIcon, CardEdit } from "./styles"

import addIcon from '../assets/add.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/trash.svg'
import nextIcon from '../assets/right.svg'
import previousIcon from '../assets/left.svg'
import cancelIcon from '../assets/cancel.svg'
import saveIcon from '../assets/save.svg'

const CardZap = ({ title, description, columm }) => {
 
    const objIcons = {
        addI: <img onClick={alert} src={addIcon} alt="addIcon" />,
        deleteI: <img onClick={alert} src={deleteIcon} alt="deleteIcon" />,
        editI: <img onClick={alert} src={editIcon} alt="editIcon" />,
        nextI: <img onClick={alert} src={nextIcon} alt="nextIcon" />,
        previousI: <img onClick={alert} src={previousIcon} alt="previousIcon" />,
        cancelI: <img onClick={alert} src={cancelIcon} alt="cancelIcon" />,
        saveI: <img onClick={alert} src={saveIcon} alt="saveIcon" />
    }

    const { addI, deleteI, editI, nextI, previousI, cancelI, saveI } = objIcons

    return(
        <CardTask>
                <Title>{title} 
                <EditIcon>{editI}</EditIcon></Title>
                <Text>{description}</Text>
                <ButtonsBottom>
                    {deleteI}
                    <NextIcon>{nextI}</NextIcon>
                </ButtonsBottom>
        </CardTask>
    )
}

export default CardZap