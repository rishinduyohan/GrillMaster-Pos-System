console.log("Test 1");

const testContainer = document.getElementById("test");
if(testContainer){
    let div = document.createElement("div");
    div.innerHTML=`
        <h1>Hello there</h1>
        <p>This is testing app.js File</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab repudiandae nisi corrupti dolorem iste placeat
        blanditiis inventore harum. Non impedit temporibus cumque? Dicta asperiores veniam quae officia voluptatibus
        dolore doloribus.
        In consectetur deleniti consequatur delectus adipisci laborum quas sunt incidunt soluta modi dolore, expedita
        aperiam nesciunt? Assumenda necessitatibus fugit officia non libero magni ratione omnis iste, eveniet recusandae
        maxime quisquam?</p>
    `;
    testContainer.appendChild(div);
}