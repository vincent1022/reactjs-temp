import React, { useMemo } from 'react'
import useListService from './useListService'
import style from './style.module.scss'

function List() {
	const { list, removeAtList } = useListService()
	return useMemo(
		() => (
			<ul className={style.root}>
				<div className="head">
					<div className="head__id">id</div>
					<div className="head__pic">流派</div>
					<div className="head__name">勇者名稱</div>
				</div>
				{list.map((e, i) => (
					<li className={'item'} key={e.id} onClick={() => removeAtList(i)}>
						<div className="item__id">{e.id}</div>
						<div className="item__pic">
							<img src={e.url} alt="" />
						</div>
						<div className="item__name">{e.name}</div>
					</li>
				))}
			</ul>
		),
		[list],
	)
}

export default List
