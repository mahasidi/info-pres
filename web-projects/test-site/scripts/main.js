const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_2665.JPG") {
    myImage.setAttribute("src", "images/matcha.jpeg");
  } else {
    myImage.setAttribute("src", "images/IMG_2665.JPG");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Here's a matcha review, ${myName}!`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Here's a matcha review, ${storedName}!`;
  }

  myButton.onclick = () => {
    setUserName();
  };