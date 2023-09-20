import { FC, SyntheticEvent, memo } from "react";

import { Comment } from "../../../types";

export type onSubmitType = (name: Pick<Comment, "color" | "name">) => void;

type FormType = {
  onSubmit?: onSubmitType;
  isDisabled?: boolean;
};

const FormAddComment: FC<FormType> = memo(
  ({ onSubmit, isDisabled = false }) => {
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
      e.preventDefault();

      const color = e.currentTarget[0] as HTMLInputElement;
      const name = e.currentTarget[1] as HTMLInputElement;

      if (onSubmit) {
        onSubmit({ color: color.value, name: name.value });
      }

      name.value = "";
      color.value = "#000000";
    };

    return (
      <form className="flex w-full" onSubmit={handleSubmit}>
        <div>
          <input type="color" name="color" />
        </div>
        <div className="w-full">
          <textarea
            name="name"
            className="resize-vertical"
            rows={1}
            placeholder="Type comment here"
            required
          />
        </div>
        <div>
          <button type="submit" disabled={isDisabled}>
            ADD NEW
          </button>
        </div>
      </form>
    );
  }
);

export { FormAddComment };
