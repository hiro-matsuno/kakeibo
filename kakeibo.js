/**
 * 
 */
$(function () {
	thisYMDHM = thisDateHM();
	thisDate = nowDateYMD();
//	alert('thisDate='+thisYMDHM);
	$('#hiduke').text(thisDate);
	$('#inputYMDHM').val(thisYMDHM);
	$('#kamoku').val("1");
	$('#tekiyou').val("");
	$('#money').css('text-align','right');
	$('#money').val("0");
});

//現在日付の取得
function nowDateYMD(){
//	日付取得
	nowDate = new Date();
	nowYear = nowDate.getFullYear();
	nowMonth = nowDate.getMonth() + 1;
	nowDate = nowDate.getDate();
	nowYMD = nowYear + "年" + nowMonth + "月" + nowDate + "日";
	return nowYMD;
}

//現在日付と時刻の取得
function thisDateHM(){
//	日付取得
	nowDate = new Date();
	nowYear = nowDate.getFullYear();
	nowMonth = nowDate.getMonth() + 1;
	if(nowMonth >= "1" && nowMonth <= "9"){
		nowMonth = "0" + nowMonth;
	}
	nowDate = nowDate.getDate();
	if(nowDate >= "1" && nowDate <= "9"){
		nowDate = "0" + nowDate;
	}
//	時間取得
	nowHM = new Date();
	nowHour = nowHM.getHours();
	if(nowHour >= '0' && nowHour <= '9'){
		nowHour = "0" + nowHour;
	}
	nowTime = nowHM.getMinutes();
	if(nowTime >= "0" && nowTime <= "9"){
		nowTime = "0" + nowTime;
	}
	nowYMD = nowYear + nowMonth + nowDate + nowHour + nowTime;
	return nowYMD;
}

//データの追加
function add_new(){
	//データとIDの取得
	ID = $('#inputYMDHM').val();
	hiduke = $('#hiduke').text();
	kamoku = $('#kamoku').val();
	if(kamoku == '1'){
		kamokuName = '食費';
	}else if(kamoku == '2'){
		kamokuName = '交通費';
	}else if(kamoku == '3'){
		kamokuName = '交遊費';
	}else if(kamoku == '4'){
		kamokuName = '光熱費';
	}else if(kamoku == '5'){
		kamokuName = 'その他';
	}
	tekiyou = $('#tekiyou').val();
	money = $('#money').val();
	
	//データの生成
	data = {'hiduke':hiduke,'kamoku':kamokuName,'tekiyou':tekiyou,'money':money};
	
	//localStorageに登録
	localStorage.setItem(ID,JSON.stringify(data));
}


//入力内容のクリア
function content_clear(){
	$('#kamoku').val("1");
	$('#tekiyou').val("");
	$('#money').css('text-align','right');
	$('#money').val("0");
}