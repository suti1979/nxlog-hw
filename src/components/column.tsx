import { ColumnProps } from "../types/common"

export const Column: React.FC<ColumnProps> = ({ items, selected, setSelected, title }) => {
  const handleCheckboxChange = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((itemId) => itemId !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  return (
    <div className="border rounded p-4 flex-1 min-h-[200px] flex flex-col">
      <h3 className="font-bold mb-2">{title}</h3>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              checked={selected.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label className="text-sm">{item.title}</label>
          </div>
        ))
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400">No items</div>
      )}
    </div>
  )
}
