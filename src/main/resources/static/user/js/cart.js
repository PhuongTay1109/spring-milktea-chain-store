const listDesc = document.querySelectorAll('.cart-modify-quantity-desc');
const listAsc = document.querySelectorAll('.cart-modify-quantity-asc');
const listQuantity = document.querySelectorAll('.cart-quantity-input');
const checkboxAll = document.querySelector('.checkbox-select-all');
const listCheckbox = document.querySelectorAll('.checkbox-element');
const listPrice = document.querySelectorAll('.cart-price');
const sumPriceEle = document.querySelector('.cart-sum-price');
const btnSubmit = document.querySelector('.cart-btn-submit');
const listDeleteBtn = document.querySelectorAll('.cart-btn-delete');
const listCartSize = document.querySelectorAll('.cart-size');

listDesc.forEach(function(btnDesc) {
	btnDesc.addEventListener('click', function() {
		var quantityInput = btnDesc.nextElementSibling;
		var currentValue = parseInt(quantityInput.value);
		if (currentValue > 1) {
			currentValue -= 1;
		}
		quantityInput.value = currentValue;
		calculateSumPrice();
	})
})

listAsc.forEach(function(btnAsc) {
	btnAsc.addEventListener('click', function() {
		var quantityInput = btnAsc.previousElementSibling;
		var currentValue = parseInt(quantityInput.value);
		currentValue += 1;
		quantityInput.value = currentValue;
		calculateSumPrice();
	})
})

checkboxAll.addEventListener('click', function() {
	listCheckbox.forEach(function(item) {
		item.checked = checkboxAll.checked;
	})
})

listCheckbox.forEach(function(btn) {
	btn.addEventListener('click', function() {
		calculateSumPrice();
	})
})

function calculateSumPrice() {
	var sumPrice = 0;
	listCheckbox.forEach(function(item, index) {
		if(item.checked) {
			let val = listPrice[index].textContent;
			val = val.slice(0, -1);
			sumPrice += parseInt(val) * parseInt(listQuantity[index].value);
		}
	})
	sumPriceEle.textContent = sumPrice + 'đ';
}


btnSubmit.addEventListener("click", function() {
	const data = {};
	data.list = [];
	listCheckbox.forEach(function(item, index) {
		if(item.checked) {
			const obj = {};
			obj.idMilkTea = item.value;
			obj.quantity = listQuantity[index].value;
			let val = listPrice[index].textContent;
			val = val.slice(0, -1);
			obj.price = parseInt(val);
			obj.size = listCartSize[index].textContent;
			data.list.push(obj);
		}
	})
	data.totalProduct = 0;
	data.totalPrice = 0;
	data.list.forEach(function(item, index) {
		data.totalProduct += item.quantity;
		data.totalPrice += item.price * item.quantity;
	})
	var myAnchor = document.createElement('a');
	myAnchor.setAttribute('href', '/payment?data=' + JSON.stringify(data));
	myAnchor.click();
})

listDeleteBtn.forEach(function(item, index) {
	item.addEventListener('click', function(e) {
		document.querySelector('.modal-product-id').textContent = listDeleteBtn[index].getAttribute('data-id');
		document.querySelector('.modal-product-size').textContent = listCartSize[index].getAttribute('data-name');
	})
})
	
document.querySelector('.btn-yes').addEventListener('click', function() {
	var myAnchor = document.createElement('a');
	var idMilkTea = document.querySelector('.modal-product-id').textContent;
	var size = document.querySelector('.modal-product-size').textContent;
	idMilkTea = parseInt(idMilkTea);
	myAnchor.setAttribute('href', '/cart/delete/?idMilkTea='+idMilkTea+'&&size='+size);
	myAnchor.click();
})



