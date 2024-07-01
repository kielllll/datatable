import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { UserRecord } from '../../types'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name should be not more than 50 characters.'),
  age: z.number().lt(1, 'Age is required').gt(120, "You're not immortal"),
  gender: z.string(),
  profession: z.string().max(100, 'Text is too long'),
})

export function useAddUserForm() {
  return useForm<Omit<UserRecord, 'id'>>({
    defaultValues: {
      name: '',
      age: 0,
      gender: 'male',
      profession: '',
    },
    resolver: zodResolver(schema),
  })
}
