let version = ['2.1.0'];
fetch('./../block/' + version[version.length - 1] + '.js').then((resk) => { if (resk.ok) { return resk.text(); } else { return new Promise((resolve) => { resolve(false); }); }}).then(resu1 => {
	if (resu1 === false) {
		alert('오류남');
		throw new Error('오류남');
		return;
	}
	fetch('./cn.html').then((res) => { if (res.ok) { return res.text(); } else { return new Promise((resolve) => { resolve(false); }); }}).then(resu0 => {
		if (resu0 === false) {
			alert('오류남');
			throw new Error('오류남');
			return;
		}
		const ulisu0 = document.createElement('iframe');
		ulisu0.id = "k_pr2r";
		let repla = "";
		let hr = new Function(resu1)();
		let obst = [];
		let feolsb = localStorage.getItem("block2.0_feolsb");
		let feolsbb = {};
		if (feolsb && confirm("저장 정보를 사용하나요?")) {
			feolsbb = JSON.parse(feolsb);
		}
		hr.obst[0].forEach(element => {
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
		ulisu0.contentWindow.document.open();
		ulisu0.contentWindow.document.write(resu0.replace("/* gfg */", repla).replace("/* yiy */", "let arr = " + JSON.stringify(obst) + ";"));
		ulisu0.contentWindow.document.close();
		window.addEventListener("message", (e) => {
			if (typeof e.data === "string") {
				let lghqep = e.data.split("%i");
				if (lghqep.length === 2 && lghqep[0] === "block2.0_feolsb:lghqep") {
					let D;
					try {
						D = JSON.parse(lghqep[1]);
						console.log(D);
						localStorage.setItem("block2.0_feolsb", lghqep[1]);
						ulisu0.remove();
						alert('Block2.0을 설치합니다.');
						let EPE = JSON.stringify(hr.block());
						let code = `try{let EPE=${EPE};let blockArray=new Array;for(let i in EPE){let block=EPE[i];if(!D[i]){blockArray.push(block.name);Entry.block[block.name]={
color:block.color.default,fontColor:block.color.font,outerLine:block.color.darken,skeleton:block.skeleton,statement:[],params:block.params,events:{},def:{params:block.def,type:block.name},paramsKeyMap:block.map,class:block.class?block.class:'default',func:block.func,template:block.template};
if (typeof useWebGL=="undefined"){const fragment=document.createDocumentFragment();fragment.appendChild(Entry.playground.mainWorkspace.blockMenu._generateCategoryElement('Block2.0',true)[0]);let cdd=Entry.playground.mainWorkspace.blockMenu._categoryCol[0].querySelectorAll(".entryCategoryElementWorkspace");
Entry.playground.mainWorkspace.blockMenu._categoryCol[0].insertBefore(fragment, cdd[cdd.length - 1]);for (let i=0;i<$('.entryCategoryElementWorkspace').length;i++){if(!($($('.entryCategoryElementWorkspace')[i]).attr('id')=="entryCategorytext")){
$($('.entryCategoryElementWorkspace')[i]).attr('class','entryCategoryElementWorkspace');}}Entry.playground.blockMenu._categoryData=Entry.playground.blockMenu._categoryData.concat({"category":"Block2.0",blocks:blockArray});Entry.playground.blockMenu._generateCategoryCode('Block2.0');const entryCategory=document.getElementById("entryCategoryBlock2.0");
$('head').append(\`<style>[id='entryCategoryBlock2.0'] {background-image:url(https://raw.githack.com/1top10000/Block2.0/main/img/block2.0-img0.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory[id='entryCategoryBlock2\\.0'] {background-image:url(https://raw.githack.com/1top10000/Block2.0/main/img/block2.0-img1.svg);background-color:#00FF98;color:#000000}</style>\`);
entryCategory.append("Block2.0");}}}}catch{alert('오류남');throw new Error("오류남");}`;
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
});