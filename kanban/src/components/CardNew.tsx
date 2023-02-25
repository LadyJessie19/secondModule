import { CardNew, InputTitle, InputTextarea, ButtonsBottom, NextIcon } from "./styles"

import addIcon from '../assets/add.svg'

const CardZap = ({ title, description, columm }) => {
 
    const addI = <img onClick={alert} src={addIcon} alt="addIcon" />

    return(
        <CardNew>
                <InputTitle type="text" placeholder="Title" value={title} onChange={(e) => newTitle(e)}/>
                <InputTextarea placeholder="Description" value={description} onChange={(e) => newDescription(e)}/><br/>
                <img onClick={alert} src={addIcon} alt="" />
        </CardNew>
    )
}

export default CardZap