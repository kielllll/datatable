import DataTable, { Column } from './components/datatable'
import { UserRecord } from './types'
import { useColumns } from './utils'

function App() {
  const columns = useColumns()

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <DataTable data={[] as UserRecord[]}>
        {columns.map((column) => (
          <Column
            key={column.key}
            header={column.label}
            render={(row: UserRecord) => <span>{row.id}</span>}
          />
        ))}
      </DataTable>
    </div>
  )
}

export default App
