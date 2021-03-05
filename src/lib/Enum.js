class Enum {
	/**
	 * Enum 方法賦予函數
	 * @param e [Object] enumMap
	 * @param translation [Object] 翻譯文檔
	 *
	 * 內置成員
	 * _t [Object] 翻譯檔
	 * _r [Object] enumMap key val reverse 物件
	 * t (enumMap 的 key 或 value) => 翻譯的文字
	 * key [String] 傳入值取出對應的 enum key
	 * add [void] 添加一個項目
	 * delete [void] 刪除一個項目
	 */
	static init(e, translation = {}) {
		e._t = translation
		e._r = Object.entries(e).reduce(
			(en, [name, val]) => ((en[val] = name), en),
			{},
		)
		e.t = val => e._r[val] ?? val
		e.key = val => e._r[val]
		e.add = (key, val, t) => {
			e[key] = val
			e[val] = key
			e._r[val] = key
			if (t != null) {
				e._t[key] = t
			}
		}
		e.delete = key => {
			const val = e[key]
			delete e[key]
			delete e._r[val]
		}
	}
}

export default Enum
