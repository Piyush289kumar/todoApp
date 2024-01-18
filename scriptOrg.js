const inputBox = document.querySelector("#inputBox");
const addTaskBtn = document.querySelector("#addTaskBtn");
const listContainer = document.querySelector("#listContainer");

addTaskBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    // listContainer.appendChild(li);
    listContainer.insertBefore(li,listContainer.childNodes[1]);

    
    let myDate = myFormatedDate();

    let span2 = document.createElement("span");
    span2.innerHTML = myDate;
    span2.setAttribute("class", "myDate");
    li.appendChild(span2);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    alert("Task Added !!");
  }

  inputBox.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (el) => {
    if (el.target.tagName === "LI") {
      el.target.classList.toggle("checked");
      saveData();
    } else if (el.target.tagName === "SPAN") {
      if (confirm("Do you remove task ?")) {
        el.target.parentElement.remove();
        saveData();
      }
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

(() => {
  listContainer.innerHTML = localStorage.getItem("data");
})();


console.log(myFormatedDate());

function myFormatedDate() {
  // Get the current date
  let toDay = new Date();

  // Get the day of the month
  let dd = toDay.getDate();

  // Get the month (adding 1 because months are zero-based)
  let mm = toDay.getMonth() + 1;

  // Get the year
  let yyyy = toDay.getFullYear();

  // Add Prefix zero(0) if the day is less then 10
  dd = dd < 10 ? (dd = "0" + dd) : dd;

  // Add Prefix zero(0) if the day is less then 10
  mm = mm < 10 ? (mm = "0" + mm) : mm;

  // Format the date as mm-dd-yyyy and log it
  return (toDay = `${mm}-${dd}-${yyyy}`);
}
