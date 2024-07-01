export type Column<T> = {
  key: keyof T
  label: string
}

export type UserRecord = {
  id: string
  name: string
  age: string
  gender: 'male' | 'female' | 'prefer not to say'
  profession?: string
}
