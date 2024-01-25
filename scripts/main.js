const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_2329_Original.jpg") {
    myImage.setAttribute("src", "images/DSCN0658.jpg");
  } else {
    myImage.setAttribute("src", "images/IMG_2329_Original.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Hi, ${myName}! 👋🏾`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hi, ${storedName}! 👋🏾`;
  }

  myButton.onclick = () => {
    setUserName();
  };