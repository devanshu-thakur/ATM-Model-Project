/* document.addEventListener("click", function (event) {
  console.log("X:", event.offsetX, "Y:", event.offsetY);
});
// Use optional chaining (?.) so missing elements don't crash the script
document.querySelector("#pg2btn")?.addEventListener("click", () => {
  window.location.href = "pg2.html";
});
//on pg2 for clicking on saving and current.
document.querySelector("#savingbtn")?.addEventListener("click", () => {
  window.location.href = "pg3.html";
});

document.querySelector("#currentbtn")?.addEventListener("click", () => {
  window.location.href = "pg3.html";
});
document.querySelector("#bkdetailsbtn")?.addEventListener("click", () => {
  window.location.href = "details.html";
}); */




/* let container = document.querySelector(".atm-container");
container.addEventListener("click", function (event) {
  // Container ke relative X aur Y calculate karega
  let rect = container.getBoundingClientRect();
  let x = Math.round(event.clientX - rect.left);
  let y = Math.round(event.clientY - rect.top);

  console.log("left: " + x + "px;\n        top: " + y + "px;");
}); */






let container = document.querySelector(".atm-container");

container.addEventListener("click", function (event) {
  let rect = container.getBoundingClientRect();
  
  // 1. Calculate pixels
  let xPx = Math.round(event.clientX - rect.left);
  let yPx = Math.round(event.clientY - rect.top);

  // 2. Convert pixels to exact percentage coordinates
  let xPct = ((xPx / rect.width) * 100).toFixed(1);
  let yPct = ((yPx / rect.height) * 100).toFixed(1);

  // 3. Log a clean, ready-to-use CSS block in your console
  console.clear(); // Clears previous text to keep it neat
  console.log(
    `position: absolute;\n` +
    `left: ${xPct}%;     /* Adjusted from ${xPx}px */\n` +
    `top: ${yPct}%;      /* Adjusted from ${yPx}px */\n` +
    `width: 10.0%;    /* Adjust this percentage as needed */\n` +
    `height: 5.0%;    /* Adjust this percentage as needed */`
  );
});





/* body_pg1=document.querySelector(".pg1");
document.querySelector("#Next_pg2").addEventListener("click",()=>{
balance=Number(document.querySelector("#Enter_balance").value)||0;
localStorage.setItem("mySavedNumber", balance);
});

body_creditpg=document.querySelector(".creditpg");
document.querySelector("#creditbtn-next").addEventListener("click",async()=>{
  let balance = Number(localStorage.getItem("mySavedNumber")) || 0;
balance+=Number(document.querySelector("#enter-credit").value)||0;
localStorage.setItem("mySavedNumber", balance);
});

body_creditpg=document.querySelector(".debitpg");
document.querySelector("#debitbtn-next").addEventListener("click",async()=>{
 let balance = Number(localStorage.getItem("mySavedNumber"));
balance-=Number(document.querySelector("#enter-debit").value)||0;
localStorage.setItem("mySavedNumber", balance); 
});

recipt_body=document.querySelector(".recipt-pg");
document.querySelector("#creditbtn-next").addEventListener("click",async()=>{
 let balance = Number(localStorage.getItem("mySavedNumber"));
document.querySelector("#final-recipt").innerText="Remaining Balnce: "+balance+".";
});

document.querySelector("#creditbtn-next").addEventListener("click",async()=>{
 let balance = Number(localStorage.getItem("mySavedNumber"));
document.querySelector("#final-recipt").innerText="Remaining Balnce: "+balance+".";
}); */





