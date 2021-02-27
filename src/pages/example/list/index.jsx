import React, { useMemo } from 'react'
import useListService from './useListService'
import style from './style.module.scss'

function List() {
	const listService = useListService()
	return useMemo(
		() => (
			<ul className={style.root}>
				<div className="head">
					<div className="head__pic">流派</div>
					<div className="head__name">待辦名稱</div>
				</div>
				<li className={'item'}>
					<div className="item__pic">
						<img src="asd" alt=""/>
					</div>
					<div className="item__name">家裡奧</div>
				</li>
			</ul>
		),
		[],
	)
}

export default List
