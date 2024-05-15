import "../styles/SelectedItem.css"

function SelectedItem ({className, item, setOptionsList, setSelectedList, setIsOpen}) {

    const handleSelectedItemClick = (e) => {
        
        setSelectedList((prevState) => {
            return prevState.filter((item) => item !== e.target.textContent);
        });
        
        setOptionsList((prevState) => {
            return [...prevState, e.target.textContent];
        });

        setIsOpen((prevState) => prevState);
    }

    return (
        <div className={className} onClick={handleSelectedItemClick}>
            {item}
        </div>
    )
}

export default SelectedItem;