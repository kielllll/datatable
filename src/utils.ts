import { Column, UserRecord } from './types'

export const useColumns = (): Column<UserRecord & { action: string }>[] => [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'age',
    label: 'Age',
  },
  {
    key: 'gender',
    label: 'Gender',
  },
  {
    key: 'profession',
    label: 'Profression',
  },
  {
    key: 'action',
    label: 'Action',
  },
]

export const useGetGenderOptions = () => [
  {
    label: 'male',
    value: 'male',
  },
  {
    label: 'female',
    value: 'female',
  },
  {
    label: 'prefer not to say',
    value: 'prefer not to say',
  },
]
