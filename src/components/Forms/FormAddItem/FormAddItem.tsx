import { FC, SyntheticEvent, memo } from "react";

type FormType = {
  onSubmit?: (name: string) => void;
};

const FormAddItem: FC<FormType> = memo(({ onSubmit }) => {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();

    const name = e.currentTarget[0] as HTMLInputElement;

    if (onSubmit) {
      onSubmit(name.value);
    }

    name.value = "";
  };

  return (
    <form className="flex w-full" onSubmit={handleSubmit}>
      <div className="w-full">
        <input type="text" name="name" placeholder="Type name here" required />
      </div>
      <div>
        <button type="submit">ADD NEW</button>
      </div>
    </form>
  );
});

export { FormAddItem };
