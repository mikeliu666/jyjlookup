
function lookup(sno)
{
	var data=
		'{"sno":"'+sno+'","userType":"0"}';
	var xhr=new XMLHttpRequest();
	xhr.open("post",'http://27.221.57.108:10009/app/cardInfo',true);
	xhr.setRequestHeader('content-type','application/json');
	xhr.send(data);
	xhr.onreadystatechange=function(){
				var infomation=null
                if(xhr.readyState==4){
                    if(xhr.status==200){
						infomation=JSON.parse(xhr.responseText);
						if(infomation.code==0)
						{
							rename.innerHTML=infomation.data.name;
							id.innerHTML=infomation.data.cardNo;
							amount.innerHTML=infomation.data.amount;
							freeze.innerHTML=infomation.data.frozen=="0"?"·ñ":"ÊÇ";
						}
						else
						{
							rename.innerHTML=infomation.msg
						}
                    }else{
                    document.write("´íÎó£º"+xhr.status)
                    }
                }
            }
}
