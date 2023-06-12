import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addElement } from '../../store/slices/elements'
import { FormData } from '../../types'

const AddElementPopUp = () => {
  const { register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: '',
      description: ''
    }
  })
  const dispatch = useDispatch()
  const onSubmit = (FormData: FormData) => dispatch(addElement(FormData))
  return (
    <form onSubmit={handleSubmit(onSubmit(FormData))}>
      <label htmlFor="idle">Title</label>
      <input {...register('title', { required: true })} id='title' type="text" />
      <label htmlFor="description">Description</label>
      <input {...register('description', { required: true })} id='description' type="text" />
    </form>
  )
}

export default AddElementPopUp