import "../styles/DropdownList.css";

function DropdownList ({options, setSelectedList}) {
    const handleItemClick = (e) => {
        setSelectedList((prevState) => {
            if(prevState.includes(e.target.textContent))
                return prevState;
            return [...prevState, e.target.textContent];
        })
    }

    return (
        <div className="dropdownlist-container">
            {options.map((item) => (
                <p key={item} className="dropdownitem-name" onClick={handleItemClick}>
                    {item}
                </p>
            ))}
        </div>
    );
}

export default DropdownList;