import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

function handleAddToy(newToy) {
  setToys((toys) => [...toys, newToy]);
}

{showForm ? <ToyForm onAddToy={handleAddToy} /> : null}

function handleDeleteToy(id) {
  setToys((toys) => toys.filter((toy) => toy.id !== id));
}

<ToyContainer toys={toys} onDeleteToy={handleDeleteToy} />

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

function handleUpdateToy(updatedToy) {
  setToys((toys) =>
    toys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
  );
}

<ToyContainer
  toys={toys}
  onDeleteToy={handleDeleteToy}
  onUpdateToy={handleUpdateToy}
/>

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer />
    </>
  );
}

export default App;
