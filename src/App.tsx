import { FaPen } from 'react-icons/fa'
import DataTable from './components/datatable'
import AddUserDialog from './_components/dialogs/AddUserDialog'
import { UserRecord } from './types'
import { useColumns } from './utils'
import { useUserState } from './hooks/useUserState'
import Button from './components/button'
import { useDialogsState } from './hooks/useDialogsState'
import EditUserDialog from './_components/dialogs/EditUserDialog'

function App() {
  const {
    states: { addUserDialogOpened },
    actions: { openAddUserDialog, closeAddUserDialog },
  } = useDialogsState()
  const {
    states: { users, searchValue, page, limit, count, user },
    actions: { add, setSearchValue, setPage, setLimit, setUser },
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
                    <Button onClick={() => setUser(row)}>
                      <FaPen /> Edit
                    </Button>
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
      {user && (
        <EditUserDialog
          opened={!!user}
          user={user}
          onClose={() => setUser(null)}
          onEdit={(data) => console.log(data)}
        />
      )}
    </>
  )
}

export default App
