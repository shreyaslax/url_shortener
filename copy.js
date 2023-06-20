let newURL = document.getElementById("shorturl");
let copyButton = document.getElementById("copy");

copyButton.onclick = () => {
	newURL.select();
    document.execCommand('copy');
};
