import { useState, createContext } from 'react'

export const TodoService = createContext(null)

function useTodoService() {
  const [list, setList] = useState([1])
  return {
    list,
    setList,
  }
}

export default useTodoService
