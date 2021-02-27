import { TodoService } from '../useExampleService'
import { useContext } from 'react'

function useControlService() {
  const todoService = useContext(TodoService)
  return {}
}

export default useControlService
