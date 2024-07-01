import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { UserRecord } from '../types'

export function useUserState() {
  const [users, setUsers] = useState<UserRecord[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  const add = (user: Omit<UserRecord, 'id'>) => {
    const newUserId = uuidv4()

    setUsers([
      {
        ...user,
        id: newUserId,
      },
      ...users,
    ])
  }

  return {
    states: {
      users,
      page,
      limit,
      searchValue,
    },
    actions: {
      add,
      setPage,
      setLimit,
      setSearchValue,
    },
  }
}
