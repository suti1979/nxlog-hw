export interface Item {
  id: number
  title: string
}

export interface TransferListProps {
  items1: Item[]
  items2: Item[]
  setItems1: React.Dispatch<React.SetStateAction<Item[]>>
  setItems2: React.Dispatch<React.SetStateAction<Item[]>>
}

export interface ColumnProps {
  items: Item[]
  selected: number[]
  setSelected: React.Dispatch<React.SetStateAction<number[]>>
  title: string
}
