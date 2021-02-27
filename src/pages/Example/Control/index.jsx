import React, { useMemo } from 'react'
import useControlService from './useControlService'
import style from './style.module.scss'
import TypeSelect from '../components/TypeSelect/inedx'
function Control() {
	const { onChange, onKeyDown, onCreate, nameRef } = useControlService()
	return useMemo(
		() => (
			<div className={style.root}>
				<TypeSelect onChange={onChange('type')} />
				<input
					ref={nameRef}
					type="text"
					placeholder="請輸入勇者名稱"
					onChange={onChange('name')}
					onKeyDown={onKeyDown}
				/>
				<button onClick={onCreate}>創建</button>
			</div>
		),
		[],
	)
}

export default Control
