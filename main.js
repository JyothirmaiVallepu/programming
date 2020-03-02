fetch("data.json")
.then((response)=>{
   return response.json();
}).then((data)=>{
    // console.log(data);
    display_info(data.basics);
   //create function for education
    education_data(data.basics.education);
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
//Education Data

function education_data(edu_details){
    for (i in edu_details){
        //created section with classname
        let sec=document.createElement("section");
        sec.classList.add("education");
        let deg=document.createElement("h3");
        //getting degree name
        deg.textContent=edu_details[i].degree;
        sec.appendChild(deg);
        //getting percentage
        let p=document.createElement("p");
        p.textContent="My Percentage is:"+edu_details[i].percentage;
        sec.appendChild(p);
         
        //append the data into body
        bodyElement.appendChild(sec);
    }
}
