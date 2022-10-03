import { useRef } from "react";

function Search({ searchValue, setSearchValue }) {
    const searchRef = useRef(null);

    function handleFocus () {
        searchRef.current.classList.add("focus");
    };
    
    function handleInput(event) {
        setSearchValue(event.target.value);
    };

    function handleOnBlur () {
        if(searchValue === "") {
            searchRef.current.classList.remove("focus")
        }
    }


    return (
        <div className="search" ref={searchRef}>
            <label className="search__lbl" htmlFor="search">
                Type city
            </label>
            <input
                className="search__input"
                type="text"
                onChange={handleInput}
                id="search"
                value={searchValue}
                onFocus={handleFocus}
                onBlur={handleOnBlur}
            />
        </div>
    );
}

export default Search;
