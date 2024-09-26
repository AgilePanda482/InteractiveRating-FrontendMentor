const button = document.getElementById("submit-button")

button.addEventListener("click", () => {
    const sectionRatingStart = document.querySelector(".rating-start")
    const sectionRatingEnd   = document.querySelector(".rating-end")
    const rating = document.getElementById("rate")

    const checkboxes = [
        { id: "number-one", value: 1 },
        { id: "number-two", value: 2 },
        { id: "number-three", value: 3 },
        { id: "number-four", value: 4 },
        { id: "number-five", value: 5 }
    ];

    const selectedCheckbox = checkboxes.find(checkbox => document.getElementById(checkbox.id).checked)
    const selectedNumber = selectedCheckbox ? selectedCheckbox.value : null;


    if( selectedNumber != null){
        sectionRatingStart.style.display = "none"
        sectionRatingEnd.style.display = "flex"
        rating.textContent = selectedNumber
    } else {
        alert("Please, select any number")
    }
})
