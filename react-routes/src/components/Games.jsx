import firstGame from "../assets/picts/deadCells.jpg"
import secondGame from "../assets/picts/inscryption.jpg"
import thirdGame from "../assets/picts/katanaZero.jpg"
import fourGame from "../assets/picts/cardShark.jpg"

function Games() {
  const games = [
    { pict: firstGame, buy: "https://store.steampowered.com/app/588650/Dead_Cells/" },
    { pict: secondGame, buy: "https://store.steampowered.com/app/1092790/Inscryption/" },
    { pict: thirdGame, buy: "https://store.steampowered.com/app/460950/Katana_ZERO/" },
    { pict: fourGame, buy: "https://store.steampowered.com/app/1371720/Card_Shark/" },
  ]

  const listGames = games.map((game, index) => (
    <div key={index} className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <img src={game.pict} className="img-fluid w-100" />
          <button type="button" id="btnBuy"><a href={game.buy} className="hrefBuy">BUY</a></button>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="list">
      {listGames}
    </div>
  )
}

export default Games