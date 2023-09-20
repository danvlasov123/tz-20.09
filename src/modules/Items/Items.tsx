import { FC } from "react";
import { Item } from "../../types";
import { FormAddItem, ItemsList } from "../../components";

type ItemsProps = {
  data: Item[];
  selectedItem: Item | null;
  addItem: (name: string) => void;
  onDeleteItem: (item: Item) => void;
  onSelectItem: (item: Item) => void;
};

const Items: FC<ItemsProps> = ({
  selectedItem,
  data,
  addItem,
  onDeleteItem,
  onSelectItem,
}) => {
  return (
    <div className="p-4 bg-light w-full max-w-400">
      <h2>Items</h2>
      <div>
        <FormAddItem onSubmit={addItem} />
      </div>
      <div>
        <ItemsList
          selected={selectedItem}
          onDelete={onDeleteItem}
          onSelect={onSelectItem}
          data={data}
        />
      </div>
    </div>
  );
};

export { Items };
