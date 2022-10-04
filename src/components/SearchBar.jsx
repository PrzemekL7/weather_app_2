import Autocomplete from "./Autocomplete";
import Search from "./Search";

function SearchBar({searchValue, setSearchValue, handleSearch}) {
    return (
        <>
            <Search setSearchValue={setSearchValue} searchValue={searchValue} handleSearch={handleSearch}/>
            <Autocomplete/>
        </>
    );
}

export default SearchBar;
