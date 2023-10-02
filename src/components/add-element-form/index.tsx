import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

const AddElementForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      description: "",
      percentage: null,
    },
  });
  const onSubmit = () => null;
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            Add Element
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-neutral-200 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
            <form
              className="flex flex-col border-2 w-fit p-4 gap-8"
              onSubmit={handleSubmit(onSubmit)}
              action=""
            >
              <fieldset className="flex flex-col">
                <label htmlFor="">Title</label>
                <input
                  className="bg-neutral-100 p-2 rounded"
                  {...register("title")}
                  type="text"
                />
                <label htmlFor="">Description</label>
                <input
                  className="bg-neutral-100 p-2 rounded"
                  {...register("description")}
                  type="text"
                />
                <label htmlFor="">Percentage</label>
                <input
                  className="bg-neutral-100 p-2 rounded"
                  {...register("percentage")}
                  type="number"
                />
              </fieldset>
              <div className="flex gap-4 text-white justify-center">
                <Dialog.Close asChild>
                  <button className="bg-neutral-600 hover:bg-neutral-500 duration-100 rounded p-2 px-4">
                    Cancel
                  </button>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <button className="bg-green-600 hover:bg-green-500 duration-100 rounded p-2 px-4">
                    Add Element
                  </button>
                </Dialog.Close>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default AddElementForm;
