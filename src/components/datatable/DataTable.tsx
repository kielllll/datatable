import classNames from 'classnames'
import { Children, ReactElement, ReactNode, cloneElement } from 'react'

interface DataTableProps<T> {
  className?: string
  children: ReactNode
  data: T[]
}

export default function DataTable<T>({
  className,
  children,
  data,
}: DataTableProps<T>): JSX.Element {
  return (
    <div
      className={classNames(
        'w-[80%] h-[50%] shadow-sm border rounded-md flex flex-col',
        className
      )}
    >
      <header className="mb-auto">search and add</header>
      <table className="flex-1">
        <thead>
          <tr>
            {Children.map(children, (child) => (
              <th>{(child as ReactElement).props.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Children.map(children, (child) =>
                cloneElement(child as React.ReactElement, { row })
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="mt-auto">row length + pagination</footer>
    </div>
  )
}
