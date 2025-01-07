const replacements = {
  OFFICEHOUR: "Thursday from 10-11am",
  MYWEBPAGE: "https://www.nottingham.ac.uk/~ppzmis",
  MYOFFICE: "Room C126, main physics building",
  MYEMAIL: "mailto:mike.i.smith@nottingham.ac.uk",
  SESSION1: "Wednesday 9-10am in Chemistry X2",
  SESSION2: "Friday 12-1pm in Chemistry X2",
  LEARNINGDIFFERENCE: "https://xerte.nottingham.ac.uk/play_23883#page1",
  EXAMKIT:
    "https://www.nottingham.ac.uk/currentstudents/documents/healthyu/2021-documents/web-640597-scom-a5-20pp-examtoolkit-update-njt-feb22.pdf",
  YELLOWBOOK:
    "https://www.rethinkyourmind.co.uk/The-UoN-Physics-and-Astronomy-Yellow-Book-Online/?page=1"
};

function replaceValues() {
  const replace = document.querySelectorAll('.replace'); // Select all elements with the content class
  replace.forEach(element => {
    let html = element.innerHTML;
    for (const [placeholder, replacement] of Object.entries(replacements)) {
      html = html.replace(new RegExp(placeholder, 'g'), replacement);
    }
    element.innerHTML = html;
  });
}

// Run the replaceValues function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', replaceValues);
