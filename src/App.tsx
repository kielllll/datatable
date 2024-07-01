import DataTable from './components/datatable'
import { UserRecord } from './types'
import { useColumns } from './utils'

function App() {
  const columns = useColumns()

  return (
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
          onClick: () => console.log('clicked'),
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
  )
}

export default App
