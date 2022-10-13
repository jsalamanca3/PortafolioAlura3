const $form = document.querySelector("#form");
const $btn = document.querySelector("#correo");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $btn.setAttribute(
        "href",
        `mailto:jfsalamanca3@gmail.com?subject=nombre ${form.get(
            "name"
        )}  correo ${form.get("email")}&body=${form.get("message")}`
    );
    $btn.click();
}
