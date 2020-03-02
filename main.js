fetch("data.json")
.then((response)=>{
   return response.json();
}).then((data)=>{
    // console.log(data);
    display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    //card view
    let card=document.createElement("div");
    //add class to card variable
    card.classList.add("card");
    //heading
    let heading=document.createElement("h2");
    heading.textContent=info.name;
    //store card in body
    bodyElement.append(card);
    //store heading in card 
    card.append(heading);
    let line=document.createElement("hr");
    card.append(line);
    //role
    let role=document.createElement("h3");
    role.textContent=info.role;
    card.append(role);
    //email
    let Gmail=document.createElement("a");
    Gmail.href="mailto:"+info.Gmail;
    Gmail.textContent=info.Gmail;
    card.append(Gmail);
    let br=document.createElement("br");
    let br1=document.createElement("br");
    card.append(br);
    card.append(br1);
    //mobile
    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);

    var button=document.createElement("a");
    button.textContent="view profile";
    button.classList.add("btn");
    card.append(button);

}