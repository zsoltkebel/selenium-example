let data = { cheesecakes: 0};
let name = "who?";

const incrementCount = () => {
    name = window.document.getElementById("name").value;
    data.cheesecakes++;
    window.document.getElementById("count").innerHTML = data.cheesecakes;
    window.document.getElementById("person").innerHTML = name;
};

const incrementButton = window.document.getElementById("increment-button");
incrementButton.addEventListener("click", incrementCount);

module.exports = { incrementCount, data };
