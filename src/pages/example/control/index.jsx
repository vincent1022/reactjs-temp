import React, { useMemo } from 'react'
import useControlService from './useControlService'
import style from './style.module.scss'
function Control() {
	const controlService = useControlService()
	return useMemo(
		() => (
			<div className={style.root}>
        <select name="like" onChange={ev => console.log(ev.target.value)}>
          <option value="dog">狗派</option>
					<option value="cat">貓派</option>
        </select>
        <input type="text" placeholder="請輸入勇者名稱" />
        <button>創建</button>
			</div>
		),
		[],
	)
}

export default Control
