let version = ['2.1.0'];
const AVC = ""; //파일 위치
if (confirm("이 코드를 실행하면 작품이 저장 전오로 돌아갑니다. 하지만 블럭 불러오기 전 한번더 저장을 하면 블럭이 사라져서 버장버튼을 누르지 말아야 합니다. 코드실행을 취소하나요?")) {
	alert("취소함");
	throw new Error("취소함");
}
/* 작품 불러오는 코드 => YGH */
/* 작품 버전 구하는 코드 => AEV */
const io = version.indexOf(AEV);
let R = []; //프로미스 전용
if (io === -1) {
	alert("작품 버전이 이상함");
	throw new Error("작품 버전이 이상함");
}
for (let i = io + 1; i < version.length; i++) { //가장 최신까지 포함하여 불러오기
	R[R.length] = fetch(AVC + "/block/" + version[i] + ".js").then((resk) => { if (resk.ok) { return resk.text(); } else { return new Promise((resolve) => { resolve(false); }); }});
}
if (R.length === 0) { //아무것도 없는상황 처리
	R[0] = fetch(AVC + "/block/" + version[i] + ".js").then((resk) => { if (resk.ok) { return resk.text(); } else { return new Promise((resolve) => { resolve(false); }); }});
}
Promise.all(R).then((r) => { //모든것이 끝나면 문자열로 이루어진 r반환
	if(r.indexOf(false) !== -1) { //r중에 false가 하나라도 있으면 실행
		alert('오류남');
		throw new Error('오류남');
	}
	for (let tg in r) { //tg는 숫자
		if (tg === r.length - 1) { //가장 최신 버전을 처리하고 있다면
			const hr = new Function(r[tg])(); //hr=가장 최신버전
			if (io !== version.length - 1) {
				hr.f(YGH); //YGH=작품
			}  //아래 있는 코드는 cn.html을 resu0에 넣음
			fetch(AVC + '/html/cn.html').then((res) => { if (res.ok) { return res.text(); } else { return new Promise((resolve) => { resolve(false); }); }}).then(resu0 => {
				if (resu0 === false) {
					alert('오류남');
					throw new Error('오류남');
				}
				try {
					const ulisu0 = document.createElement('iframe');
					ulisu0.id = "k_pr2r";
					let repla = ""; //<script>안에 넣을 js코드 블럭 고르는거 만드는 코드
					let obst = []; //모든 블럭 id 들어가는곳
					let feolsb = localStorage.getItem("block2.0_feolsb"); //json형식
					let feolsbb = {}; //만약 저장 정보를 활용한다면 기본값 설정에 활용
					if (feolsb && confirm("저장 정보를 사용하나요?")) {
						feolsbb = JSON.parse(feolsb);
					}
					hr.obst[0].forEach(element => { //4개의 안전 등급 따로
						obst = obst.concat(element[0]);
						repla = repla + `feols.a("${element[0]}", "${element[1]}", "0", "${feolsbb[element[0]] ? "checked" : ""}");`;
					});
					hr.obst[1].forEach(element => {
						obst = obst.concat(element[0]);
						repla = repla + `feols.a("${element[0]}", "${element[1]}", "1", "${feolsbb[element[0]] ? "checked" : ""}");`;
					});
					hr.obst[2].forEach(element => {
						obst = obst.concat(element[0]);
						repla = repla + `feols.a("${element[0]}", "${element[1]}", "2", "${feolsbb[element[0]] ? "checked" : ""}");`;
					});
					hr.obst[3].forEach(element => {
						obst = obst.concat(element[0]);
						repla = repla + `feols.a("${element[0]}", "${element[1]}", "3", "${feolsbb[element[0]] ? "checked" : ""}");`;
					});
					ulisu0.style = 'position: absolute; top: 0px; left: calc(50% - 195px); width: 390px; height: 430px; border: none; z-index: 219;';
					document.body.prepend(ulisu0);
					ulisu0.contentWindow.document.open(); //gfg=고르는거 생성 코드 yiy=내부에 블록 리스트 전달 전용
					ulisu0.contentWindow.document.write(resu0.replace("/* gfg */", repla).replace("/* yiy */", "let arr = " + JSON.stringify(obst) + ";"));
					ulisu0.contentWindow.document.close();
				} catch {
					alert("오류남");
					throw new Error("오류남");
				}
				window.addEventListener("message", (e) => {
					if (typeof e.data === "string") {
						let lghqep = e.data.split("%i"); //lghqep[1]: {id: bool}형식
						if (lghqep.length === 2 && lghqep[0] === "block2.0_feolsb:lghqep") { //내부에서 확인 버튼 누르면 아래가 실행, 어디에서 온 신호인지 확인 코드 있으면 좋음
							let D; //lghqep[1]
							try {
								D = JSON.parse(lghqep[1]);
								console.log(D);
								localStorage.setItem("block2.0_feolsb", lghqep[1]);
								ulisu0.remove();
								alert('Block2.0을 설치합니다.');
								let EPE = JSON.stringify(hr.block()); //블록json
								let code = `try{let EPE=${EPE};let blockArray=new Array;for(let i in EPE){let block=EPE[i];blockArray.push(block.name);Entry.block[block.name]={
color:block.color.default,fontColor:block.color.font,outerLine:block.color.darken,skeleton:block.skeleton,statement:[],params:block.params,events:{},def:{params:block.def,type:block.name},paramsKeyMap:block.map,class:block.class?block.class:'default',func:D[i]?block.func:()=>{return null;},template:block.template};
if (typeof useWebGL=="undefined"){const fragment=document.createDocumentFragment();fragment.appendChild(Entry.playground.mainWorkspace.blockMenu._generateCategoryElement('Block2.0',true)[0]);let cdd=Entry.playground.mainWorkspace.blockMenu._categoryCol[0].querySelectorAll(".entryCategoryElementWorkspace");
Entry.playground.mainWorkspace.blockMenu._categoryCol[0].insertBefore(fragment, cdd[cdd.length - 1]);for (let i=0;i<$('.entryCategoryElementWorkspace').length;i++){if(!($($('.entryCategoryElementWorkspace')[i]).attr('id')=="entryCategorytext")){
$($('.entryCategoryElementWorkspace')[i]).attr('class','entryCategoryElementWorkspace');}}Entry.playground.blockMenu._categoryData=Entry.playground.blockMenu._categoryData.concat({"category":"Block2.0",blocks:blockArray});Entry.playground.blockMenu._generateCategoryCode('Block2.0');const entryCategory=document.getElementById("entryCategoryBlock2.0");
$('head').append(\`<style>[id='entryCategoryBlock2.0'] {background-image:url(https://raw.githack.com/1top10000/Block2.0/main/img/block2.0-img0.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory[id='entryCategoryBlock2\\.0'] {background-image:url(https://raw.githack.com/1top10000/Block2.0/main/img/block2.0-img1.svg);background-color:#00FF98;color:#000000}</style>\`);
entryCategory.append("Block2.0");}}}catch{alert('오류남');throw new Error("오류남");}`;
								const scr = document.createElement('script');
								scr.innerHTML = code;
								if (location.href.indexOf('playentry.org/project') == -1) {
									document.body.prepend(scr);
								} else {
									document.querySelector('iframe.css-1sbyuvq.eaizycc0').contentWindow.document.body.prepend(scr);
								}
							} catch {
								alert("오류남");
								throw new Error("오류남");
							}
						}
					}
				});
			});
		} else { //r[tg]가 최신버전이 아닌상황
			new Function(r[tg])().f(YGH); //r[tg]에서 f만 가지고와서 함
		}
	}
}).catch((e) => { //block/버전.js 가저오기 오류 발생시
	alert(e);
	throw new Error(e);
});