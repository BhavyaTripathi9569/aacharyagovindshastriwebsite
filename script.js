const SITE = {
  name: "Aacharya Govind Shastri",
  phone: "+91 98971 78920,+91 8273367920",
  whatsapp: "+91 9897178920",
  email: "acharya9227@gmail.com",
  location: "Naimisharanya, Uttar Pradesh, India",

  facebook:
    "https://www.facebook.com/raghavendra.mishra.818604",

  instagram:
    "https://www.instagram.com/raghavendramishra208?igsi=MTlyNjVtdzZtNXExaw==",

  youtube:
    "https://youtube.com/@acharyagovindshastri6893?si=yqWklWoXcAeDVBJO"
};


// --------------------
// CONTACT DETAILS
// --------------------

const details = document.getElementById("contactDetails");

if (details) {
  const rows = [
    [
      "Phone",
      SITE.phone,
      SITE.phone
        ? `tel:${SITE.phone.replace(/\s/g, "")}`
        : ""
    ],

    [
      "WhatsApp",
      SITE.whatsapp
        ? `+${SITE.whatsapp.replace(/^\+/, "")}`
        : "",
      SITE.whatsapp
        ? `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`
        : ""
    ],

    [
      "Email",
      SITE.email,
      SITE.email
        ? `mailto:${SITE.email}`
        : ""
    ],

    [
      "Location",
      SITE.location,
      ""
    ]
  ];

  rows.forEach(([label, value, href]) => {

    const div = document.createElement("div");

    div.className = "detail";

    const shown =
      value || "Contact information coming soon";

    div.innerHTML = `
      <b>${label}</b>
      ${
        href
          ? `<a href="${href}"
              ${
                label === "WhatsApp"
                  ? 'target="_blank" rel="noopener"'
                  : ""
              }>
              ${shown}
            </a>`
          : `<span>${shown}</span>`
      }
    `;

    details.appendChild(div);
  });
}


// --------------------
// YOUTUBE
// --------------------

const youtubeLink =
  document.getElementById("youtubeLink");

if (youtubeLink && SITE.youtube) {
  youtubeLink.href = SITE.youtube;
  youtubeLink.target = "_blank";
  youtubeLink.rel = "noopener";
}


// --------------------
// FACEBOOK
// --------------------

const facebookLink =
  document.getElementById("facebookLink");

if (facebookLink && SITE.facebook) {
  facebookLink.href = SITE.facebook;
  facebookLink.target = "_blank";
  facebookLink.rel = "noopener";
  facebookLink.removeAttribute("aria-disabled");
}


// --------------------
// INSTAGRAM
// --------------------

const instagramLink =
  document.getElementById("instagramLink");

if (instagramLink && SITE.instagram) {
  instagramLink.href = SITE.instagram;
  instagramLink.target = "_blank";
  instagramLink.rel = "noopener";
  instagramLink.removeAttribute("aria-disabled");
}


// --------------------
// FLOATING WHATSAPP
// --------------------

const wa =
  document.getElementById("waFloat");

if (wa && SITE.whatsapp) {

  const message =
    "Namaste, I would like to enquire about a consultation.";

  wa.href =
    `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}` +
    `?text=${encodeURIComponent(message)}`;

  wa.target = "_blank";
  wa.rel = "noopener";
}


// --------------------
// ENQUIRY FORM
// --------------------

const enquiryForm =
  document.getElementById("enquiryForm");

if (enquiryForm) {

  enquiryForm.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      const fd =
        new FormData(e.currentTarget);

      const text =
`Namaste Aacharya Ji,

My name is ${fd.get("name")}.

Phone: ${fd.get("phone")}

Email: ${fd.get("email") || "Not provided"}

Service: ${fd.get("service")}

Message:
${fd.get("message")}`;

      if (!SITE.whatsapp) {

        alert(
          "WhatsApp number is currently unavailable."
        );

        return;
      }

      const number =
        SITE.whatsapp.replace(/\D/g, "");

      const url =
        `https://wa.me/${number}` +
        `?text=${encodeURIComponent(text)}`;

      window.open(
        url,
        "_blank",
        "noopener"
      );
    }
  );
}


// --------------------
// REVEAL ANIMATIONS
// --------------------

const revealElements =
  document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );
          }
        });

      },

      {
        threshold: 0.08
      }
    );

  revealElements.forEach(
    el => observer.observe(el)
  );

} else {

  // Fallback for older browsers
  revealElements.forEach(
    el => el.classList.add("visible")
  );
}


// --------------------
// MOBILE MENU
// --------------------

const menuButton =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".links");

if (menuButton && navLinks) {

  menuButton.addEventListener(
    "click",
    () => {

      const open =
        navLinks.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(open)
      );
    }
  );

  navLinks
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {
          navLinks.classList.remove("open");
        }
      );

    });
}


// --------------------
// GALLERY LIGHTBOX
// --------------------

const dialog =
  document.getElementById("lightbox");

const dialogImage =
  document.getElementById("lightboxImg");

if (dialog && dialogImage) {

  document
    .querySelectorAll(".gallery button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const image =
            button.querySelector("img");

          if (image) {

            dialogImage.src =
              image.src;

            dialog.showModal();
          }
        }
      );

    });

  const closeButton =
    document.getElementById(
      "closeLightbox"
    );

  if (closeButton) {

    closeButton.onclick =
      () => dialog.close();

  }

  dialog.addEventListener(
    "click",
    e => {

      if (e.target === dialog) {
        dialog.close();
      }

    }
  );
}


// --------------------
// CURRENT YEAR
// --------------------

const year =
  document.getElementById("year");

if (year) {
  year.textContent =
    new Date().getFullYear();
}


// --------------------
// EMERGENCY VISIBILITY
// --------------------
// This makes sure content never disappears
// even if an animation fails.

setTimeout(() => {

  document
    .querySelectorAll(".reveal")
    .forEach(el => {

      el.classList.add("visible");

    });

}, 1000);
