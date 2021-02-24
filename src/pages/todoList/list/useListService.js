import { TodoService } from '../useTodoService'
import { useContext } from 'react'

function useListService() {
  const todoService = useContext(TodoService)
  return {
    ...todoService
  }
}

export default useListService
