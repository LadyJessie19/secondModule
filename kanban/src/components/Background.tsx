import { Columm, CardNew, InputTitle, InputTextarea, CardTask, Title, EditIcon, Text, ButtonsBottom, NextIcon } from "./styles"
import addIcon from '../assets/add.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/trash.svg'
import nextIcon from '../assets/right.svg'
import previousIcon from '../assets/left.svg'

const Background = () => {
    const alert = () => {
        return window.alert('clicou!')
    }
    return(
        <>
        <Columm>
            <h2>New</h2>
            <CardNew>
                <InputTitle type="text" placeholder="Title" />
                <InputTextarea placeholder="Description" name="" id="" cols="30" rows="10"></InputTextarea><br/>
                <img onClick={alert} src={addIcon} alt="" />
            </CardNew>
            
        </Columm>
        <Columm>
            <h2>To Do</h2>
            <CardTask>
                <Title>Title 
                <EditIcon><img onClick={alert} src={editIcon} alt="" /></EditIcon> </Title>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                <ButtonsBottom>
                    <img onClick={alert} src={deleteIcon} alt="" />
                    <NextIcon><img onClick={alert} src={nextIcon} alt="" /></NextIcon>
                </ButtonsBottom>
            </CardTask>
            <CardTask>
                <Title>Title 
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
            {/* <Card>
                <h2>Title</h2><img onClick={alert} src={editIcon} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img onClick={alert} src={previousIcon} alt="" />
                <img onClick={alert} src={deleteIcon} alt="" />
                <img onClick={alert} src={nextIcon} alt="" />
            </Card> */}
        </Columm>
        <Columm>
            <h2>Done</h2>
            {/* <Card>
                <h2>Title</h2><img onClick={alert} src={editIcon} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <img onClick={alert} src={previousIcon} alt="" />
                <img onClick={alert} src={deleteIcon} alt="" />
            </Card> */}
        </Columm>
        </>
    )
}

export default Background