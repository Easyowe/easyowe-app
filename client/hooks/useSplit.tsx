import { useQuery } from 'react-query'
import api from '@/lib/axiosStore'
import { SplitType } from 'types/split'

const fetchSplit = async (id: string) => {
  const { data } = await api.get(`/split/${id}`)
  return data
}

const useSplit = (id: string) => {
  return useQuery<SplitType, Error>('split', () => fetchSplit(id))
}

export { fetchSplit, useSplit }
