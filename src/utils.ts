import { Column, UserRecord } from './types'

export const useColumns = (): Column<UserRecord>[] => [
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
]
