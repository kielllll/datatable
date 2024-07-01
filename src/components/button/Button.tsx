import { type ButtonProps, Button as HButton } from '@headlessui/react'
import classNames from 'classnames'

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <HButton
      className={classNames(
        'inline-flex items-center justify-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white',
        className
      )}
      onClick={onClick}
    >
      {children}
    </HButton>
  )
}
