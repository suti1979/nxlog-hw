import { useState } from "react"
import TransferList from "./components/transferList"
import { Item } from "./types/common"

function App() {
  const [items1, setItems1] = useState<Item[]>([
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" }
  ])
  const [items2, setItems2] = useState<Item[]>([
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" }
  ])

  return (
    <div className="p-4">
      <TransferList items1={items1} items2={items2} setItems1={setItems1} setItems2={setItems2} />
    </div>
  )
}

export default App
