import Enum from '@/lib/enums'

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
