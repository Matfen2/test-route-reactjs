import { useState } from "react";

function Whislist() {
  const [whish, setWhish] = useState([
    { title: "Immortality", creator: "Sam Barlow", year: 2022 },
    {title: "Celeste", creator: "Extremely OK Games", year: 2018 },
    {title: "Donut County", creator: "Ben Esposito", year: 2018 },
  ])

  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [year, setYear] = useState("");

  const listWhish = whish.map((whis, index) => (
    <ul key={index}>
      <div className="info">
        <li>{whis.title} developped by {whis.creator} release in {whis.year}</li>
        <button type="button" id="btnDelete" onClick={() => deleteGame(index)}>DELETE</button>
      </div>
    </ul>
  ))

  function addGame() {
    setWhish([...whish, { title, creator, year }]);
    setTitle("");
    setCreator("");
    setYear("");
  }

  function deleteGame(index) {
    setWhish(whish.filter((_, i) => i !== index))
  }
  
  return (
    <div className="show">
      {listWhish}
      <form>
        <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Studio" value={creator} onChange={(e) => setCreator(e.target.value)} required />
        <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
        <button type="button" id="btnAdd" onClick={() => addGame()}>ADD</button>
      </form>
    </div>
  )
}

export default Whislist;