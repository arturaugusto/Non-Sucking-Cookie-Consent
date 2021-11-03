// Non-Sucking Cookie Consent
(function () {
let consent = window.localStorage.getItem('ns-cookie-consent')
if (!consent) {
	let banner = document.createElement('SPAN')
	banner.innerHTML = 'Este site utiliza cookies para seu correto funcionamento. Ao continuar nesta página, consideramos que você concorda com a utilização de cookies &nbsp;'
	;[
		['width', '100%'],
		['position', 'fixed'],
		['background', '#333333f6'],
		['padding', '10px 0'],
		['color', '#fff'],
		['bottom', 0],
		['padding', '18px'],
		['margin-right', '12px'],
		['font-size', '18px']
	].forEach(x => banner.style[x[0]] = x[1])
	document.body.appendChild(banner)

	let button = document.createElement('BUTTON')
	button.innerHTML = 'Ok, entendi.'
	;[
		['color', '#fff'],
		['background-color', '#000'],
		['border-radius', '10px'],
		['border', '1px'],
		['-webkit-transition-duration', '0.4s'],
		['transition-duration', '0.4s'],
		['cursor', 'pointer'],
		['font-size', '22px']
	].forEach(x => button.style[x[0]] = x[1])

	;['mouseover', 'mouseleave'].forEach(evtType => button.addEventListener(evtType, (evt) => {
		evt.type === 'mouseover' ? evt.target.style['background-color'] = '#005a8e' : evt.target.style['background-color'] = '#000'
	}))
	button.addEventListener('click', () => window.localStorage.setItem('ns-cookie-consent', '1')||button.remove()||banner.remove())
	banner.appendChild(button)
}}());
