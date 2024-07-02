import { useState, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { UserRecord } from '../types'

export function useUserState() {
  const [users, setUsers] = useState<UserRecord[]>([])
  const [user, setUser] = useState<UserRecord | null>(null)
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

  const edit = (user: UserRecord) => {
    const currentUsers = [...users]
    const userIndex = users.findIndex((u) => u.id === user.id)

    if (userIndex !== -1) {
      currentUsers[userIndex] = user
      setUsers(currentUsers)
    }
  }

  const remove = (userId: string) => {
    const currentUsers = [...users]
    const userIndex = users.findIndex((user) => user.id === userId)

    if (userIndex !== -1) {
      currentUsers.splice(userIndex, 1)

      setUsers(currentUsers)
    }
  }

  const filteredUsers = useMemo(() => {
    const searchResults = users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit

    return searchResults.slice(startIndex, endIndex)
  }, [users, searchValue, limit, page])

  return {
    states: {
      user,
      users: filteredUsers,
      page,
      limit,
      searchValue,
      count: users.length,
    },
    actions: {
      add,
      edit,
      remove,
      setPage,
      setLimit,
      setSearchValue,
      setUser,
    },
  }
}
