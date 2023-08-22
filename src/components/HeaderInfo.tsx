import React from "react"

export function HeaderInfo() {
    return (
        <div className="header__info">
            <div className="header__info-item">
                <img src="../assets/ShieldCheck.png"/>
                <div className="header__info-text">
                    <span className="header__info-text-grey">Compra</span>
                    <span className="header__info-text-pink">100% segura</span>
                </div>
            </div>
        </div>
    )
}