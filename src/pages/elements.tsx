import { useForm } from "react-hook-form";

const Elements = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => null;

  return (
    <div>
      <h1>My Elements</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col border-2 w-fit p-4"
        action=""
      >
        <label htmlFor="">Title</label>
        <input
          className="bg-neutral-100 p-2 rounded"
          {...register("title")}
          type="text"
        />
        <label htmlFor="">Description</label>
        <input {...register("description")} type="text" />
        <label htmlFor="">Percentage</label>
        <input {...register("percentage")} type="number" />
        <div className="flex gap-4 text-white justify-center">
          <button className="bg-neutral-600 hover:bg-neutral-500 duration-100 rounded p-2 px-4">
            Cancel
          </button>
          <button className="bg-green-600 hover:bg-green-500 duration-100 rounded p-2 px-4">
            Add Element
          </button>
        </div>
      </form>
    </div>
  );
};

export default Elements;
