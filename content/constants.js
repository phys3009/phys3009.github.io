const replacements = {
  OFFICEHOUR: "TBC",
  TEAMS:
    "https://teams.microsoft.com/l/team/19%3A12C7Y3ZuuGIpYVvfyG1rC4gOSbry0r0_4oAkt3uAHE01%40thread.tacv2/conversations?groupId=c8807884-6bae-4178-9bb3-eb4ce9563b14&tenantId=67bda7ee-fd80-41ef-ac91-358418290a1e",
  MYWEBPAGE: "https://www.nottingham.ac.uk/~ppzmis",
  MYOFFICE: "Room C126, main physics building",
  MYEMAIL:
    "mailto:mike.i.smith@nottingham.ac.uk?subject=Force%20and%20function%20query",
  SESSION1: "Monday 5-6pm in Physics C04",
  SESSION2: "Friday 4-5pm in Physics C04",
  LEARNINGDIFFERENCE: "https://xerte.nottingham.ac.uk/play_23883#page1",
  EXAMKIT:
    "https://www.nottingham.ac.uk/currentstudents/documents/healthyu/2021-documents/web-640597-scom-a5-20pp-examtoolkit-update-njt-feb22.pdf",
  YELLOWBOOK:
    "https://www.rethinkyourmind.co.uk/the-yellow-book/",
  AITUTOR:
    "window.open('https://phys3009.github.io/content/info_course/aitutor.html','_blank')",
  NOTEBOOK:
    "https://uniofnottm.sharepoint.com/:o:/r/sites/PHYS3009_2526/_layouts/15/Doc.aspx?sourcedoc=%7B13a395b1-2847-47bf-bc60-ddb8d13b7e03%7D&action=edit&wd=target(Welcome.one%7C72357540-ebad-4c0a-9165-65d7b7ed0ddc%2FForce%20%20function%20at%20the%20Nanoscale%20(PHYS3009%5C)%7C998644cb-6b3e-49d2-ab95-3bb224521e4d%2F)",
  ECHO:
    "https://echo360.org.uk/section/4f84b291-5a23-45b4-8642-1339d19d60fe/public"
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
