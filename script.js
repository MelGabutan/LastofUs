function alertTraitor()
{
	alert("Traitor Found!");
}

function nextChar()
{
	var pan = document.getElementById("panels").children;
	pan[0].nextElementSibling
	for(div of pan)
	{
		if(isInViewport(div))
		{
			div.nextElementSibling?.scrollIntoView();
			break;
		}
	}
}

function prevChar()
{
	var pan = document.getElementById("panels").children;
	pan[0].nextElementSibling
	for(div of pan)
	{
		if(isInViewport(div))
		{
			div.previousElementSibling?.scrollIntoView();
		}
	}
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}