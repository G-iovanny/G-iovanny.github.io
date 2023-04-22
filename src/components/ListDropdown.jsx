import "../styles/ListDropdown/ListDropdown.css"
import { useState } from 'react'; 

function ListDropdown({ product }) {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
      }

    return ( 
        <div className="listDropdown">
            <div className="listDropdown__containerTitle" onClick={(toggle)}>
                <h2 className="listDropdown__title">Équipements</h2>
                <svg className={`listDropdown__icon ${isOpen && "active"}`} width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7897 0.502064C11.4591 -0.167355 12.5462 -0.167355 13.2157 0.502064L23.4979 10.7843C24.1674 11.4538 24.1674 12.5409 23.4979 13.2103C22.8285 13.8797 21.7414 13.8797 21.072 13.2103L12 4.13835L2.92804 13.205C2.25862 13.8744 1.17148 13.8744 0.502064 13.205C-0.167355 12.5355 -0.167355 11.4484 0.502064 10.779L10.7843 0.496709L10.7897 0.502064Z" fill="white"/>
                </svg> 

            </div> 

            { isOpen && (
                <div className={`listDropdown__containerEquipment ${isOpen && "active"}`}>
                    <ul>
                        {product.equipments.map((equipment, index) => {
                            /* Pour chaque équipement dans la propriété equipments de l'objet product, je crée une liste avec l'équipement */
                            return <li className="listDropdown__equipment" key={ index }>{ equipment }</li>
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ListDropdown;