// ==========================================
// AURELIA ESTATES
// JAVASCRIPT
// ==========================================


// ==========================================
// MOBILE MENU
// ==========================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            menuButton.textContent = "☰";

        });

    });

}


// ==========================================
// FAVORITE BUTTONS
// ==========================================

const favoriteButtons = document.querySelectorAll(".favorite-button");

favoriteButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        button.classList.toggle("active");

        if (button.classList.contains("active")) {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const interest = document.getElementById("interest").value;
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || interest === "") {

            alert(
                "Please complete your name, email, and enquiry type."
            );

            return;

        }

        alert(
            `Thank you, ${name}.\n\n` +
            "Your private enquiry has been received.\n" +
            "Our Aurelia Estates team will contact you shortly."
        );

        contactForm.reset();

    });

}


// ==========================================
// PROPERTY DATA
// ==========================================

const properties = [

    {
        location: "BANANA ISLAND · LAGOS",
        title: "The Meridian Residence",

        description:
            "A sophisticated private residence designed for exceptional modern living, featuring expansive interiors, refined finishes, and generous outdoor spaces.",

        beds: "5",
        baths: "6",
        size: "850 m²",
        price: "₦1.85B",

        images: [

            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"

        ]
    },


    {
        location: "PALM JUMEIRAH · DUBAI",
        title: "Azure Palm Villa",

        description:
            "An extraordinary waterfront villa combining contemporary architecture, private outdoor spaces, and spectacular views across Palm Jumeirah.",

        beds: "6",
        baths: "8",
        size: "1,120 m²",
        price: "$8.4M",

        images: [

            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"

        ]
    },


    {
        location: "MAYFAIR · LONDON",
        title: "The Mayfair House",

        description:
            "A refined London residence blending classic elegance with contemporary interiors, positioned in one of the city's most prestigious neighbourhoods.",

        beds: "4",
        baths: "5",
        size: "620 m²",
        price: "£7.2M",

        images: [

            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=85",

            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"

        ]
    }

];


// ==========================================
// PROPERTY DETAILS MODAL
// ==========================================

const propertyModal = document.getElementById("propertyModal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalLocation = document.getElementById("modalLocation");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const modalBeds = document.getElementById("modalBeds");
const modalBaths = document.getElementById("modalBaths");
const modalSize = document.getElementById("modalSize");
const modalPrice = document.getElementById("modalPrice");

const modalEnquire = document.getElementById("modalEnquire");

const galleryDots = document.querySelectorAll(".gallery-dot");


// ==========================================
// OPEN PROPERTY MODAL
// ==========================================

const propertyLinks = document.querySelectorAll(".property-bottom a");

propertyLinks.forEach((link, index) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const property = properties[index];

        if (!property) return;

        modalImage.style.backgroundImage =
            `url("${property.images[0]}")`;

        modalLocation.textContent = property.location;

        modalTitle.textContent = property.title;

        modalDescription.textContent =
            property.description;

        modalBeds.textContent =
            property.beds;

        modalBaths.textContent =
            property.baths;

        modalSize.textContent =
            property.size;

        modalPrice.textContent =
            property.price;


        galleryDots.forEach((dot, dotIndex) => {

            dot.classList.toggle(
                "active",
                dotIndex === 0
            );

        });


        propertyModal.dataset.propertyIndex = index;

        propertyModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// ==========================================
// CLOSE PROPERTY MODAL
// ==========================================

if (modalClose && propertyModal) {

    modalClose.addEventListener("click", () => {

        propertyModal.classList.remove("active");

        document.body.style.overflow = "";

    });


    propertyModal.addEventListener("click", (event) => {

        if (event.target === propertyModal) {

            propertyModal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}


// ==========================================
// ESCAPE KEY CLOSE
// ==========================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        propertyModal &&
        propertyModal.classList.contains("active")
    ) {

        propertyModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// ==========================================
// MODAL ENQUIRE BUTTON
// ==========================================

if (modalEnquire) {

    modalEnquire.addEventListener("click", () => {

        propertyModal.classList.remove("active");

        document.body.style.overflow = "";

        const contactSection =
            document.getElementById("contact");

        if (contactSection) {

            contactSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ==========================================
// PROPERTY IMAGE GALLERY
// ==========================================

galleryDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        const propertyIndex =
            Number(propertyModal.dataset.propertyIndex);

        const property =
            properties[propertyIndex];

        if (!property) return;

        modalImage.style.backgroundImage =
            `url("${property.images[index]}")`;


        galleryDots.forEach((item, dotIndex) => {

            item.classList.toggle(
                "active",
                dotIndex === index
            );

        });

    });

});


// ==========================================
// COLLECTION LINKS
// ==========================================

const collectionLinks =
    document.querySelectorAll(".collection-content a");

collectionLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "This collection is available through our private property advisors.\n\n" +
            "Submit an enquiry to learn more."
        );

    });

});


// ==========================================
// SCROLL ANIMATION
// ==========================================

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

sections.forEach(section => {

    observer.observe(section);

});


// ==========================================
// PROPERTY SEARCH
// ==========================================

const locationFilter =
    document.getElementById("locationFilter");

const propertySearch =
    document.getElementById("propertySearch");

const searchButton =
    document.getElementById("searchButton");

const propertyCards =
    document.querySelectorAll(".property-card");


function filterProperties() {

    const selectedLocation =
        locationFilter.value.toLowerCase();

    const searchTerm =
        propertySearch.value.toLowerCase().trim();

    let visibleProperties = 0;


    propertyCards.forEach((card, index) => {

        const property =
            properties[index];

        if (!property) return;


        const propertyLocation =
            property.location.toLowerCase();

        const propertyTitle =
            property.title.toLowerCase();


        const locationMatches =
            selectedLocation === "all" ||
            propertyLocation.includes(selectedLocation);


        const searchMatches =
            searchTerm === "" ||
            propertyTitle.includes(searchTerm) ||
            propertyLocation.includes(searchTerm);


        if (
            locationMatches &&
            searchMatches
        ) {

            card.style.display = "";

            visibleProperties++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleProperties === 0) {

        alert(
            "No properties matched your search.\n\n" +
            "Try another location or property name."
        );

    }

}


// Search button
if (searchButton) {

    searchButton.addEventListener(
        "click",
        filterProperties
    );

}


// Press Enter to search
if (propertySearch) {

    propertySearch.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                filterProperties();

            }

        }
    );

}


// Change location
if (locationFilter) {

    locationFilter.addEventListener(
        "change",
        filterProperties
    );

}


// ==========================================
// DARK MODE
// ==========================================

const themeToggle =
    document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeToggle.textContent = "☀";

        } else {

            themeToggle.textContent = "☾";

        }

    });

}


// ==========================================
// ANIMATED STATISTICS
// ==========================================

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;


                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.dataset.target
                    );


                const isMoney =
                    counter.textContent.includes("₦");


                let current = 0;

                const duration = 1500;

                const startTime =
                    performance.now();


                function updateCounter(currentTime) {

                    const progress =
                        Math.min(
                            (currentTime - startTime) /
                            duration,
                            1
                        );


                    current =
                        Math.floor(
                            progress * target
                        );


                    if (isMoney) {

                        counter.textContent =
                            `₦${current}B+`;

                    }

                    else if (target === 12) {

                        counter.textContent =
                            `${current}+`;

                    }

                    else {

                        counter.textContent =
                            current;

                    }


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );


                observer.unobserve(counter);

            });

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


// ==========================================
// WEBSITE LOADED
// ==========================================

console.log(
    "Aurelia Estates website loaded successfully."
);
