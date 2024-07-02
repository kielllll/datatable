import { Field, Input, Label, type InputProps } from '@headlessui/react'
import classNames from 'classnames'

export default function TextInput(props: {
  className?: string
  error?: string
  isRequired?: boolean
  label: string
  inputProps: InputProps
}): JSX.Element {
  return (
    <Field className={classNames('flex flex-col', props.className)}>
      <Label className="text-sm/6 font-medium text-black">
        {props.label}{' '}
        {props?.isRequired && <span className="text-red-500">*</span>}
      </Label>
      <Input
        {...props.inputProps}
        className={classNames(
          'border border-slate-300 rounded-md p-2 outline-slate-400',
          props.inputProps.className
        )}
      />
      {props?.error && <p className="text-sm/6 text-red-500">{props.error}</p>}
    </Field>
  )
}
