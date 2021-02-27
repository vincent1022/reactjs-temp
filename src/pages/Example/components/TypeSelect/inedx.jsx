import React from 'react'
import exampleType from '../../../../enums/exampleType'

function TypeSelect({ all, onChange }) {
	return (
		<select name="type" onChange={ev => onChange && onChange(ev)}>
			{ all && <option value={exampleType.all}>全部</option>}
			<option value={exampleType.dog}>狗派</option>
      <option value={exampleType.cat}>貓派</option>
		</select>
	)
}

export default TypeSelect
