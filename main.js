var names_guests=[];

function submit(){
     var names_of_guests=document.getElementById("inputname").value;
     names_guests.push(names_of_guests);
     console.log(names_of_guests);
     console.log(names_guests);
     var length = names_guests.length;
     console.log(length);    

}

function show(){
    var i=names_guests.join("<br>")
    console.log(names_guests);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("button_showsorted").style.display="block";
}

function sorting(){
    names_guests.sort();
    var i=names_guests.join("<br>");
    console.log(names_guests);
    document.getElementById("sorted").innerHTML=i.toString();
}

function searching()
{
	var s= document.getElementById("input_search").value;
	var found=0;
	var j;
	for(j=0; j<names_guests.length; j++)
		{
			if(s==names_guests[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}

