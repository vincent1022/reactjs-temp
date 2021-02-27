import React from 'react'
import exampleType from '../../../../enums/exampleType'

function TypeSelect({ onChange }) {
	return (
		<select name="type" onChange={ev => onChange && onChange(ev)}>
			<option value={exampleType.dog}>狗派</option>
      <option value={exampleType.cat}>貓派</option>
		</select>
	)
}

export default TypeSelect
