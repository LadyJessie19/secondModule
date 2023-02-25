import { CardNewD, InputTitle, InputTextarea } from "./styles"

import addIcon from '../assets/add.svg'

const CardNew = ({ titleState, descriptionState, newTitle, newDescription, addCard }) => {
    const addI = <img onClick={addCard} src={addIcon} alt="addIcon" />

    return(
        <CardNewD>
                <InputTitle type="text" placeholder="Title" value={titleState} onChange={(e) => newTitle(e)}/>
                <InputTextarea placeholder="Description" value={descriptionState} onChange={(e) => newDescription(e)}/><br/>
                {addI}
        </CardNewD>
    )
}

export default CardNew