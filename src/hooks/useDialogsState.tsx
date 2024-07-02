import { useState } from 'react'

export function useDialogsState() {
  const [addUserDialogOpened, setAddUserDialogOpened] = useState(false)
  const [editUserDialogOpened, setEditUserDialogOpened] = useState(false)
  const [deleteUserDialogOpened, setDeleteUserDialogOpened] = useState(false)

  const openAddUserDialog = () => setAddUserDialogOpened(true)
  const closeAddUserDialog = () => setAddUserDialogOpened(false)
  const openEditUserDialog = () => setEditUserDialogOpened(true)
  const closeEditUserDialog = () => setEditUserDialogOpened(false)
  const openDeleteUserDialog = () => setDeleteUserDialogOpened(true)
  const closeDeleteUserDialog = () => setDeleteUserDialogOpened(false)

  return {
    states: {
      addUserDialogOpened,
      editUserDialogOpened,
      deleteUserDialogOpened,
    },
    actions: {
      openAddUserDialog,
      closeAddUserDialog,
      openEditUserDialog,
      closeEditUserDialog,
      openDeleteUserDialog,
      closeDeleteUserDialog,
    },
  }
}
