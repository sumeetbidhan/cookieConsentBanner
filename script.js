document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");

  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if(!cookiesAccepted){
    cookieBanner.style.display = "block";
  }
  
  acceptButton.addEventListener("click", () =>{
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display ="none";
  });
});