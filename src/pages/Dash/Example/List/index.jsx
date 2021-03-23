import { useMemo } from 'react'
import style from './style.module.scss'
import { useListService } from '@/pages/Dash/Example/List/useListService'
import { TypeSelect } from '@/pages/Dash/Example/components/TypeSelect/inedx'
import { EExampleType } from '@/enums/EExampleType'
import { EditHandler } from '@/pages/Dash/Example/List/EditHandler'

const List = () => {
	const { filterBraves, onChangeType } = useListService()
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
				{filterBraves.map(e => (
					<li className={'item'} key={e.id}>
						<div className="item__id">{e.id}</div>
						<div className="item__pic">
							<img src={e.url} alt="" />
						</div>
						<div className="item__name">
							{e.type === EExampleType.CAT ? '😸' : '🐕'} {e.name}
						</div>
						<EditHandler item={e} />
					</li>
				))}
			</ul>
		),
		[filterBraves],
	)
}

export default List
