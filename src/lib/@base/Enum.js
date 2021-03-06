/**
 * Enum
 * @member translation [Object] 翻譯文檔
 * @member reverseEnum [Object] 反轉的 enum
 */
class Enum {
	constructor(_enum, translation) {
		this.translation = translation
		this.reverseEnum = Object.entries(_enum).reduce(
			(en, [name, val]) => ((en[val] = name), en),
			{},
		)
	}
	/**
	 * 方法賦予函數
	 * @param _enum [Object] enum
	 * @param translation [Object] 翻譯文檔
	 *
	 * t (value: any): 翻譯的文字
	 * key (value: any): [String] 傳入值取出對應的 enum key
	 * add (key: string, value: any, t?: string): [void] 添加一個項目
	 * delete (key: string): [void] 刪除一個項目
	 */
	static init(_enum, translation = {}) {
		const obj = new Enum(_enum, translation)

		_enum.t = val => obj.translation[obj.reverseEnum[val]] ?? val
		_enum.key = val => obj.reverseEnum[val]
		_enum.add = (key, val, t) => {
			_enum[key] = val
			_enum[val] = key
			obj.reverseEnum[val] = key
			if (t != null) {
				obj.translation[key] = t
			}
		}
		_enum.delete = key => {
			const val = _enum[key]
			delete _enum[key]
			delete obj.reverseEnum[val]
		}
	}
}

export default Enum
