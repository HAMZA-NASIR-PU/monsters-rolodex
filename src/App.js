// import { Component } from "react";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {
  // console.log('render');
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    console.log("Fetch effect");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    // console.log("monsters effect");
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);



  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  // console.log('App render end...');
  return (
    <div className='App'>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        placeholder='search monster'
        onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
export default App;
