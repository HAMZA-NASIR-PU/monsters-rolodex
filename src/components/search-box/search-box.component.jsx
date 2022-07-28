
import './search-box.styles.css';
const SearchBox = ({ className, placeholder, onChangeHandler }) => {
    // console.log("SearchBox render...");

    return (
        <div>
            <input className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler} />
        </div>
    );

}

export default SearchBox;