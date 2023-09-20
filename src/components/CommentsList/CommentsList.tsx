import { FC } from "react";
import { Comment } from "../../types";

type ItemsListProps = {
  data: Comment[];
};

const CommentsList: FC<ItemsListProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-2">
      {data.map((item) => {
        return (
          <li
            className="p-4 border-black flex justify-between"
            key={item.id}
          >
            <div
              style={{
                background: item.color,
                width: 24,
              }}
            />
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export { CommentsList };
