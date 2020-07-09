
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());

			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("index.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
	basic1(data.details2);

})

var child1 = document.querySelector(".child1");
function basic(det) {


 var image = document.createElement("img");
 image.src="./origin/starter/image/img.jpg";
 child1.appendChild(image);	

var name = document.createElement("h4");
name.textContent=det.name;
child1.appendChild(name);
 
 var email = document.createElement("h3");
 email.textContent = det.email;
 child1.appendChild(email);



 var number = document.createElement("h4");
 number.textContent=det.number;
 child1.appendChild(number);

 var static = document.createElement("a");
 static.href = "./origin/starter/",
 static.textContent = det.static;
 child1.appendChild(static);


}

var child2=document.querySelector(".child2");
function basic1(info1){

var image = document.createElement("img");
 image.src="./origin/starter/image/img.jpg";
 child2.appendChild(image);	

var name = document.createElement("h4");
name.textContent=info1.name;
child2.appendChild(name);
 
 var email = document.createElement("h3");
 email.textContent = info1.email;
 child2.appendChild(email);



 var number = document.createElement("h4");
 number.textContent=info1.number;
 child2.appendChild(number);


 var dynamic = document.createElement("a");
 dynamic.href = "./origin/",
 dynamic.textContent = info1.dynamic;
 child2.appendChild(dynamic);


	

}
