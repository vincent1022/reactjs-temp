import { TodoService } from '../useExampleService'
import { useState, useContext, useEffect } from 'react'

function useListService() {
	const todoService = useContext(TodoService)
	return {}
}

export default useListService
