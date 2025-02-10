let offCanvas = `
<div class="offcanvas__area">
    <div class="offcanvas__wrapper">
    <div class="offcanvas__content">
        <div class="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
            <div class="offcanvas__logo logo">
                <a href="index.html">
                <img src="assets/img/logo/logo.png" alt="logo">
                </a>
            </div>
            <div class="offcanvas__close">
                <button class="offcanvas__close-btn offcanvas-close-btn">
                <i class="fal fa-times"></i>
                </button>
            </div>
        </div>
        <div class="offcanvas__search mb-25">
            <form action="#">
                <input type="text" placeholder="What are you searching for?">
                <button type="submit"><i class="far fa-search"></i></button>
            </form>
        </div>
        <div class="mobile-menu fix mb-40"></div>

        <div class="offcanvas__map d-none d-lg-block mb-15">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38937891844!2d-80.30779416886581!3d25.78254537206004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1738673955982!5m2!1str!2str"></iframe>
        </div>

        <div class="offcanvas__contact mt-30 mb-20">
            <h4>Contact Info</h4>
            <ul>
                <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                    <i class="fal fa-map-marker-alt"></i>
                </div>
                <div class="offcanvas__contact-text">
                    <a target="_blank"
                        href="https://maps.app.goo.gl/k457ZBpG9meHsY4b6">12/A,
                        Mirnada City Tower, NYC</a>
                </div>
                </li>
                <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                    <i class="far fa-phone"></i>
                </div>
                <div class="offcanvas__contact-text">
                    <a href="tel:+012-345-6789">088889797697</a>
                </div>
                </li>
                <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                    <i class="fal fa-envelope"></i>
                </div>
                <div class="offcanvas__contact-text">
                    <a href="mailto:info@dotsoftwaresolutions.com">info@dotsoftwaresolutions.com</a>
                </div>
                </li>
            </ul>
        </div>
        <div class="offcanvas__social">
            <ul>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
    </div>
</div>
<div class="body-overlay"></div>
`;
document.getElementById("app-offCanvas").innerHTML = offCanvas;

