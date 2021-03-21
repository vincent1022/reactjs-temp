import { useMemo } from 'react'
import ReactDOM from 'react-dom'
import style from './style.module.scss'
import { ClassName } from 'jsl'
import { useKeyPress } from 'ahooks'

const portalDom = document.createElement('div')
document.body.append(portalDom)

export const Modal = ({
	visible,
	title,
	onCancel,
	onSubmit,
	children,
	noContent = false,
}) => {
	useKeyPress('Escape', () => visible && onCancel && onCancel())
	useKeyPress('Enter', () => visible && onSubmit && onSubmit())
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
		portalDom,
	)
}
