//按下傳送按鈕後執行
function calculate() {
	const mags = String(input.value).split(',');
	// 計算倍率
	let teams_mag = (1 + mags[0] * 0.01) * (1 + mags[1] * 0.002) * (1 + mags[2] * 0.002) * (1 + mags[3] * 0.002) * (1 + mags[4] * 0.002);
	// 四捨五入 並取到小數第二位
	teams_mag = Math.round((teams_mag + Number.EPSILON) * 100) / 100;
	// 顯示倍率
	output.value = teams_mag;
	return teams_mag;
}