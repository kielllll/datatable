import Dialog from '../../components/dialog'
import { Input, NumberInput, TextInput, Select } from '../../components/input'
import { type UserFormSchema, useUserForm } from '../../hooks/useUserForm'
import { UserRecord } from '../../types'
import { useGetGenderOptions } from '../../utils'

interface EditUserDialogProps {
  opened: boolean
  onClose: () => void
  onEdit: (data: UserRecord) => void
  user: UserRecord
}

export default function EditUserDialog({
  opened,
  onClose,
  onEdit,
  user,
}: EditUserDialogProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useUserForm({
    values: user,
  })

  const onSubmit = (data: UserFormSchema) => {
    onEdit({
      ...data,
      gender: data.gender as UserRecord['gender'],
      id: user.id,
    })
    reset()
    onClose()
  }

  const options = useGetGenderOptions()

  return (
    <Dialog
      opened={opened}
      onClose={onClose}
      title="Edit User"
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
        <NumberInput
          label="Number"
          error={errors.age?.message}
          inputProps={register('age', { valueAsNumber: true })}
          isRequired
        />
        <Select
          options={options}
          label="Gender"
          error={errors.gender?.message}
          isRequired
          selectProps={register('gender')}
        />
        <TextInput
          label="Profession"
          error={errors.profession?.message}
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
