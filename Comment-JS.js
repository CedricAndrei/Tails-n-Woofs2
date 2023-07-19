function sendMail() {
    var a = {
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_iioo89i";
    const templateID = "template_d9lxyqm";
  
      emailjs.send(serviceID, templateID, a)
      .then(res=>{
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }