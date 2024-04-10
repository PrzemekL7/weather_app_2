import { useRef } from "react";

function Search({ searchValue, setSearchValue, handleSearch }) {
    const searchRef = useRef(null);

    function handleFocus() {
        searchRef.current.classList.add("focus");
    }

    function handleInput(event) {
        setSearchValue(event.target.value);
    }

    function handleOnBlur() {
        if (searchValue === "") {
            searchRef.current.classList.remove("focus");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSearch();
    }

    return (
        <form className="search" ref={searchRef} onSubmit={handleSubmit}>
            <div className="search__wrapper">
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
                <button className="search__btn" type="submit">Search</button>
            </div>
        </form>
    );
}

export default Search;
