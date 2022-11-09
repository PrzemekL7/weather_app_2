import Search from "./Search";

function SearchBar({searchValue, setSearchValue, handleSearch}) {
    return (
        <>
            <Search setSearchValue={setSearchValue} searchValue={searchValue} handleSearch={handleSearch}/>
        </>
    );
}

export default SearchBar;
