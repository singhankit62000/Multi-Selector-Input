import { useEffect, useState } from "react";
import DropdownList from "./DropdownList";
import SelectedItem from "./SelectedItem";
import AddOption from "./AddOption";

import "../styles/DropdownSelect.css";

function DropdownSelect ({options}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedList, setSelectedList] = useState([]);
    const [optionsList, setOptionsList] = useState([...options]);

    const handleDropdownClick = (e) => {
        setIsOpen(!isOpen);
        e.target.querySelector('.dropdown-icon')?.classList.toggle('toggle');
    }

    useEffect(() => {
        setOptionsList((prevState) => {
            return prevState.filter((item) => { return selectedList.indexOf(item) === -1; });
        });

        setIsOpen(true);

    }, [selectedList]);

    return (
        <div className="container">
        <AddOption setOptionsList={setOptionsList} />
            <div className="dropdown-box" onClick={handleDropdownClick} onChange={handleDropdownClick}>
                <div className="selected-container">
                    {selectedList.length > 0 ? selectedList.map((item) => (
                        <SelectedItem key={item} className='selected-item' item={item} setOptionsList={setOptionsList} setSelectedList={setSelectedList} setIsOpen={setIsOpen}/>
                    )): <h3>Choose One</h3>}
                </div>
                <span className="dropdown-icon">🔻</span>
            </div>
            {isOpen && <DropdownList options={optionsList} setSelectedList={setSelectedList} />}
        </div>
    )
}

export default DropdownSelect;