//--------------------------------------------------------
//>>     DOM READY
/**
 * @param {Function} callback - function to call after DOM is ready
 */
//--------------------------------------------------------
const domReady = callback => {
	document.readyState === 'interactive' || document.readyState === 'complete'
		? callback()
		: document.addEventListener('DOMContentLoaded', callback)
}

export default domReady
