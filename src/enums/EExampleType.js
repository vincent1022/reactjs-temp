import { Enum } from 'l8Lib'

const EExampleType = {
	ALL: 'all',
	DOG: 'dog',
	CAT: 'cat',
}
Enum.init(EExampleType, {
	ALL: '全部',
	DOG: '狗派',
	CAT: '貓派',
})

export default EExampleType
