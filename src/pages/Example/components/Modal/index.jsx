import ReactDOM from 'react-dom'
import { useMemo } from 'react'
import style from './style.module.scss'
import { ClassName } from '@/lib'

function Modal({
	visible,
	title,
	onCancel,
	onSubmit,
	children,
	noContent = false,
}) {
	return ReactDOM.createPortal(
		useMemo(
			() =>
				visible ? (
					<div className={style.root}>
						<div
							className={ClassName.create(
								{
									'content--none': noContent,
								},
								'content',
							)}
						>
							<div className="content__close" onClick={onCancel}>
								X
							</div>
							<div className="content__title">{title}</div>
							{!noContent ? (
								<div className="content__children">{children}</div>
							) : null}
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
