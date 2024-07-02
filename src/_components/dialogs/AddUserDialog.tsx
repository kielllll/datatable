import { Field, Label } from '@headlessui/react'
import Dialog from '../../components/dialog'
import { Input, TextInput } from '../../components/input'
import Select from '../../components/select'
import { type UserFormSchema, useUserForm } from './useUserForm'

interface AddUserDialogProps {
  opened: boolean
  onClose: () => void
  onAdd: (data: UserFormSchema) => void
}

export default function AddUserDialog({
  opened,
  onClose,
  onAdd,
}: AddUserDialogProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useUserForm()

  const onSubmit = (data: UserFormSchema) => {
    onAdd(data)
    reset()
    onClose()
  }

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
        <TextInput
          label="Name"
          isRequired
          error={errors.name?.message}
          inputProps={{
            ...register('name'),
            className: 'w-full',
          }}
          className="col-span-2"
        />
        <Field className="flex flex-col">
          <Label className="text-sm/6 font-medium text-black">
            Age <span className="text-red-500">*</span>
          </Label>
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
        <TextInput
          label="Name"
          error={errors.name?.message}
          inputProps={{
            ...register('profession'),
            className: 'w-full',
          }}
          className="col-span-2"
        />
        <Input
          className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white col-span-2"
          type="submit"
        />
      </form>
    </Dialog>
  )
}
