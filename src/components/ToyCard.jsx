import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  const { id, name, image, likes } = toy;

 function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, { method: "DELETE" })
      .then(() => onDeleteToy(id));
  }

  function handleLike() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((r) => r.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{"" /* Toy's Name */}</h2>
      <img
        src={"" /* Toy's Image */}
        alt={"" /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{"" /* Toy's Likes */} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

<button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>

export default ToyCard;
