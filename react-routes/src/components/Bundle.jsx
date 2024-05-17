import { useEffect, useState } from "react"

function Bundle() {
  const [bundle, setBundle] = useState(0);

  useEffect(() => {
    document.title = "Vous avez commandé le bundle " + {bundle} + "fois !"
  })

  return (
    <div className="bundle">
      <p>Vous avez commandé le bundle {bundle} fois !</p>
      <button type="button" id="btnAdd" onClick={() => setBundle(bundle + 1)}>ADD TO LIST</button>
    </div>
  )
}

export default Bundle 