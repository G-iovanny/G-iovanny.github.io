import "../styles/Dropdown/dropdown.css"
import { useState } from 'react';

function Dropdown({ title, description }) {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
      }

    return (
        <div className="dropdown">
            <div className="dropdown__containerTitle" onClick={(toggle)}>
                <h2 className="dropdown__title">{ title }</h2>
                <svg className={`dropdown__icon ${isOpen && "active"}`} width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502064 13.205C-0.167355 12.5355 -0.167355 11.4484 0.502064 10.779L10.7843 0.496709L10.7897 0.502064Z" fill="white"/>
                </svg>

            </div>

            { isOpen && (
                <div className={`dropdown__containerText ${isOpen && "active"}`}>
                    <p className="dropdown__text"> { description } </p>
                </div>
            )}
        </div>
    )
}

export default Dropdown;