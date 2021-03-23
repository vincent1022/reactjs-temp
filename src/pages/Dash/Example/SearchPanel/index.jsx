import { useMemo } from 'react'
import style from './style.module.scss'
import { useSearchPanelService } from '@/pages/Dash/Example/SearchPanel/useSearchPanelService'
import { TypeSelect } from '@/pages/Dash/Example/components/TypeSelect/inedx'
export const SearchPanel = () => {
	const { onChange, onKeyDown, onCreate, nameInput } = useSearchPanelService()
	return useMemo(
		() => (
			<div className={style.root}>
				<TypeSelect onChange={onChange('type')} />
				<input
					ref={nameInput}
					type="text"
					placeholder="請輸入勇者名稱(ctrl+q)"
					onChange={onChange('name')}
					onKeyDown={onKeyDown}
				/>
				<button onClick={onCreate}>創建</button>
			</div>
		),
		[],
	)
}
