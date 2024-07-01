import React from 'react'
import { Input as HInput, type InputProps } from '@headlessui/react'
import classNames from 'classnames'

const Input = React.forwardRef((props: InputProps, ref): JSX.Element => {
  return (
    <HInput
      {...props}
      ref={ref as React.Ref<HTMLInputElement>}
      className={classNames(
        'border border-slate-300 rounded-md p-2 outline-slate-400',
        props.className
      )}
    />
  )
})

export default Input
