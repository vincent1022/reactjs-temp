import React, { useMemo } from 'react'
import useListService from './useListService'
import style from './style.module.scss'
import exampleType from '../../../enums/exampleType'
import TypeSelect from '../components/TypeSelect/inedx'

function List() {
	const { filterList, removeAtList, onChangeType } = useListService()
	return useMemo(
		() => (
			<ul className={style.root}>
				<div className="head">
					<div className="head__id">id</div>
					<div className="head__pic">
						流派 <TypeSelect onChange={onChangeType} all />
					</div>
					<div className="head__name">勇者名稱</div>
				</div>
				{filterList.map((e, i) => (
					<li className={'item'} key={e.id} onClick={() => removeAtList(i)}>
						<div className="item__id">{e.id}</div>
						<div className="item__pic">
							<img src={e.url} alt="" />
						</div>
						<div className="item__name">
							{e.type === exampleType.cat ? '😸' : '🐕'} {e.name}
						</div>
					</li>
				))}
			</ul>
		),
		[filterList],
	)
}

export default List
