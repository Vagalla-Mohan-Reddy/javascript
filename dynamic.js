function getJson(file,callback){
var xhr_req=new XMLHttpRequest();
xhr_req.overrideMimeType("application/json");
xhr_req.open("GET",file,true);
xhr_req.onreadystatechange=function(){
 if(xhr_req.readyState===4 && xhr_req.status===200){
      callback(xhr_req.responseText);
 }
}
xhr_req.send();
}
getJson("dynamic.json",function(text){
console.log("Mohan");
var d=JSON.parse(text);
console.log(d);
details(d.details);
skills(d.skills);
object(d.objective);
education(d.education);
address(d.Address);
})
var main=document.querySelector("#parent-div");
var child=document.createElement('div');
child.classList.add('child1');
main.appendChild(child);
var details=(d)=>{
	var image=document.createElement("img");
	image.src=d.image1;
	image.alt="Mohan";
	child.appendChild(image);
	var n1=document.createElement("h1");
	n1.textContent=d.name;
	child.appendChild(n1);
	var n2=document.createElement("h2");
	n2.textContent=d.prof;
	child.appendChild(n2);
}
var skills=(s)=>
{
	var skill=document.createElement("h3");
	skill.textContent="Skills:";
	child.appendChild(skill);
	var table1=document.createElement("table");
	table1.classList.add('table1')
	var row="";
	for(var i=0;i<s.lang_skill.length;i++)
	{
		row+="<tr><td>"+s.lang_skill[i]+"</td><td>"+s.score[i]+"</td></tr>";
	}
	table1.innerHTML=row;
	child.appendChild(table1);
	var skill=document.createElement("h3");
	skill.textContent="personal Skills:";
	child.appendChild(skill);
	var ul=document.createElement("ul");
	ul.classList.add('unorder');
	child.appendChild(ul);
	for(var i=0;i<s.person_skill.length;i++)
	{
		var li=document.createElement("li");
		li.textContent=s.person_skill[i];
		ul.appendChild(li);
	}
	main.appendChild(child);
}
var child1=document.createElement('div');
var object=(k)=>
{
	child1.classList.add('child2');
	main.appendChild(child1);
	var h1=document.createElement("h2");
	h1.textContent="Career Object:";
	child1.appendChild(h1);
	var p=document.createElement("p");
	p.textContent=k.goal;
	child1.appendChild(p);
}
var education=(h)=>{
	var h1=document.createElement("h2");
	h1.textContent="Education:";
	child1.appendChild(h1);
	var table1=document.createElement("table");
	table1.classList.add('table2');
	var row="";
	row+="<tr><td>"+"College"+"</td><td>"+"Degree"+"</td><td>"+"score"+"</td><td>"+"YOP"+"</td></tr>";
	for(var i in h)
	{
		row+="<tr><td>"+h[i][0]+"</td><td>"+h[i][1]+"</td><td>"+h[i][2]+"</td><td>"+h[i][3]+"</td></tr>";
	}
	table1.innerHTML=row;
	child1.appendChild(table1)
}
var address=(l)=>
{
	var h1=document.createElement("h2");
	h1.textContent="Address:";
	child1.appendChild(h1);
	var ul=document.createElement("ul");
	ul.classList.add('unorder1');
	child.appendChild(ul);
	for(var i in l)
	{
		var li=document.createElement("li");
		li.textContent=l[i];
		ul.appendChild(li);
	}
	child1.appendChild(ul);
}