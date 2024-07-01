import { useQuery } from '@tanstack/react-query'

export function useGetRandomUsers() {
  return useQuery({
    queryKey: ['random_users'],
    queryFn: async () => {
      try {
        const res = await fetch('https://randomuser.me/api/?page=0&results=10')

        if (!res.ok) throw new Error('Something went wrong')

        return res.json()
      } catch (error) {
        console.error('Error: ', error)
      }
    },
  })
}
