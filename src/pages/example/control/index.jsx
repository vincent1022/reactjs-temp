import React, { useMemo } from 'react'
import useControlService from './useControlService'
import style from './style.module.scss'
import exampleType from '../../../enums/exampleType'
function Control() {
	const { onChange, onKeyDown, onCreate, nameRef } = useControlService()
	return useMemo(
		() => (
			<div className={style.root}>
				<select name="type" onChange={onChange('type')}>
					<option value={exampleType.dog}>狗派</option>
					<option value={exampleType.cat}>貓派</option>
				</select>
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
