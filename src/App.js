import React, { useState } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  let [ newItem , setNewItem ] = useState('');

  let [ search, setSearch ] = useState('');

  function setAndSaveItems(newItems) {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  function addItem(item) {
    let id = items.length ? items[items.length - 1].id + 1 : 1;
    let myNewItem = { id, checked: false, item };
    let listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  function handleCheck(id) {
    let listItems = items.map((item) => item.id === id ? { ...item,
    checked: !item.checked}: item);
    setAndSaveItems(listItems);
  }

  function handleDelete(id) {
    let listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
  
  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase())
          .includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
