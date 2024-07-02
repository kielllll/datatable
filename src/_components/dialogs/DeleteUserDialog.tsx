import Button from '../../components/button'
import Dialog from '../../components/dialog'
import { UserRecord } from '../../types'

interface DeleteUserDialogProps {
  opened: boolean
  onClose: () => void
  onDelete: (id: string) => void
  user: UserRecord
}

export default function DeleteUserDialog(props: DeleteUserDialogProps) {
  return (
    <Dialog
      opened={props.opened}
      onClose={props.onClose}
      title="Delete User"
      className="bg-slate-200"
    >
      <div>
        Are you sure you want to delete record of{' '}
        <span className="text-orange-500">{props.user.name}</span>?
      </div>
      <div className="flex grow w-full gap-4">
        <Button className="flex-1" onClick={props.onClose}>
          Cancel
        </Button>
        <Button
          className="flex-1 bg-red-500 hover:!bg-red-400"
          onClick={() => {
            props.onDelete(props.user.id)
            props.onClose()
          }}
        >
          Delete
        </Button>
      </div>
    </Dialog>
  )
}
