import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { UserRecord } from '../types'

export function useUserState() {
  const [users, setUsers] = useState<UserRecord[]>([])

  const add = (user: Omit<UserRecord, 'id'>) => {
    const newUserId = uuidv4()

    setUsers([
      ...users,
      {
        ...user,
        id: newUserId,
      },
    ])
  }

  return {
    users,
    add,
  }
}
