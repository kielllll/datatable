import { useState } from 'react'
import DataTable from './components/datatable'
import AddUserDialog from './_components/dialogs/AddUserDialog'
import { UserRecord } from './types'
import { useColumns } from './utils'

function App() {
  const [addUserDialogOpened, setAddUserDialogOpened] = useState(false)

  const columns = useColumns()

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
        <DataTable
          data={
            [
              {
                id: '123',
                name: 'Test',
                age: 24,
                gender: 'male',
                profession: 'developer',
              },
            ] as UserRecord[]
          }
          addButtonProps={{
            onClick: () => setAddUserDialogOpened(true),
            label: 'Add User',
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
      />
    </>
  )
}

export default App
