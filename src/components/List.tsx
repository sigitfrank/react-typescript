import React from 'react'
import { IState as IProps } from '../App'

const List: React.FunctionComponent<IProps> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person, index) =>
            <li className="List" key={index}>
                <div className="List-header">
                    <img src={person.url} alt={person.name} className="List-img" />
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-none">{person.note}</p>
            </li>
        )
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
