import {
  ChangeEventHandler,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from 'react'
import { TbPlus } from 'react-icons/tb'
import classNames from 'classnames'
import Row from './Row'
import Button from '../button'
import Input from '../input'

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
  searchProps: {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    placeholder: string
  }
  paginationProps: {
    page: number
    limit: number
    count: number
    onPreviousPage: MouseEventHandler<HTMLButtonElement>
    onNextPage: MouseEventHandler<HTMLButtonElement>
    setLimit: React.Dispatch<React.SetStateAction<number>>
  }
}

export default function DataTable<T>({
  className,
  children,
  data,
  addButtonProps,
  searchProps,
  paginationProps,
}: DataTableProps<T>): JSX.Element {
  const { page, limit, count, onNextPage, onPreviousPage } = paginationProps
  const lastPage = Math.floor(count / limit) || 1
  const isFirstPage = page === 1
  const isLastPage = page === lastPage

  return (
    <div
      className={classNames(
        'w-[80%] h-[75%] shadow-sm border rounded-md flex flex-col p-4 gap-4',
        className
      )}
    >
      <header className="mb-auto flex justify-between">
        <Input
          type="text"
          placeholder={searchProps.placeholder ?? 'Search'}
          value={searchProps.value}
          onChange={searchProps.onChange}
        />
        <Button onClick={addButtonProps.onClick}>
          <TbPlus />
          {addButtonProps.label}
        </Button>
      </header>
      <table className="w-full flex flex-col h-full gap-4">
        <thead className="w-full border-b-2">
          <Row>
            {children.map((child, index) => (
              <th key={index}>{child.props.header}</th>
            ))}
          </Row>
        </thead>
        <tbody className="w-full flex flex-col gap-2">
          {data.map((row, rowIndex) => (
            <Row key={rowIndex} className="[&:not(:last-child)]:border-b-2">
              {children.map((child, columnIndex) => (
                <td key={columnIndex} className="text-center">
                  {child.props.render(row)}
                </td>
              ))}
            </Row>
          ))}
        </tbody>
      </table>
      <footer className="mt-auto flex border-t-2 py-2 items-center">
        <div>{`${1 * page}-${page * paginationProps.limit} of ${count}`}</div>
        <div className="flex ml-auto gap-4 items-center">
          <div className="flex gap-2 items-center">
            <span>Rows per page:</span>
            <Input
              type="number"
              value={limit}
              onChange={(e) => {
                const newLimit = Number(e.target.value)
                if (newLimit < 0 || newLimit > 20) {
                  e.preventDefault()
                  return
                }

                paginationProps.setLimit(newLimit)
              }}
              className="w-10"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Button
              disabled={isFirstPage}
              className={classNames({
                disabled: isFirstPage,
              })}
              onClick={onNextPage}
            >
              {'<'}
            </Button>
            <span>{`${page}/${lastPage}`}</span>
            <Button
              disabled={isLastPage}
              className={classNames({
                disabled: isLastPage,
              })}
              onClick={onPreviousPage}
            >
              {'>'}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

DataTable.Column = <T extends unknown>(props: ColumnProps<T>): null => null
