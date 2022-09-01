
 

async function getResponse() {
    const myJson = JSON.stringify({
        "title": text.value,
        "body": bodyText.value,
      },)
    
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts',
		{
			method: 'post',
			body: myJson,
		}
	);
    console.log(response)
}

const text = document.getElementById('title')

const bodyText = document.getElementById('body')



document.getElementById("send").addEventListener("click", function(e) {
    e.preventDefault();
   
    // alert("Hello World!");
    if (title.value.length >= 3) {
        alert("DOBRA ROBOTA!")
        
    } else {
        
        alert("Przyjacielu musisz tu coś napisać!!!");
    }
    
    getResponse()
    console.log(text.value, bodyText.value,)

    text.value = '';
    bodyText.value = '';

  })

const idValue = document.getElementById("postArea")

const displayButton = document.getElementById("display")

console.log(displayButton)

displayButton.addEventListener("click", async function(e) {
    e.preventDefault();
   
    const response = await fetch( 
		 `https://jsonplaceholder.typicode.com/posts/${idValue.value}` ,
		{
			method: 'get',
			
		}
	);
    console.log('jestem')

    const obj = await response.json();

    const para = document.createElement("p");
    para.innerText = obj.title;
    document.body.appendChild(para);

  })
