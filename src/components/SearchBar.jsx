import Autocomplete from "./Autocomplete";
import Search from "./Search";

function SearchBar({searchValue, setsearchValue}) {
    return (
        <>
            <Search setsearchValue={setsearchValue} searchValue={searchValue}/>
            <Autocomplete/>
        </>
    );
}

export default SearchBar;
