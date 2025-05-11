import { useQuery } from '@tanstack/react-query'
import apiRequests from '../services/axios/configs/configs'

export default function useFetch(url:string) {
    const {data,isLoading,refetch}=useQuery({
        queryKey:[url],
        queryFn:async()=>{
            const res=await apiRequests.get(url)
            return res.data
        },
        onSuccess(data) {
            console.log("succeed:",data);
        },
    })
  return [data,isLoading,refetch]
}
