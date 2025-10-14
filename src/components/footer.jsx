import React from "react";

export default function Footer() {
    return (
        <footer className="bg-light border-top py-3 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 row">
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-center justify-content-around">
                                <h3 className="text-center">NextApps Corporation</h3>
                                <img src="./logo.png" alt="Logo" width="128px" height="128px" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-around">
                            <div className="d-block">
                                <div className="text-center w-100">
                                    <p>📍 м. Київ, вул. Богдана Гаврилишина, 24</p>
                                    <p>📞 +38 (044) 123-45-67</p>
                                    <p>✉️ info@nextapps.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 row">
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-around">
                            <div>
                                <p className="social-link">
                                    <a href="https://www.instagram.com" target="_blank">
                                    <img
                                        src="./instagram_icon.png"
                                        alt="Instagram"
                                        className="sm-icon"
                                    />
                                    nextapps.off
                                    </a>
                                </p>
                                <p className="social-link">
                                    <a href="https://www.facebook.com" target="_blank">
                                    <img
                                        src="./facebook_icon.png"
                                        alt="Facebook"
                                        className="sm-icon"
                                    />
                                    NextAppsOff
                                    </a>
                                </p>
                                <p className="social-link">
                                    <a href="https://web.telegram.org/a" target="_blank">
                                    <img
                                        src="./telegram_icon.png"
                                        alt="Telegram"
                                        className="sm-icon"
                                    />
                                    nextapps.off
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-around">
                            <div className="d-block">
                                <div className="footer-links text-center w-100">
                                    <p><a href="">Головна</a></p>
                                    <p><a href="">Напрями діяльності</a></p>
                                    <p><a href="">Зворотній зв'язок</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-muted text-center m-0">© 2024 NextApps. All rights reserved.</p>
            </div>
        </footer>
    );
}