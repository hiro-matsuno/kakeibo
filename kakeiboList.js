/**
 * 
 */
$(function () {
	$('.listBody').empty();
	$('.listBody').eq(-1).append('<tr><td><label class="listHiduke"></label></td><td><label class="listHimoku"></label></td><td><label class="listTekiyou"></label></td><td><label class="listMoney"></label></td></tr>');
	kakeiboListShow();
});

function kakeiboListShow(){
	for (i = 0; i < localStorage.length; i++){
		//IDの取得
		ID = localStorage.key(i);
		//LocalStorageからデータの取得
		data = JSON.parse(localStorage.getItem(ID));
		//データの取得
		hiduke = data['hiduke'];
		kamoku = data['kamoku'];
		tekiyou = data['tekiyou'];
		money = data['money'];
//		alert('money='+money);
		if(money == "" || money == null || money == 'undefined' || money == 0){
			money = "";
		}else if(money != "" || money != null || money != 'undefined' || money != 0){
			money = addFigure(data['money']);
		}
		//データの表示
		$('.listBody tr .listHiduke').eq(-1).text(hiduke);
		$('.listBody tr .listHimoku').eq(-1).text(kamoku);
		$('.listBody tr .listTekiyou').eq(-1).text(tekiyou);
		if(money != "" || money != null || money != 'undefined' || money != 0){
			$('.listBody tr .listMoney').eq(-1).text(money);
		}else if(money == "" || money == null || money == 'undefined' || money == 0){
			$('.listBody tr .listMoney').eq(-1).text("");
		}
		//行の追加
		$('.listBody').eq(-1).append('<tr><td><label class="listHiduke"></label></td><td><label class="listHimoku"></label></td><td><label class="listTekiyou"></label></td><td><label class="listMoney"></label></td></tr>');
	}
}

function addFigure(str) {
	var num = new String(str).replace(/,/g, "");
	while(num != (num = num.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
		return num;
	}