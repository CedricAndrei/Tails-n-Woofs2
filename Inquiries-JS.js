function sendMail() {
  var a = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    number: document.getElementById("number").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_iioo89i";
  const templateID = "template_y2ponhj";

    emailjs.send(serviceID, templateID, a)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("number").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}