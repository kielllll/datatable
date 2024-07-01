import { useForm } from 'react-hook-form'
import Dialog from '../../components/dialog'
import { UserRecord } from '../../types'
import { Input, Select } from '@headlessui/react'
import Button from '../../components/button'

interface AddUserDialogProps {
  opened: boolean
  onClose: () => void
}

export default function AddUserDialog({
  opened,
  onClose,
}: AddUserDialogProps): JSX.Element {
  const { register, handleSubmit } = useForm<Omit<UserRecord, 'id'>>({
    defaultValues: {
      name: '',
      age: 0,
      gender: 'male',
      profession: '',
    },
  })

  const onSubmit = (data: Omit<UserRecord, 'id'>) => console.log(data)

  return (
    <Dialog
      opened={opened}
      onClose={onClose}
      title="Add User"
      className="bg-[#F4F7FC]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <Input {...register('name')} type="text" className="col-span-2" />
        <Input {...register('age')} type="text" />
        <Select {...register('gender')}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="prefer not to say">prefer not to say</option>
        </Select>
        <Input {...register('profession')} type="text" className="col-span-2" />
        <Button className="col-span-2" type="submit">
          Submit
        </Button>
      </form>
    </Dialog>
  )
}
