const elForm = document.querySelector(".form");
const elText = document.querySelector(".text");
const elPassword = document.querySelector(".password");

elForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const textValue = elText.value.trim();
    const passwordValue = elPassword.value.trim();
    
    if(!textValue || !passwordValue) {
        return alert("inputlarni to'ldiring");
    } else {
        alert("Tizimga muvaffaqiyatli kirildi !");
        window.location.href = "https://www.w3schools.com/js/js_let.asp";
    }
});

const elBtn = document.querySelector(".btn");

elBtn.addEventListener('click' , () => {
    alert("Assalomu alaykum");
});