import classNames from 'classnames'

interface RowProps {
  children: JSX.Element[]
  className?: string
}

export default function Row({ children, className }: RowProps) {
  return (
    <tr
      className={classNames(
        'w-full grid grid-flow-col auto-cols-fr',
        className
      )}
    >
      {children}
    </tr>
  )
}
