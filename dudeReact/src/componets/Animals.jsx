import React,{useState} from 'react'
import dog from './../../public/dog.png'
import cat from './../../public/cat.png'


const Animals = () => {
    const [ animal, setAnimal ] = useState(dog)
    return(
        <>
            <img style={{borderRadius:'14px'}} src={animal} alt="animal" /> <br/>
            <button onClick={() => setAnimal(animal === cat? dog : cat)}>{animal === cat? 'I Wanna See the Dog' : 'I Wanna See the Cat'}</button>
        </>
    )
}

export default Animals