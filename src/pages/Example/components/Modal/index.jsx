import ReactDOM from 'react-dom'
import { useMemo } from 'react'
import style from './style.module.scss'

function Modal({ visible, title, onCancel, onSubmit, children }) {
	return ReactDOM.createPortal(
		useMemo(
			() =>
				visible ? (
					<div className={style.root}>
						<div className="content">
							<div className="content__close" onClick={onCancel}>
								X
							</div>
							<div className="content__title">{title}</div>
							<div className="content__children">{children}</div>
							<div className="content__footer">
								<button
									className={'content__footer__cancel'}
									onClick={onCancel}
								>
									取消
								</button>
								<button onClick={onSubmit}>送出</button>
							</div>
						</div>
					</div>
				) : null,
			[visible, children],
		),
		document.getElementById('example-modal'),
	)
}

export default Modal
