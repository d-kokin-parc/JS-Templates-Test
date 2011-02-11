function showPopup(id) {
	var data = itemsData[id];

	if (data) {
		var popupTemplate = $.template(null, popupView);

		$.tmpl(popupTemplate, data).appendTo($('body'));
	}
}

function bindPopup(popup) {
	$('.b-icon--close', popup).click(function() {
		popup.hide();
	});
}

$(document).ready(function() {
	$('.b-feed li').click(function() {
		var itemData = this.onclick();

		if (itemData && itemData.item_id) {
			showPopup(itemData.item_id);
		}
	});
});