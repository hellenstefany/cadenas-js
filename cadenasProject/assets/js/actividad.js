const str1 = "Programación";
const str2 = "JavaScript";
const str3 = "Desarrollo";
const str4 = "Inteligencia";
const str5 = "Computadora";
const str6 = "Innovación";
const str7 = "Tecnología";
const str8 = "Aprendizaje";
const str9 = "ChatGPT";
const str10 = "SENA ADSO";

document.getElementById("res1").textContent = "Resultado: " + str1.length;
document.getElementById("res2").textContent = "Resultado: " + str2.charAt(1);
document.getElementById("res3").textContent = "Resultado: " + str3.charCodeAt(1);
document.getElementById("res4").textContent = "Resultado: " + str4.at(-1);
document.getElementById("res5").textContent = "Resultado: " + str5[6];
document.getElementById("res6").textContent = "Resultado: " + str6.slice(0, 4);
document.getElementById("res7").textContent = "Resultado: " + str7.substring(0, 4);
document.getElementById("res8").textContent = "Resultado: " + str8.substr(0, 4);
document.getElementById("res9").textContent = "Resultado: " + str9.toUpperCase();
document.getElementById("res10").textContent = "Resultado: " + str10.toLowerCase();



