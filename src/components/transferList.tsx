import React, { useState } from "react"
import { Item, TransferListProps } from "../types/common"
import { Column } from "./column"

const TransferList: React.FC<TransferListProps> = ({ items1, items2, setItems1, setItems2 }) => {
  const [selected1, setSelected1] = useState<number[]>([])
  const [selected2, setSelected2] = useState<number[]>([])

  const transferSelected = (
    from: Item[],
    setFrom: React.Dispatch<React.SetStateAction<Item[]>>,
    to: Item[],
    setTo: React.Dispatch<React.SetStateAction<Item[]>>,
    selected: number[],
    setSelected: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    const itemsToTransfer = from.filter((item) => selected.includes(item.id))
    setFrom(from.filter((item) => !selected.includes(item.id)))
    setTo([...to, ...itemsToTransfer])
    setSelected([])
  }

  const transferAll = (
    from: Item[],
    setFrom: React.Dispatch<React.SetStateAction<Item[]>>,
    to: Item[],
    setTo: React.Dispatch<React.SetStateAction<Item[]>>
  ) => {
    setTo([...to, ...from])
    setFrom([])
  }

  return (
    <div className="flex justify-between flex-col gap-2 sm:gap-8 sm:flex-row items-stretch  p-4 border rounded shadow bg-white">
      <Column items={items1} selected={selected1} setSelected={setSelected1} title="Column 1" />
      <div className="flex flex-col justify-center space-y-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => transferAll(items1, setItems1, items2, setItems2)}
          disabled={items1.length === 0}
        >
          &gt;&gt;
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => transferSelected(items1, setItems1, items2, setItems2, selected1, setSelected1)}
          disabled={selected1.length === 0}
        >
          &gt;
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => transferSelected(items2, setItems2, items1, setItems1, selected2, setSelected2)}
          disabled={selected2.length === 0}
        >
          &lt;
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={() => transferAll(items2, setItems2, items1, setItems1)}
          disabled={items2.length === 0}
        >
          &lt;&lt;
        </button>
      </div>
      <Column items={items2} selected={selected2} setSelected={setSelected2} title="Column 2" />
    </div>
  )
}

export default TransferList
