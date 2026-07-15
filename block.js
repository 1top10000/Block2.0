let version = ['2.1.0'];
fetch('./../block/' + version[version.length - 1] + '.js').then((resk) => { if (resk.ok) { return resk.text(); } else { return new Promise((resolve) => { resolve(false); }); }}).then(resu1 => {
	fetch('./cn.html').then((res) => { if (res.ok) { return res.text(); } else { return new Promise((resolve) => { resolve(false); }); }}).then(resu0 => {
		if (resu0 === false) {
			alert('오류남');
			return;
		}
		const ulisu0 = document.createElement('iframe');
		ulisu0.id = "k_pr2r";
		let repla = "";
		let hr = new Function(resu1)();
		let obst = [];
		hr.obst[0].forEach(element => {
			obst = obst.concat(element[0]);
			repla = repla + `feols.a("${element[0]}", "${element[1]}", "0", "checked");`;
		});
		hr.obst[1].forEach(element => {
			obst = obst.concat(element[0]);
			repla = repla + `feols.a("${element[0]}", "${element[1]}", "1", "checked");`;
		});
		hr.obst[2].forEach(element => {
			obst = obst.concat(element[0]);
			repla = repla + `feols.a("${element[0]}", "${element[1]}", "2", "");`;
		});
		hr.obst[3].forEach(element => {
			obst = obst.concat(element[0]);
			repla = repla + `feols.a("${element[0]}", "${element[1]}", "3", "");`;
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
					} catch {
						alert("오류남");
					}
				}
			}
		});
	});
});

/*
if (location.href.indexOf('playentry.org/project') == -1) {
	const ulisu1 = document.createElement('script');
	fetch('https://raw.githubusercontent.com/1top10000/Block2.0/작업/block/2.1.0.js').then(res => res.text()).then(resu => {
		ulisu1.innerHTML = resu;
		document.body.prepend(ulisu1);
	});
} else {
	const ulisu0 = document.querySelector('iframe.css-1sbyuvq.eaizycc0').contentWindow.document.body;
	const ulisu1 = document.createElement('script');
	fetch('https://raw.githubusercontent.com/1top10000/Block2.0/작업/block0.js').then(res => res.text()).then(resu => {
		ulisu1.innerHTML = resu;
		ulisu0.prepend(ulisu1);
	});
}
	GET https://verbose-broccoli-69gvp7q5p66h5jrr-5500.app.github.dev/block/2.1.0.js 0
*/