function validateForm() {
	var mess="";
	var ret = true;
	var x=document.forms["myForm"]["firstname"].value;
		if (x==""){
			mess=mess+"Name must be filled out";
			ret= false;
		}
	var x=document.forms["myForm"]["lastname"].value;
		if (x==""){
			mess+="\nLast Name must be filled out";
			ret = false;
		}
	var x=document.forms["myForm"]["address"].value;
		if (x==""){
			mess+="\nAddress must be filled out";
			ret = false;
		}


	if(ret == false)
	{
		alert(mess);
		//document.getElementById('myForm').reset();	
		return false;
	}

	var val=$("#txt").val();
	var obj=$("#locations").find("option[value='"+val+"']")
	if(obj != null && obj.length>0)
		return true;
	else
		alert("Invalid locations ");
		return false;

}