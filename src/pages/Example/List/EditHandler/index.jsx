import { useMemo } from 'react'
import useEditHandlerService from '@/pages/Example/List/EditHandler/useEditHandlerService'
import style from './style.module.scss'
import Modal from '@/pages/Example/components/Modal'
import TypeSelect from '@/pages/Example/components/TypeSelect/inedx'

const EditHandler = ({ item }) => {
	const {
		nameRef,
		visibleEdit,
		editModalFun,
		onSubmitEditModal,
		visibleDel,
		delModalFun,
		onSubmitDelModal,
		onChange,
	} = useEditHandlerService(item)
	return useMemo(
		() => (
			<div className={style.root}>
				<button className={'edit-btn'} onClick={editModalFun.toggle}>
					編輯🔨
				</button>
				<button className={'del-btn'} onClick={delModalFun.toggle}>
					刪除❌
				</button>
				<Modal
					title={`確定要刪除勇者 ${item.name} 嗎？`}
					visible={visibleDel}
					onCancel={delModalFun.setFalse}
					onSubmit={onSubmitDelModal}
					noContent
				/>
				<Modal
					title={'編輯勇者'}
					visible={visibleEdit}
					onCancel={editModalFun.setFalse}
					onSubmit={onSubmitEditModal}
				>
					<div className={style.modalContent}>
						<div className={'item'}>
							<div className="item__label">id</div>
							<div className="item__value">{item.id}</div>
						</div>
						<div className={'item'}>
							<div className="item__label">流派</div>
							<div className="item__value">
								<TypeSelect
									defaultValue={item.type}
									onChange={ev => onChange('type', ev)}
								/>
							</div>
						</div>
						<div className={'item'}>
							<div className="item__label">勇者名稱</div>
							<div className="item__value">
								<input
									ref={nameRef}
									type="text"
									defaultValue={item.name}
									onChange={ev => onChange('name', ev)}
								/>
							</div>
						</div>
					</div>
				</Modal>
			</div>
		),
		[item, visibleEdit, visibleDel],
	)
}

export default EditHandler
