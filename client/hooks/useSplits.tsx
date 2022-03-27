import { useQuery } from 'react-query'
import api from '@/lib/axiosStore'
import { SplitType } from 'types/split'

const fetchSplits = async (id: string) => {
  const { data } = await api.get(`/split/creator/${id}`)
  return data
}

const useSplits = (id: string) => {
  return useQuery<SplitType[], Error>('split', () => fetchSplits(id))
}

export { fetchSplits, useSplits }
