function main() {
	try {
		let value = '5/4'
		let result = value.split('/')
		let x = result[0]
		let y = result[1]

		// Bu yerda x va y sonlari togri kiritilganligini tekshiradi
		if (isNaN(x) || isNaN(y)) throw new Error('ValueError')
		if (y === 0) throw new Error('Y 0 bola olmaydi')
		if (x > y) throw new Error('X soni Y dan katta bola olmaydi')
		if (y > 4) throw new Error('X 4 dan katta bolmasligi kerak')
		if (x < 0) throw new Error('X 0 dan kichik bolmasligi kerak')

		//Misol
		const percentage = (result[0] / result[1]) * 100

		// Bu yerda Full , empty tekshiriladi agar son full yoki empty bo'lmasa error chiqadi
		if (percentage === 0) {
			console.log('Empty fuel')
		} else if (percentage > 99) {
			console.log('Full fuel')
		} else {
			console.log(percentage + '%')
		}
	} catch (error) {
		console.error(`${error.message}`)
	}
}

main()
