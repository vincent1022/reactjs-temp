import Enum from '@/enums/index'

const exampleTypeEnum = {
	all: 'all',
	dog: 'dog',
	cat: 'cat',
}
Enum.init(exampleTypeEnum, {
	all: '全部',
	dog: '狗派',
	cat: '貓派',
})

export default exampleTypeEnum
