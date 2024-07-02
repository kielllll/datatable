import { FaPen, FaRegTrashAlt } from 'react-icons/fa'
import DataTable from './components/datatable'
import AddUserDialog from './_components/dialogs/AddUserDialog'
import { UserRecord } from './types'
import { useColumns } from './utils'
import { useUserState } from './hooks/useUserState'
import Button from './components/button'
import { useDialogsState } from './hooks/useDialogsState'
import EditUserDialog from './_components/dialogs/EditUserDialog'
import DeleteUserDialog from './_components/dialogs/DeleteUserDialog'

function App() {
  const {
    states: {
      addUserDialogOpened,
      deleteUserDialogOpened,
      editUserDialogOpened,
    },
    actions: {
      openAddUserDialog,
      closeAddUserDialog,
      openEditUserDialog,
      closeEditUserDialog,
      openDeleteUserDialog,
      closeDeleteUserDialog,
    },
  } = useDialogsState()
  const {
    states: { users, searchValue, page, limit, count, user },
    actions: { add, edit, setSearchValue, setPage, setLimit, setUser, remove },
  } = useUserState()

  const columns = useColumns()

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
        <DataTable
          data={users}
          addButtonProps={{
            onClick: openAddUserDialog,
            label: 'Add User',
          }}
          searchProps={{
            value: searchValue,
            onChange: (e) => {
              setSearchValue(e.target.value)
            },
            placeholder: 'Search by name',
          }}
          paginationProps={{
            page,
            limit,
            count,
            onNextPage: () => setPage(page + 1),
            onPreviousPage: () => setPage(page - 1),
            setLimit,
          }}
          className="bg-white"
        >
          {columns.map((column) => (
            <DataTable.Column
              key={column.key}
              header={column.label}
              render={(row: UserRecord) => {
                if (column.key === 'action') {
                  return (
                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={() => {
                          setUser(row)
                          openEditUserDialog()
                        }}
                      >
                        <FaPen /> Edit
                      </Button>
                      <Button
                        onClick={() => {
                          setUser(row)
                          openDeleteUserDialog()
                        }}
                        className="bg-red-500 hover:!bg-red-400"
                      >
                        <FaRegTrashAlt /> Delete
                      </Button>
                    </div>
                  )
                }

                return <span>{row[column.key]}</span>
              }}
            />
          ))}
        </DataTable>
      </div>

      <AddUserDialog
        opened={addUserDialogOpened}
        onClose={closeAddUserDialog}
        onAdd={(data) => add(data as Omit<UserRecord, 'id'>)}
      />

      {user && editUserDialogOpened && (
        <EditUserDialog
          opened={editUserDialogOpened}
          user={user}
          onClose={() => {
            closeEditUserDialog()
            setUser(null)
          }}
          onEdit={(data) => edit(data)}
        />
      )}

      {user && deleteUserDialogOpened && (
        <DeleteUserDialog
          opened={deleteUserDialogOpened}
          user={user}
          onClose={() => {
            closeDeleteUserDialog()
            setUser(null)
          }}
          onDelete={remove}
        />
      )}
    </>
  )
}

export default App
