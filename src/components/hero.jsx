import React from 'react'
import { logo } from '../assets'

const hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
                <button className="black_btn" type="button"
                    onClick={() => window.open("https://www.github.com/ayberkbalay"
                    )}>
                    Github
                </button>
            </nav>

            <h1 className="head_text">
                Summarize Articles with <br className="max-md:hidden" />
                <span className="orange_gradient">
                    OpenAI GPT-4
                </span>
            </h1>
            <h2 className="desc">
                Simplify your reading experience with Sumz. <br className="max-md:hidden" />
                Sumz is a free tool that summarizes articles in a single click.

            </h2>

        </header>
    )
}

export default hero