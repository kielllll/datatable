import React from 'react'
import { Select as HSelect, type SelectProps } from '@headlessui/react'
import classNames from 'classnames'

const Select = React.forwardRef((props: SelectProps, ref): JSX.Element => {
  return (
    <HSelect
      {...props}
      ref={ref as React.Ref<HTMLSelectElement>}
      className={classNames(
        'border border-slate-300 rounded-md p-2 outline-slate-400',
        props.className
      )}
    >
      {props.children}
    </HSelect>
  )
})

export default Select
