var cart = {
	firstProduct: {
		firstProductName: 'Пижама',
		firstProductPrize: 700,
		firstProductCount: 1,
	},
	secondProduct: {
		secondProductName: 'Кепка',
		secondProductPrize: 300,
		secondProductCount: 2,
	},
	thirdProduct: {
		thirdProductName: 'Труcы',
		thirdProductPrize: 20,
		thirdProductCount: 10,
	},
	getTotal: function(cart) { 
	var total = 0;
	for(var i = 0; i < this.cart.length; i++) {
		total = total + this.cart[i][1] * this.cart[i][2];
	}
	return total;
}