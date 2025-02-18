   
function generateOTP() {
    let div = document.getElementById("otp");
   div.style.display = "inline";

   let otp = Math.floor(100000 + Math.random() * 900000);
    div.innerText = otp;

    let btn = document.createElement("button");
    btn.innerHTML = "<span class='material-icons'>&nbsp content_copy</span>";
    btn.id = "copy-otp";
   div.appendChild(btn);

   btn.onclick = function() {
    let div = document.getElementById("otp");
  navigator.clipboard.writeText(otp);
alert("OTP Copied Successfully❕")
  setTimeout(() => {
  document.getElementById("popup").style.display = "none";
  }, 2000);
  div.innerHTML="";
   }
}