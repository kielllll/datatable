import { useState } from 'react'
import DataTable from './components/datatable'
import AddUserDialog from './_components/dialogs/AddUserDialog'
import { UserRecord } from './types'
import { useColumns } from './utils'
import { useUserState } from './hooks/useUserState'
import Button from './components/button'
import { FaPen } from 'react-icons/fa'

function App() {
  const [addUserDialogOpened, setAddUserDialogOpened] = useState(false)
  const {
    states: { users, searchValue, page, limit, count },
    actions: { add, setSearchValue, setPage, setLimit },
  } = useUserState()

  const columns = useColumns()

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
        <DataTable
          data={users}
          addButtonProps={{
            onClick: () => setAddUserDialogOpened(true),
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
                    <Button>
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
        onClose={() => setAddUserDialogOpened(false)}
        onAdd={(data) => add(data as Omit<UserRecord, 'id'>)}
      />
    </>
  )
}

export default App
