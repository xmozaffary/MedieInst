function myFunction(){
    const findElement = document.getElementById("test");
    findElement.className = "red";

    const ChangeId = document.getElementById("minDivTag");
    ChangeId.id = "che";

    const changeContent = document.getElementById("andraP");
    changeContent.innerHTML = "detta är fortfarande andra p tag men inte samma innehåll";
}