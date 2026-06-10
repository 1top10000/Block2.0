let version = ['2.1.0'];
fetch('https://raw.githubusercontent.com/1top10000/Block2.0/작업/block/' + version[version.length - 1] + '.js').then((resk) => { if (resk.ok) { return resk.text(); } else { return new Promise((resolve) => { resolve(false); }); }}).then(resu1 => {
	if (resu1 === false) {
		alert('');
		return;
	}
	var yb = window.indexedDB.open('block2.0', 1);
	yb.onerror = function() {
		alert('');
	};
	yb.onupgradeneeded = function(event) {
		console.log(event);
		let db = yb.result;
		let store = db.createObjectStore('block2.0');
	};
	yb.onsuccess = function() {
		let db = yb.result;
		console.log(2);
		let tra = db.transaction('block2.0', 'readwrite');
		tra.onerror = function() {
			alert('');
		};
		tra.oncomplete = function() {
			fetch('https://raw.githubusercontent.com/1top10000/Block2.0/작업/html/cn.html').then((res) => { if (res.ok) { return res.text(); } else { return new Promise((resolve) => { resolve(false); }); }}).then(resu0 => {
				if (resu0 === false) {
					alert('');
					return;
				}
				const ulisu0 = document.createElement('iframe');
				ulisu0.srcdoc = resu0;
				ulisu0.style = 'position: absolute; top: 0px; left: calc(50% - 195px); width: 390px; height: 420px; border: none; z-index: 219;';
				let script = document.createElement('script');
				script.innertext = ``;
				document.body.prepend(ulisu0);
				let hr = new Function(resu1)();
				hr.obst[0].forEach(element => {
					ulisu0.contentWindow.postMessage("block2.0_feolsa:" + element[0] + ":" + element[1] + ":0:checked", "*");
				});
				hr.obst[1].forEach(element => {
					ulisu0.contentWindow.postMessage("block2.0_feolsa:" + element[0] + ":" + element[1] + ":1:checked", "*");
				});
				hr.obst[2].forEach(element => {
					ulisu0.contentWindow.postMessage("block2.0_feolsa:" + element[0] + ":" + element[1] + ":2", "*");
				});
				hr.obst[3].forEach(element => {
					ulisu0.contentWindow.postMessage("block2.0_feolsa:" + element[0] + ":" + element[1] + ":3", "*");
				});
			});
			//tra.objectStore('block2.0');
		}
	};
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
*/