import { useState } from "react"
import TransferList from "./components/transferList"

function App() {
  const [items1, setItems1] = useState(["Item 1", "Item 2", "Item 3"])
  const [items2, setItems2] = useState(["Item 4", "Item 5", "Item 6"])

  return (
    <>
      <TransferList items1={items1} items2={items2} setItems1={setItems1} setItems2={setItems2} />
    </>
  )
}

export default App
