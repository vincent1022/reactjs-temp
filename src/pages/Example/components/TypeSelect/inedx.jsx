import { EExampleType } from '@/enums/EExampleType'
import { useTypeSelectService } from '@/pages/Example/components/TypeSelect/useTypeSelectService'

export const TypeSelect = props => {
	const { selectRef, onChange, all } = useTypeSelectService(props)
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
