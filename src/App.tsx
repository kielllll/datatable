import { useState } from 'react'
import DataTable from './components/datatable'
import AddUserDialog from './_components/dialogs/AddUserDialog'
import { UserRecord } from './types'
import { useColumns } from './utils'
import { useUserState } from './hooks/useUserState'

function App() {
  const [addUserDialogOpened, setAddUserDialogOpened] = useState(false)
  const {
    states: { users, searchValue },
    actions: { add, setSearchValue },
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
          className="bg-white"
        >
          {columns.map((column) => (
            <DataTable.Column
              key={column.key}
              header={column.label}
              render={(row: UserRecord) => <span>{row[column.key]}</span>}
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
