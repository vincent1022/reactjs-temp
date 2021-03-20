import { useMemo } from 'react'
import style from './style.module.scss'
import useSearchPanelService from '@/pages/Example/SearchPanel/useSearchPanelService'
import TypeSelect from '@/pages/Example/components/TypeSelect/inedx'
const SearchPanel = () => {
	const { onChange, onKeyDown, onCreate, nameRef } = useSearchPanelService()
	return useMemo(
		() => (
			<div className={style.root}>
				<TypeSelect onChange={onChange('type')} />
				<input
					ref={nameRef}
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

export default SearchPanel
