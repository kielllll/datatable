import DataTable from './components/datatable'
import { useGetRandomUsers } from './hooks/useGetRandomUsers'

function App() {
  const { data } = useGetRandomUsers()

  console.log(data)

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1 className="text-slate-400">Hello There</h1>
      <DataTable />
    </div>
  )
}

export default App
