import EExampleType from '@/enums/EExampleType'
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
				<option value={EExampleType.ALL}>
					{EExampleType.t(EExampleType.ALL)}
				</option>
			)}
			<option value={EExampleType.DOG}>
				{EExampleType.t(EExampleType.DOG)}
			</option>
			<option value={EExampleType.CAT}>
				{EExampleType.t(EExampleType.CAT)}
			</option>
		</select>
	)
}

export default TypeSelect
