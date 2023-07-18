/* WSUA CHM Script */

window.onload = LoadPage;
window.onresize = ResizeWindow;
window.onbeforeprint = set_to_print;
window.onafterprint = reset_form;

var scrollPos = 0;

/*
**********
**********   Begin
**********
*/

function LoadPage()
{

	ResizeWindow();

	// vs70.js did this to allow up/down arrow scrolling, I think
	try
	{
		mainSection.setActive();
}
	catch (e)
	{
}

	// make body visible, now that we're ready to render
	document.body.style.display = "";

	//set the scroll position
	try
	{
		mainSection.scrollTop = scrollPos;
}
	catch (e)
	{
}
}

function ResizeWindow()
{return;
	if (document.body.clientWidth == 0)
	{
		return;
}

	var header = document.getElementById("header");
	var mainSection = document.getElementById("mainSection");
	if (mainSection == null)
	{
		return;
}

	document.body.scroll = "no"
	mainSection.style.overflow = "auto";
	header.style.width = document.body.offsetWidth;
	mainSection.style.width = document.body.offsetWidth;
	mainSection.style.top = 0;

	var headerHeight;
	var techCenterLink = document.getElementById("techCenterLink");
	if (techCenterLink == null)
	{
		headerHeight = header.offsetHeight;
}
	else
	{
		headerHeight = header.offsetHeight + techCenterLink.offsetHeight;
}

	if (document.body.offsetHeight > headerHeight)
	{
		mainSection.style.height = document.body.offsetHeight - headerHeight;
}
	else
	{
		mainSection.style.height = 0;
}

	try
	{
		mainSection.setActive();
}
	catch(e)
	{
}
}

function set_to_print()
{
	//breaks out of divs to print
	var i;

	if (window.text)document.getElementsByTagName("*").text.style.height = "auto";
		
	for (i = 0; i < document.getElementsByTagName("*").length; i++)
	{
		if (document.getElementsByTagName("*")[i].tagName == "body")
		{
			document.getElementsByTagName("*")[i].scroll = "yes";
	}
		if (document.getElementsByTagName("*")[i].id == "header")
		{
			document.getElementsByTagName("*")[i].style.margin = "0px 0px 0px 0px";
			document.getElementsByTagName("*")[i].style.width = "100%";
	}
		if (document.getElementsByTagName("*")[i].id == "mainSection")
		{
			document.getElementsByTagName("*")[i].style.overflow = "visible";
			document.getElementsByTagName("*")[i].style.top = "5px";
			document.getElementsByTagName("*")[i].style.width = "100%";
			document.getElementsByTagName("*")[i].style.padding = "0px 10px 0px 30px";
	}
}
}

function reset_form()
{
	//returns to the div nonscrolling region after print
	 document.location.reload();
}

/*
**********
**********   Begin Maintain Scroll Position
**********
*/

function loadAll()
{
	try 
	{
		scrollPos = allHistory.getAttribute("Scroll");
}
	catch(e){}
}

function saveAll()
{
	try
	{
		allHistory.setAttribute("Scroll", mainSection.scrollTop);
}
	catch(e){}
}

/*
**********
**********   End Maintain Scroll Position
**********
*/
