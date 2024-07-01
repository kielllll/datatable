interface RowProps {
  children: JSX.Element[]
}
export default function Row({ children }: RowProps) {
  return <tr className="w-full grid grid-flow-col auto-cols-fr">{children}</tr>
}
