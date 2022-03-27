import { useQuery } from 'react-query'
import api from '@/lib/axiosStore'
import { SplitType } from 'types/split'

const fetchSplits = async () => {
  const { data } = await api.get('/split')
  return data
}

const useSplits = () => {
  return useQuery<SplitType[], Error>('splits', fetchSplits)
}

export { fetchSplits, useSplits }
