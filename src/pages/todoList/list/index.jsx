import React from 'react'
import useListService from './useListService'
import style from './style.module.scss'

function List() {
	const listService = useListService()
	return (
		<ul className={style.root}>
			{listService.list.map(e => (
				<li className={'item'} key={e}>
					hello - {e}
				</li>
			))}
		</ul>
	)
}

export default List
