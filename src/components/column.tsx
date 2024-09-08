interface ColumnProps {
  items: string[]
  selected: string[]
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
  title: string
}

export const Column: React.FC<ColumnProps> = ({ items, selected, setSelected, title }) => {
  const handleCheckboxChange = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item))
    } else {
      setSelected([...selected, item])
    }
  }

  return (
    <div className="border rounded p-4 w-64">
      <h3 className="font-bold mb-2">{title}</h3>
      {items.map((item) => (
        <div key={item} className="flex items-center space-x-2 mb-1">
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => handleCheckboxChange(item)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label className="text-sm">{item}</label>
        </div>
      ))}
    </div>
  )
}
