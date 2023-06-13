import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addElement } from '../../store/slices/elements'
import { FormData } from '../../types'

const AddElementPopUp = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      percentage: undefined
    }
  })
  const dispatch = useDispatch()
  const onSubmit = (formData: FormData) => {
    dispatch(addElement(formData))
    reset()
  }

  return (
    <form className='p-12 w-fit border-black border space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col'>
        <label htmlFor="idle">Title</label>
        <input className='bg-neutral-200 rounded p-1 mb-2' {...register('title', { required: true })} id='title' type="text" />
        <label htmlFor="description">Description</label>
        <input className='bg-neutral-200 rounded p-1' {...register('description', { required: true })} id='description' type="text" />
        <label htmlFor="percentage">Percentage</label>
        <input max={100} min={1} className='bg-neutral-200 rounded p-1' {...register('percentage', { required: true })} id='description' type='number' />
      </div>
      <div className='flex flex-col space-y-2'>
        <button className='bg-green-600 hover:bg-green-700 duration-200 text-white rounded p-2' type='submit'>Create Element</button>
        <button className='bg-red-600 hover:bg-red-700 duration-200 text-white rounded p-2'>Cancel</button>
      </div>
    </form>
  )
}

export default AddElementPopUp;