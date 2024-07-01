import { ReactNode } from 'react'
import { Dialog as HDialog, DialogPanel, DialogTitle } from '@headlessui/react'

interface DialogProps {
  children: ReactNode
  opened: boolean
  onClose: () => void
  title: string
}

export default function Dialog({
  children,
  opened,
  onClose,
  title,
}: DialogProps): JSX.Element {
  return (
    <HDialog open={opened} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-md">
          <DialogTitle className="font-bold">{title}</DialogTitle>
          {children}
        </DialogPanel>
      </div>
    </HDialog>
  )
}
