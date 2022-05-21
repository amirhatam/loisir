import React from 'react'

export const Footer = () => {

    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating my-1 mx-2" target="_blank" href="https://portfolio-amir-hatam-dev.netlify.app/" role="button" title='Portfolio'>
                        <i className="fas fa-suitcase fa-lg"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating my-1 mx-2" target="_blank" href="https://www.linkedin.com/in/amir-hatam-7ba7601ba/" role="button" title='Linkedin'>
                        <i className="fab fa-linkedin-in fa-lg"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating my-1 mx-2" target="_blank" href="https://github.com/amirhatam" role="button" title='GitHub'>
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                </section>
            </div>

            <div className="text-center p-3 bg-dark" >
                Created in Avril 2022
                <a className="text-blue" target="_blank" href="https://github.com/amirhatam/loisir"> Source Code</a>
            </div>
        </footer>
    )
}
