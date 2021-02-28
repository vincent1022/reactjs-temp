import exampleTypeEnum from '@/enums/exampleTypeEnum'
import { useEffect, useRef } from 'react'

function TypeSelect({ all, onChange, defaultValue }) {
	const selectRef = useRef(null)
	useEffect(() => {
		if (selectRef.current != null && defaultValue != null) {
			selectRef.current.value = defaultValue
		}
	}, [defaultValue, selectRef.current])
	return (
		<select
			ref={selectRef}
			name="type"
			onChange={ev => onChange && onChange(ev)}
		>
			{all && (
				<option value={exampleTypeEnum.all}>
					{exampleTypeEnum.t(exampleTypeEnum.all)}
				</option>
			)}
			<option value={exampleTypeEnum.dog}>
				{exampleTypeEnum.t(exampleTypeEnum.dog)}
			</option>
			<option value={exampleTypeEnum.cat}>
				{exampleTypeEnum.t(exampleTypeEnum.cat)}
			</option>
		</select>
	)
}

export default TypeSelect
