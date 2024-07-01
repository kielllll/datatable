import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Name should be not more than 50 characters.'),
  age: z
    .number()
    .min(18, 'Age must be at least 18')
    .max(65, 'Age must be at most 65'),
  gender: z.string(),
  profession: z.string().max(100, 'Text is too long'),
})

export type AddUserFormSchema = z.infer<typeof schema>

export function useAddUserForm() {
  return useForm<AddUserFormSchema>({
    defaultValues: {
      name: '',
      age: 0,
      gender: 'male',
      profession: '',
    },
    resolver: zodResolver(schema),
  })
}
