import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addElement } from '../../store/slices/elements'
import { FormData } from '../../types'

const AddElementPopUp = () => {
  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: '',
      description: ''
    }
  })
  const dispatch = useDispatch()
  const onSubmit = (formData: FormData) => {
    dispatch(addElement(formData))
    reset()
  }

  return (
    <form className='flex flex-col p-12 w-fit border-black border' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="idle">Title</label>
      <input className='bg-neutral-200 rounded p-1 mb-2' {...register('title', { required: true })} id='title' type="text" />
      <label htmlFor="description">Description</label>
      <input className='bg-neutral-200 rounded p-1' {...register('description', { required: true })} id='description' type="text" />
      <button className='mt-4 bg-green-600 hover:bg-green-800 duration-200 text-white rounded p-2' type='submit'>Create Element</button>
    </form>
  )
}

export default AddElementPopUp