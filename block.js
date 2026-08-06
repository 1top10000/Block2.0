window["Block2.0"] = {};
let _g2v3 = ['2.1.0'];
const AVC = "https://raw.githack.com/1top10000/Block2.0/main";
if (confirm("이 코드를 실행하면 작품이 저장 전으로 돌아갑니다. 하지만 블럭 불러오기 전 한번더 저장을 하면 블럭이 사라져서 버장버튼을 누르지 말아야 합니다. 코드실행을 취소하나요?")) {
	alert("취소함");
	throw new Error("취소함");
}
let _vu2j=null;-1!==location.href.indexOf("playentry.org/project"
)&&(_vu2j=document.querySelector("iframe.css-qed8tf.eh3vyy30").contentWindow,
_vu2j["Block2.0"]=window["Block2.0"]);
let YGH;
let _b3dc = [0x83,0x2F,0xC8,0xAD,0x29,"feolsch","nn2fycnh2mxe0vr2hdhkeuhaergrc210nrythtrswbobforEach0pavb9ueiodjig0v28vusdbhibhgsd",'v9qw01hejkvbdsoouvgwjdwboudfheweufjsbmcheckedzocpqohfdajosobjovewohgubwodonfwb',`concat`];
let AEV;
const _f2h0 = () => {
	const io = _g2v3.indexOf(AEV);
	let R = [];
	if (io === -1 && AEV !== "2.0") {
		alert("작품 버전이 이상함");
		throw new Error("작품 버전이 이상함");
	}
	for(let e=io+1;e<_g2v3.length;e++)R[R.length]=fetch(AVC+"/block/"+_g2v3[e]+
	".js",{method:"GET"}).then(e=>e.ok?e.text():new Promise(e=>
	{e(!1)}));0===R.length&&(R[0]=fetch(AVC+"/block/"+_g2v3[_g2v3.length-1]+".js",
	{method:"GET"}).then(e=>e.ok?e.text():new Promise(e=>{e(!1)})));
	Promise.all(R).then((r) => {
		if(r.indexOf(false) !== -1) {
			alert('오류남');
			throw new Error('오류남');
		}
		for (let tg in r) {
			if (Number(tg) === r.length - 1) {
				const hr = new Function(r[Number(tg)])();
				if (io !== _g2v3.length - 1) {
					hr.f(YGH);
				}
				fetch(AVC + '/html/cn.html', {method: "GET"}).then((res) => { if (res.ok) { return res.text(); } else { return new Promise((resolve) => { resolve(false); }); }}).then(resu0 => {
					if (resu0 === false) {
						alert('오류남');
						throw new Error('오류남');
					}
					let _3eub;
					try {
						_3eub = document.createElement('iframe');
						_3eub.id = "k_pr2r";
						let _4gsd = "";
						let _9vew = [];
						let feolsb = localStorage.getItem("block2.0_feolsb");
						let _ev87 = {};
						if (feolsb && confirm("저장 정보를 사용하나요?")) {
							_ev87 = JSON.parse(feolsb);
						}
						hr.obst[0o0][_b3dc[6.0][`su${"bs"}tr\x69\x6Eg`](0o54,0x33)](
							_f2ud=>{_9vew=_9vew[_b3dc[8.0]](_f2ud[0]);_4gsd=_4gsd+`feols.a("${_f2ud[0]
							}","${_f2ud[1]}","0","${_ev87[_f2ud[0]]==undefined?_b3dc[7.0][atob("c3Vic3RyaW5n")](0x26
							,0x2D):(_ev87[_f2ud[0]]?_b3dc[7.0][atob("c3Vic3RyaW5n")](0x26,0x2D):"")}");`;});
						hr.obst[0o1][_b3dc[6.0][`su${"bs"}tr\x69\x6Eg`](0o54,0x33)](
							_f2ud=>{_9vew=_9vew[_b3dc[8.0]](_f2ud[0]);_4gsd=_4gsd
							+`feols.a("${_f2ud[0]}","${_f2ud[1]}","1","${_ev87[_f2ud[0]]==
							undefined?_b3dc[7.0][atob("c3Vic3RyaW5n")](0x26,0x2D):(_ev87[_f2ud[0]]?_b3dc[7.0][atob("c3Vic3RyaW5n")](
							0x26,0x2D):"")}");`;});
						hr.obst[0o2][_b3dc[6.0][`su${"bs"}tr\x69\x6Eg`](0o54,0x33)](_f2ud=>{_9vew=_9vew[_b3dc[8.0]](_f2ud[0]);
							_4gsd=_4gsd+`feols.a("${_f2ud[0]}","${_f2ud[1]
							}","2","${_ev87[_f2ud[0]]?_b3dc[7.0][
							atob("c3Vic3RyaW5n")](0x26,0x2D):""}");`;});
						hr.obst[0o3][_b3dc[6.0][`su${"bs"}tr\x69\x6Eg`](0o54,0x33)](_f2ud=>{_9vew=
							_9vew[_b3dc[8.0]](_f2ud[0]);_4gsd=_4gsd+`feols.a("${_f2ud[0
							]}","${_f2ud[1]}","3","${_ev87[_f2ud[0]]?
							_b3dc[7.0][atob("c3Vic3RyaW5n")](0x26,0x2D):""}");`;});
						_3eub.style = 'position: fixed; top: 0px; left: calc(50% - 195px); width: 390px; height: 430px; border: none; z-index: 219;';
						document.body.prepend(_3eub);
						_3eub.contentWindow.document.open();
						_3eub.contentWindow.document.write(resu0.replace("/* gfg */", _4gsd).replace("/* yiy */", "let arr = " + JSON.stringify(_9vew) + ";"));
						_3eub.contentWindow.document.close();
					} catch(e) {
						alert("오류남:" + e);
						throw new Error("오류남" + e);
					}
					window.addEventListener("message", (e) => {
						if (typeof e.data === "string") {
							let lghqep = e.data.split("%i");
							if (lghqep.length === 2 && lghqep[0] === "block2.0_feolsb:lghqep") {
								try {
									localStorage.setItem("block2.0_feolsb", lghqep[1]);
									_3eub.remove();
									alert('Block2.0을 설치합니다.');
									let pEPE = hr.block();
									let Bfn = {};
									for (let i of pEPE) {
										Bfn[i.name] = i.func;
										i.func = "Bfunc_" + i.name;
									}
									let EPE = JSON.stringify(pEPE);
									for (let i of pEPE) {
										EPE = EPE.replace(`"Bfunc_${i.name}"`, Bfn[i.name].toString());
									}
									window["Block2.0"].pj = YGH;
									let code = `try{let EPE=${EPE};let D=${lghqep[1]};let blockArray=new Array;for(let i in EPE){let block=EPE[i];let name=block.name;blockArray.push(block.name);Entry.block[block.name]={
	color:D[name]?block.color.default:"#d83e49",fontColor:block.color.font,outerLine:D[name]?block.color.darken:"#ae2932",skeleton:block.skeleton,statement:[],params:block.params,events:{},def:{params:block.def,type:block.name},paramsKeyMap:block.map,class:block.class?block.class:'default',func:D[name]?block.func:()=>{return null;},template:block.template};}
	if (Entry.playground?.mainWorkspace?.blockMenu?._generateCategoryElement){const fragment=document.createDocumentFragment();fragment.appendChild(Entry.playground.mainWorkspace.blockMenu._generateCategoryElement('Block2.0',true)[0]);let cdd=Entry.playground.mainWorkspace.blockMenu._categoryCol[0].querySelectorAll(".entryCategoryElementWorkspace");
	Entry.playground.mainWorkspace.blockMenu._categoryCol[0].insertBefore(fragment, cdd[cdd.length - 1]);for (let i=0;i<$('.entryCategoryElementWorkspace').length;i++){if(!($($('.entryCategoryElementWorkspace')[i]).attr('id')=="entryCategorytext")){
	$($('.entryCategoryElementWorkspace')[i]).attr('class','entryCategoryElementWorkspace');}}Entry.playground.blockMenu._categoryData=Entry.playground.blockMenu._categoryData.concat({"category":"Block2.0",blocks:blockArray});Entry.playground.blockMenu._generateCategoryCode('Block2.0');const entryCategory=document.getElementById("entryCategoryBlock2.0");
	$('head').append(\`<style>[id='entryCategoryBlock2.0'] {background-image:url(https://playentry.org/uploads/a3/89/a3894366mshdccl3000609c952ccghpf.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory[id='entryCategoryBlock2\\.0'] {background-image:url(https://playentry.org/uploads/5f/e7/5fe7779bmshdcjgb0001e7f1427d9hvo.svg);background-color:#00FF98;color:#000000}</style>\`);
	entryCategory.append("Block2.0");}if(window["Block2.0"].pj){Entry.clearProject();Entry.loadProject(window["Block2.0"].pj);}let nN=Entry.aiUtilizeBlocks.filter((ele)=>{return ele.indexOf("Block2.0_")!= 0});nN[nN.length]="Block2.0_${_g2v3.at(-1)}";Entry.aiUtilizeBlocks=nN;}catch(e){alert('오류남:'+e);throw new Error("오류남:"+e);}`;
									const scr = document.createElement('script');
									scr.innerHTML = code;
									if (_vu2j) {
										_vu2j.document.body.prepend(scr);
									} else {
										document.body.prepend(scr);
									}
								} catch(err) {
									alert("오류남:" + err);
									throw new Error("오류남:" + err);
								}
							}
						}
					});
				});
			} else {
				new Function(r[Number(tg)])().f(YGH);
			}
		}
	}).catch((err) => {
		alert(err);
		throw new Error(err);
	});
};
const iD = location.pathname.split("/").at(-1)
if (iD === "new") {
	AEV = _g2v3.at(-1);
	_f2h0();
} else {
	const __NEXT_DATA__ = JSON.parse(document.body.querySelector(`#__NEXT_DATA__`).innerHTML);
	const csrftoken = __NEXT_DATA__.props.initialProps.csrfToken;
	const xToken = __NEXT_DATA__.props.pageProps.initialState.common.user.xToken;
	fetch("https://playentry.org/graphql/SELECT_PROJECT", {
		method: "POST",
		headers: {
			"Csrf-Token": csrftoken,
			"X-Token": xToken,
			"content-type": "application/json"
		},
		body: JSON.stringify({
			query: `query SELECT_PROJECT($id: ID! $groupId: ID) {\nproject(id: $id, groupId: $groupId) {
id\nname\nthumb\nisopen\nshowComment\nblamed\nisPracticalCourse\ncategory\ncategoryCode\ncreated\nupdated\nspecial\nisForLecture\nisForStudy\nisForSubmit\nhashId\ncomplexity\nstaffPicked\nranked\nvisit\nlikeCnt\ncomment\nfavorite\nshortenUrl
description\ndescription2\ndescription3\nhasRealTimeVariable\nblockCategoryUsage\nchildCnt
commentGroup {\ngroup\ncount\n}\nlikeCntGroup {\ngroup\ncount\n}\nvisitGroup {\ngroup\ncount\n}\nrecentGroup {\ngroup\ncount\n}
published\nisFirstPublish\ntags\nspeed\nobjects\nvariables\nsubmitId {\nid\n}\ncloudVariable\nmessages\nfunctions\ntables\nscenes
realTimeVariable {\nvariableType\nkey\nvalue\narray {\nkey\ndata\n}\nminValue\nmaxValue\nvisible\nx\ny\nwidth\nheight\nobject\n}
learning\nexpansionBlocks\naiUtilizeBlocks\nhardwareLiteBlocks\nblockCategoryUsage\n}}`,
			variables: {
				id: iD
			}
		})
	}).then((res) => { if (res.ok) { return res.json(); } else { return new Promise((resolve) => { resolve(false); }); }}).then((pj)=>{
		if (pj === false) {
			alert('오류남');
			throw new Error('오류남');
		}
		YGH = pj.data.project;
		AEV = YGH.aiUtilizeBlocks.filter((ele) => { return ele.indexOf("Block2.0_") === 0});
		if (AEV.length === 1) {
			AEV = AEV[0].substring(9);
			_f2h0();
		} else if (AEV.length === 0) {
			AEV = "2.0";
			_f2h0();
		} else {
			alert('작품의 block2.0버전이 이상함');
			throw new Error('작품의 block2.0버전이 이상함');
		}
	});
}