import { useQuery } from 'react-query'
import api from '@/lib/axiosStore'
import { IUser } from 'types/user'

const fetchUser = async (id: string) => {
  const { data } = await api.get(`/users/${id}`)
  return data
}

const useUser = (id: string) => {
  return useQuery<IUser, Error>('user', () => fetchUser(id))
}
export { fetchUser, useUser }
