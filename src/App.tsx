import { useState } from 'react'
import DataTable from './components/datatable'
import { UserRecord } from './types'
import { useColumns } from './utils'
import Dialog from './components/dialog/Dialog'

function App() {
  const [opened, setOpened] = useState(false)

  const columns = useColumns()

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
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
            onClick: () => setOpened(true),
            label: 'Add User',
          }}
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
      <Dialog opened={opened} onClose={() => setOpened(false)} title="Add User">
        {'Hello World'}
      </Dialog>
    </>
  )
}

export default App
