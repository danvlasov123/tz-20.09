import { FC, MouseEvent, memo } from "react";
import { Item } from "../../types";

type ItemsListProps = {
  data: Item[];
  onSelect: (item: Item) => void;
  onDelete: (item: Item) => void;
  selected: Item | null;
};

const ItemsList: FC<ItemsListProps> = memo(
  ({ data, onSelect, onDelete, selected }) => {
    const handleDelete = (e: MouseEvent<HTMLElement>, item: Item) => {
      e.stopPropagation();
      onDelete(item);
    };

    return (
      <ul className="flex flex-col gap-2">
        {data.map((item) => {
          const isSelected = selected?.id === item.id;

          return (
            <li
              onClick={() => onSelect(item)}
              className={`p-4 border-black hover-opacity cursor-pointer flex justify-between ${
                isSelected ? "bg-white" : ""
              }`}
              key={item.id}
            >
              <p>{item.name}</p>
              <a
                href="#"
                onClick={(e) => handleDelete(e, item)}
                className="text-red"
              >
                delete
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
);

export { ItemsList };
