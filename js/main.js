var popupWindow;

function showPopup(id) {
	var data = itemsData[id];

	if (data) {
		var popupTemplate = $.template(null, popupView);

		popupWindow = $.tmpl(popupTemplate, data).appendTo($('body'));
		bindPopup();
	}
}

function bindPopup() {
	$('.b-icon--close', popupWindow).click(function() {
		popupWindow.hide();
	});
}

function removePopup() {
	if (popupWindow) {
		popupWindow.remove();
	}
}

$(document).ready(function() {
	$('.b-feed li').click(function() {
		var itemData = this.onclick();

		if (itemData && itemData.item_id) {
			removePopup();
			showPopup(itemData.item_id);
		}
	});
});