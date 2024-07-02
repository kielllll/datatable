import { useState } from 'react'

export function useDialogsState() {
  const [addUserDialogOpened, setAddUserDialogOpened] = useState(false)
  const [editUserDialogOpened, setEditUserDialogOpened] = useState('')

  const openAddUserDialog = () => setAddUserDialogOpened(true)
  const closeAddUserDialog = () => setAddUserDialogOpened(false)

  const openEditUserDialog = (userId: string) => setEditUserDialogOpened(userId)
  const closeEditUserDialog = () => setEditUserDialogOpened('')

  return {
    states: {
      addUserDialogOpened,
      editUserDialogOpened,
    },
    actions: {
      openAddUserDialog,
      closeAddUserDialog,
      openEditUserDialog,
      closeEditUserDialog,
    },
  }
}
