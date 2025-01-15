const replacements = {
  OFFICEHOUR: "Thursday from 9-10am",
  TEAMS:
    "https://teams.microsoft.com/l/meetup-join/19%3a49d81d9220124e868233427d0113e21f%40thread.tacv2/1736253155345?context=%7b%22Tid%22%3a%2267bda7ee-fd80-41ef-ac91-358418290a1e%22%2c%22Oid%22%3a%22f18d392e-fb22-44ba-8546-47ae21668590%22%7d",
  MYWEBPAGE: "https://www.nottingham.ac.uk/~ppzmis",
  MYOFFICE: "Room C126, main physics building",
  MYEMAIL:
    "mailto:mike.i.smith@nottingham.ac.uk?subject=Force%20and%20function%20query",
  SESSION1: "Wednesday 9-10am in Chemistry X2",
  SESSION2: "Friday 12-1pm in Chemistry X2",
  LEARNINGDIFFERENCE: "https://xerte.nottingham.ac.uk/play_23883#page1",
  EXAMKIT:
    "https://www.nottingham.ac.uk/currentstudents/documents/healthyu/2021-documents/web-640597-scom-a5-20pp-examtoolkit-update-njt-feb22.pdf",
  YELLOWBOOK:
    "https://www.rethinkyourmind.co.uk/The-UoN-Physics-and-Astronomy-Yellow-Book-Online/?page=1",
  AITUTOR:
    "window.open('https://phys3009.github.io/content/info_course/aitutor.html/','_blank')"
};

function replaceValues() {
  const replace = document.querySelectorAll(".replace"); // Select all elements with the content class
  replace.forEach((element) => {
    let html = element.innerHTML;
    for (const [placeholder, replacement] of Object.entries(replacements)) {
      html = html.replace(new RegExp(placeholder, "g"), replacement);
    }
    element.innerHTML = html;
  });
}

// Run the replaceValues function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", replaceValues);
