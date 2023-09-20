import { FC } from "react";
import { Comment, Item } from "../../types";
import { CommentsList, FormAddComment, onSubmitType } from "../../components";

type ItemsProps = {
  data: Comment[];
  addComment: onSubmitType;
  selectedItem: Item | null;
};

const Comments: FC<ItemsProps> = ({ data, addComment, selectedItem }) => {
  return (
    <div className="p-4 bg-light w-full max-w-400">
      {selectedItem ? (
        <h2>Comments ID - {selectedItem.id}</h2>
      ) : (
        <h2>Select item</h2>
      )}
      <div>
        <FormAddComment isDisabled={!selectedItem} onSubmit={addComment} />
      </div>
      <div>
        <CommentsList data={data} />
      </div>
    </div>
  );
};

export { Comments };
