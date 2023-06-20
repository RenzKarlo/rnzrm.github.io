var typed = new Typed(".multiple-text", {
    strings: ["a Frontend Developer.", "a Guitar Player.", "an Online Gamer.", "a Cyclist."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true,
})

  const contacts = document.querySelectorAll('.contact');
let currentIndex = 0;

function showContact(index) {
  contacts.forEach((contact, i) => {
    if (i === index) {
      contact.classList.add('active');
    } else {
      contact.classList.remove('active');
    }
  });
}

function nextContact() {
  currentIndex = (currentIndex + 1) % contacts.length;
  showContact(currentIndex);
}

setInterval(nextContact, 10000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.fourcontent');
hiddenElements.forEach((el) => observer.observe(el));