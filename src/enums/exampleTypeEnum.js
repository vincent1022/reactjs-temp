import { Enums } from '@/lib'

const exampleTypeEnum = {
	all: 'all',
	dog: 'dog',
	cat: 'cat',
}
Enums.init(exampleTypeEnum, {
	all: '全部',
	dog: '狗派',
	cat: '貓派',
})

export default exampleTypeEnum
