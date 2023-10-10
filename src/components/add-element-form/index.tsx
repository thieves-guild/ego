import * as Dialog from "@radix-ui/react-dialog";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./input";

const AddElementForm = () => {
  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      percentage: null,
    },
  });
  const onSubmit = () => null;
  return (
    <>
      <FormProvider {...methods}>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none focus:outline-none">
              Add Element
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-neutral-200 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <form
                className="flex flex-col w-fit p-6 gap-8 rounded"
                onSubmit={methods.handleSubmit(onSubmit)}
                action=""
              >
                <fieldset className="flex flex-col">
                  <FormInput identifier="title" title="Title" type="text" />
                  <FormInput
                    identifier="description"
                    title="Description"
                    type="text"
                  />
                  <FormInput
                    identifier="percentage"
                    title="percentage"
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
      </FormProvider>
    </>
  );
};

export default AddElementForm;
