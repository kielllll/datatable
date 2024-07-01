interface RowProps {
  children: JSX.Element[]
}
export default function Row({ children }: RowProps) {
  return <tr className="w-full flex justify-evenly">{children}</tr>
}
