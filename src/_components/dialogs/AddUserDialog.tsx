import { Field, Label } from '@headlessui/react'
import Dialog from '../../components/dialog'
import Input from '../../components/input'
import Select from '../../components/select'
import { type AddUserFormSchema, useAddUserForm } from './useAddUserForm'

interface AddUserDialogProps {
  opened: boolean
  onClose: () => void
}

export default function AddUserDialog({
  opened,
  onClose,
}: AddUserDialogProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useAddUserForm()

  const onSubmit = (data: AddUserFormSchema) => console.log(data)

  return (
    <Dialog
      opened={opened}
      onClose={onClose}
      title="Add User"
      className="bg-slate-200"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <Field className="col-span-2 flex flex-col">
          <Label className="text-sm/6 font-medium text-black">Name</Label>
          <Input {...register('name')} type="text" className="w-full" />
          <p className="text-sm/6 text-red-500">{errors.name?.message}</p>
        </Field>
        <Field className="flex flex-col">
          <Label className="text-sm/6 font-medium text-black">Age</Label>
          <Input {...register('age', { valueAsNumber: true })} type="number" />
          <p className="text-sm/6 text-red-500">{errors.age?.message}</p>
        </Field>
        <Field className="flex flex-col">
          <Label className="text-sm/6 font-medium text-black">Gender</Label>
          <Select {...register('gender')}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="prefer not to say">prefer not to say</option>
          </Select>
          <p className="text-sm/6 text-red-500">{errors.gender?.message}</p>
        </Field>
        <Field className="flex flex-col col-span-2">
          <Label className="text-sm/6 font-medium text-black">Profession</Label>
          <Input {...register('profession')} type="text" className="w-full" />
          <p className="text-sm/6 text-red-500">{errors.profession?.message}</p>
        </Field>
        <Input
          className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white col-span-2"
          type="submit"
        />
      </form>
    </Dialog>
  )
}
