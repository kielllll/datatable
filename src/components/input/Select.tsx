import {
  Field,
  Select as HSelect,
  Label,
  type SelectProps,
} from '@headlessui/react'
import classNames from 'classnames'

export default function Select(props: {
  options: {
    label: string
    value: any
  }[]
  className?: string
  error?: string
  isRequired?: boolean
  label: string
  selectProps: SelectProps
}): JSX.Element {
  return (
    <Field className={classNames('flex flex-col', props.className)}>
      <Label className="text-sm/6 font-medium text-black">
        {props.label}{' '}
        {props?.isRequired && <span className="text-red-500">*</span>}
      </Label>
      <HSelect
        {...props.selectProps}
        className={classNames(
          'border border-slate-300 rounded-md p-2 outline-slate-400',
          props.selectProps.className
        )}
      >
        {props.options?.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </HSelect>
      {props?.error && <p className="text-sm/6 text-red-500">{props.error}</p>}
    </Field>
  )
}
