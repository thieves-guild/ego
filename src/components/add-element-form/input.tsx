import { useFormContext } from "react-hook-form";

type Props = {
  identifier: string;
  title: string;
  type: string;
};

const FormInput: React.FC<Props> = ({ identifier, title, type }) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={identifier}>{title}</label>
      <input
        id={identifier}
        className="bg-neutral-100 p-2 rounded"
        {...register(identifier)}
        type={type}
      />
    </div>
  );
};

export default FormInput;
