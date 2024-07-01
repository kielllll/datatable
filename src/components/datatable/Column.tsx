import React from 'react'

interface ColumnProps<T> {
  row?: T
  render: (row: T) => React.ReactNode
  header: string
}

export default function Column<T>({
  row,
  render,
}: ColumnProps<T>): JSX.Element {
  return <>{row && render(row)}</>
}
