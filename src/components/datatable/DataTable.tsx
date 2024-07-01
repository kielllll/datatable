import { MouseEventHandler, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'
import Row from './Row'
import Button from '../button'

interface ColumnProps<T> {
  render: (row: T) => React.ReactNode
  header: string
}

interface DataTableProps<T> {
  className?: string
  children: ReactElement<ColumnProps<T>>[]
  data: T[]
  addButtonProps: {
    onClick: MouseEventHandler<HTMLButtonElement>
    label: ReactNode
  }
}

export default function DataTable<T>({
  className,
  children,
  data,
  addButtonProps,
}: DataTableProps<T>): JSX.Element {
  return (
    <div
      className={classNames(
        'w-[80%] h-[75%] shadow-sm border rounded-md flex flex-col p-4 gap-4',
        className
      )}
    >
      <header className="mb-auto flex justify-between">
        <div>Search</div>
        <Button onClick={addButtonProps.onClick}>{addButtonProps.label}</Button>
      </header>
      <table className="w-full flex flex-col h-full">
        <thead className="w-full">
          <Row>
            {children.map((child, index) => (
              <th key={index}>{child.props.header}</th>
            ))}
          </Row>
        </thead>
        <tbody className="w-full">
          {data.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {children.map((child, columnIndex) => (
                <td key={columnIndex}>{child.props.render(row)}</td>
              ))}
            </Row>
          ))}
        </tbody>
      </table>
      <footer className="mt-auto flex">
        <div>1-10 of 97</div>
        <div className="flex ml-auto gap-4">
          <div>Rows per page: 10</div>
          <div>Pagination</div>
        </div>
      </footer>
    </div>
  )
}

DataTable.Column = <T extends unknown>(props: ColumnProps<T>): null => null
