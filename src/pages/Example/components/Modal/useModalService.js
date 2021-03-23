import { useKeyPress } from 'ahooks'

export const useModalService = ({ visible, onCancel, onSubmit }) => {
	useKeyPress('Escape', () => visible && onCancel && onCancel())
	useKeyPress('Enter', () => visible && onSubmit && onSubmit())
}
