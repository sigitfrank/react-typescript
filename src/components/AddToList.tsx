import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}


const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        url: '',
        note: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.age || !input.url) return alert('Fill the required field')
        setPeople([...people, {
            name: input.name,
            age: +input.age,
            url: input.url,
            note: input.note,
        }])
    }

    return (
        <div className="AddToList">
            <input onChange={handleChange} name="name" value={input.name} type="text" placeholder="Name"
                className="AddToList-input" />
            <input onChange={handleChange} name="age" value={input.age} type="text" placeholder="Age"
                className="AddToList-input" />
            <input onChange={handleChange} name="url" value={input.url} type="text" placeholder="Image Url"
                className="AddToList-input" />
            <textarea onChange={handleChange} name="note" value={input.note} placeholder="Notes" className="AddToList-input">{input.note}</textarea>

            <button onClick={handleClick} className="AddToList-btn">Add to List</button>
        </div>
    )
}

export default AddToList
