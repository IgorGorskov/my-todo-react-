import { useQuery } from "@tanstack/react-query"
import { queryClient } from "../api/queryClient"
import { getTodo } from '../api/Todo'

export function useGetList(){
  const createQuery = useQuery({
    queryFn:() => getTodo(), 
    queryKey: ["todo"]
  }, queryClient)

  return{
    data: createQuery.data,
    status: createQuery.status
  }

}