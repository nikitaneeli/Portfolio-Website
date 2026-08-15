const slides = [
  [
    { name: "Jeb Bush", img: "pix/bush.jpg" },
    { name: "Ben Carson", img: "pix/carson.jpg" },
    { name: "Lincoln Chafee", img: "pix/chafee.jpg" },
    { name: "Chris Christie", img: "pix/christie.jpg" },
    { name: "Ted Cruz", img: "pix/cruz.jpg" },
    { name: "Carly Fiorina", img: "pix/fiorina.jpg" },
    { name: "Jim Gilmore", img: "pix/gilmore.jpg" },
  ],
  [
    { name: "Lindsey Graham", img: "pix/graham.jpg" },
    { name: "Bobby Jindal", img: "pix/jindal.jpg" },
    { name: "John Kasich", img: "pix/kasich.jpg" },
    { name: "Lawrence Lessig", img: "pix/lessig.jpg" },
    { name: "Martin O'Malley", img: "pix/omalley.jpg" },
    { name: "George Pataki", img: "pix/pataki.jpg" },
    { name: "Rand Paul", img: "pix/paul.jpg" },
  ],
  [
    { name: "Rick Perry", img: "pix/perry.jpg" },
    { name: "Marco Rubio", img: "pix/rubio.jpg" },
    { name: "Bernie Sanders", img: "pix/sanders.jpg" },
    { name: "Rick Santorum", img: "pix/santorum.jpg" },
    { name: "Donald Trump", img: "pix/trump.jpg" },
    { name: "Scott Walker", img: "pix/walker.jpg" },
    { name: "Jim Webb", img: "pix/webb.jpg" },
  ],
];

let indices = [0, 0, 0];

function updateSlide(index) {
  document.getElementById(`img${index + 1}`).src =
    slides[index][indices[index]].img;
  document.getElementById(`name${index + 1}`).textContent =
    slides[index][indices[index]].name;
}

function nextSlide(index) {
  indices[index] = (indices[index] + 1) % slides[index].length;
  updateSlide(index);
}

function prevSlide(index) {
  indices[index] =
    (indices[index] - 1 + slides[index].length) % slides[index].length;
  updateSlide(index);
}
