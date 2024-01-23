if (location.href.indexOf('playentry.org/project') == -1) {
	fetch('https://raw.githubusercontent.com/1top10000/Block2.0/main/block0.js').then(res => res.text()).then(resu => {
		eval(resu);
	});
} else {
	const ulisu0 = document.querySelector('iframe.css-1sbyuvq.eaizycc0').contentWindow.document.body;
	const ulisu1 = document.createElement('script');
	fetch('https://raw.githubusercontent.com/1top10000/Block2.0/main/block0.js').then(res => res.text()).then(resu => {
		ulisu1.innerHTML = resu;
		ulisu0.prepend(ulisu1);
	});
}
