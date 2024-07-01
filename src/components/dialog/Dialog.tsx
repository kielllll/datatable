import { ReactNode } from 'react'
import { Dialog as HDialog, DialogPanel, DialogTitle } from '@headlessui/react'
import classNames from 'classnames'

interface DialogProps {
  children: ReactNode
  opened: boolean
  onClose: () => void
  title: ReactNode
  className?: string
}

export default function Dialog({
  children,
  opened,
  onClose,
  title,
  className,
}: DialogProps): JSX.Element {
  return (
    <HDialog open={opened} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          className={classNames(
            'max-w-lg space-y-4 border bg-white p-8 rounded-md',
            className
          )}
        >
          <DialogTitle className="font-bold">{title}</DialogTitle>
          {children}
        </DialogPanel>
      </div>
    </HDialog>
  )
}
