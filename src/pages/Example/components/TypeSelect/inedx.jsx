import exampleTypeEnum from '../../../../enums/exampleTypeEnum'

function TypeSelect({ all, onChange }) {
	return (
		<select name="type" onChange={ev => onChange && onChange(ev)}>
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
