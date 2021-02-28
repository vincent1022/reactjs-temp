import { useMemo } from 'react'
import useEditHandlerService from '@/pages/Example/List/EditHandler/useEditHandlerService'
import style from './style.module.scss'
import Modal from '@/pages/Example/components/Modal'
import TypeSelect from '@/pages/Example/components/TypeSelect/inedx'

function EditHandler({ item }) {
	const { onShowModal, visible, onCancel, onSubmit } = useEditHandlerService(
		item,
	)
	return useMemo(
		() => (
			<div className={style.root}>
				<button className={'edit-btn'} onClick={onShowModal}>
					編輯
				</button>
				<Modal
					title={'編輯勇者'}
					visible={visible}
					onCancel={onCancel}
					onSubmit={onSubmit}
				>
					<div className={style.modalContent}>
						<div className={'item'}>
							<div className="item__label">id</div>
							<div className="item__value">{item.id}</div>
						</div>
						<div className={'item'}>
							<div className="item__label">流派</div>
							<div className="item__value">
								<TypeSelect defaultValue={item.type} />
							</div>
						</div>
						<div className={'item'}>
							<div className="item__label">勇者名稱</div>
							<div className="item__value">
								<input type="text" defaultValue={item.name} />
							</div>
						</div>
					</div>
				</Modal>
			</div>
		),
		[item, visible],
	)
}

export default EditHandler
