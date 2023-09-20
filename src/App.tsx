import { useCallback, useMemo, useState } from "react";
import "./App.css";

import type { Comment, Item } from "./types";
import { Items } from "./modules/Items/Items";
import { Comments } from "./modules/Comments/Comments";

import {
  getCachedItems,
  getCachedComments,
  getCachedSelectedItem,
  setCachedSelectedItem,
  setCachedComments,
  setCachedItems,
} from "./helpers/cached";

const App = () => {
  const [items, setItems] = useState<Item[]>(getCachedItems());

  const [comments, setComments] = useState<Comment[]>(getCachedComments());

  const [selectedItem, setSelectedItem] = useState<Item | null>(
    getCachedSelectedItem()
  );
  const onSelectItem = useCallback((item: Item | null) => {
    setSelectedItem(item);
    setCachedSelectedItem(item);
  }, []);

  const addItem = useCallback(
    (name: string) => {
      const item = {
        id: new Date().getTime(),
        name,
      };

      setItems((prevItems) => [...prevItems, item]);
      setCachedItems([...items, item]);

      if (!items.length) {
        onSelectItem(item);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items]
  );

  const onDeleteItem = useCallback(
    (item: Item) => {
      const filteredItems = items.filter((prevItem) => prevItem.id !== item.id);

      setItems(filteredItems);
      setCachedItems(filteredItems);

      if (item.id === selectedItem?.id && items.length) {
        onSelectItem(filteredItems[0]);
      }

      if (!filteredItems.length) {
        onSelectItem(null);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, selectedItem?.id]
  );

  const addComment = useCallback(
    (comment: { name: string; color: string }) => {
      const itemId = selectedItem?.id as number;

      const data = { ...comment, id: new Date().getTime(), itemId };

      setComments((prevComments) => [...prevComments, data]);
      setCachedComments([...comments, data]);
    },
    [selectedItem, comments]
  );

  const selectedComments = useMemo(() => {
    if (!selectedItem) {
      return [];
    }

    return comments.filter((comment) => comment.itemId === selectedItem.id);
  }, [selectedItem, comments]);

  return (
    <div className="container">
      <div className="flex gap-6">
        <div>
          <Items
            data={items}
            selectedItem={selectedItem}
            onDeleteItem={onDeleteItem}
            onSelectItem={onSelectItem}
            addItem={addItem}
          />
        </div>
        <div>
          <Comments
            selectedItem={selectedItem}
            data={selectedComments}
            addComment={addComment}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
