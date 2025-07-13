const recommendations = {
  html: [
    { title: "HTML Crash Course – Traversy", url: "https://youtu.be/UB1O30fR-EE" },
    { title: "HTML & CSS – freeCodeCamp", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" }
  ],
  python: [
    { title: "Python Beginners – CS50P", url: "https://cs50.harvard.edu/python" },
    { title: "Automate with Python – Udemy", url: "https://www.udemy.com/course/automate/" }
  ],
  js: [
    { title: "JavaScript in 1 Hour", url: "https://youtu.be/W6NZfCO5SIk" }
  ]
};

document.getElementById('ask').onclick = () => {
  const query = document.getElementById('query').value.toLowerCase();
  const key = query.includes("html") ? "html" :
              query.includes("python") ? "python" :
              query.includes("js") || query.includes("javascript") ? "js" : null;

  const list = document.getElementById('results');
  if (key && recommendations[key]) {
    list.innerHTML = recommendations[key].map(c =>
      `<li><a href="${c.url}" target="_blank">${c.title}</a></li>`).join('');
  } else {
    list.innerHTML = "<li>No matching courses found.</li>";
  }
};
