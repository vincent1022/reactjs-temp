import { ExampleService } from '../useExampleService'
import { useContext, useRef, useCallback, useEffect } from 'react'
import exampleType from '../../../enums/exampleType'
import axios from 'axios'

function useControlService() {
	const {
		addList
	} = useContext(ExampleService)
	const state = useRef({
		id: 1,
		type: exampleType.dog,
		name: '',
	})
	const nameRef = useRef(null)
	const onChange = key => ev => (state.current[key] = ev.target.value)
	const onCreate = useCallback(async () => {
		const { id, type, name } = state.current

		if (typeof name === 'string' && name.trim() === '') {
			return alert('勇者名稱不得為空')
		}

		let url = ''

		if (type === exampleType.dog) {
			const res = await axios.get('https://dog.ceo/api/breeds/image/random')
			url = res.data.message
		} else if (exampleType.cat) {
			const res = await axios.get('https://api.thecatapi.com/v1/images/search')
			url = res.data[0].url
		} else {
			return alert('必須為狗派或貓派')
		}

		addList({
			id,
			url,
			name,
		})

		state.current.id++
		if (nameRef.current) {
			nameRef.current.value = ''
			state.current.name = ''
		}
	}, [state.current])
	const onKeyDown = ev => ev.key === 'Enter' && onCreate()
	useEffect(() => {
		nameRef.current.focus()
	}, [nameRef.current])
	return {
		onChange,
		onKeyDown,
		onCreate,
		nameRef,
	}
}

export default useControlService
