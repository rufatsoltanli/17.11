const departaments = document.querySelector("#headerbot .leftside .departments")
const departamentsDropdown = document.querySelector("#headerbot .leftside .dropdown ul")

departaments.addEventListener("click", function () {
    departamentsDropdown.classList.toggle("dropdownunVisible")
    console.log(1);
})
console.log(departamentsDropdown);
console.log(departaments);

$(document).ready(function () {
    $('.cards-section').slick({
        // setting-name: setting - value
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<i class="fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="fa-solid fa-angle-right"></i>',
        autoplay: true,
        infinite: true,
        speed: 500,
    });

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
