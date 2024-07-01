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
