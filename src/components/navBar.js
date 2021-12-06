import { Link } from "react-router-dom";

export default function NavBar() {

    function hideShow() {
        const element = document.getElementById('navbar')
        if (element.classList.contains('hide')) {
            element.className = "slideRight"
            element.classList.add("show")
        } else {
            element.className = "slideLeft"
            element.classList.add("hide")
        }
    }

    function hide() {
        const element = document.getElementById('navbar')
        if (element.classList.contains('show')) {
            element.className = "slideLeft"
            element.classList.add("hide")
        }
    }

    return (
        <>
            <nav className="w-full sticky top-0 lg:relative h-16 z-50 bg-white shadow-sm p-3 flex justify-between items-center">
                <a href="/" className="flex items-center gap-2">
                    <div className="h-10 w-10">
                        <svg className="w-full h-full text-green2" width="152" height="166" viewBox="0 0 152 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M76 166C117.974 166 152 129.511 152 84.5C152 39.4888 117.974 3 76 3C34.0264 3 0 39.4888 0 84.5C0 129.511 34.0264 166 76 166ZM75.5 147C105.047 147 129 119.018 129 84.5C129 49.9822 105.047 22 75.5 22C45.9528 22 22 49.9822 22 84.5C22 119.018 45.9528 147 75.5 147Z" fill="currentcolor" />
                            <path d="M74.816 136.44C61.952 136.44 52.16 132.984 45.44 126.072C38.816 119.16 35.264 109.608 34.784 97.416C34.688 94.824 34.64 90.6 34.64 84.744C34.64 78.792 34.688 74.472 34.784 71.784C35.264 59.688 38.864 50.184 45.584 43.272C52.304 36.264 62.048 32.76 74.816 32.76C83.36 32.76 90.608 34.296 96.56 37.368C102.512 40.344 107.024 44.28 110.096 49.176C113.168 54.072 114.848 59.304 115.136 64.872V65.16C115.136 65.928 114.8 66.6 114.128 67.176C113.552 67.656 112.88 67.896 112.112 67.896H104.192C102.272 67.896 101.072 66.792 100.592 64.584C98.96 57.384 96.032 52.344 91.808 49.464C87.584 46.488 81.92 45 74.816 45C58.304 45 49.76 54.168 49.184 72.504C49.088 75.096 49.04 79.08 49.04 84.456C49.04 89.832 49.088 93.912 49.184 96.696C49.76 115.032 58.304 124.2 74.816 124.2C81.92 124.2 87.584 122.76 91.808 119.88C96.128 116.904 99.056 111.816 100.592 104.616C100.88 103.368 101.312 102.504 101.888 102.024C102.464 101.544 103.232 101.304 104.192 101.304H112.112C112.976 101.304 113.696 101.592 114.272 102.168C114.944 102.648 115.232 103.32 115.136 104.184C114.848 109.848 113.168 115.128 110.096 120.024C107.024 124.92 102.512 128.904 96.56 131.976C90.608 134.952 83.36 136.44 74.816 136.44Z" fill="currentcolor" />
                            <path d="M56.56 107C56.2187 107 55.92 106.872 55.664 106.616C55.408 106.36 55.28 106.061 55.28 105.72C55.28 105.379 55.3013 105.144 55.344 105.016L71.216 63.608C71.5573 62.6693 72.24 62.2 73.264 62.2H77.616C78.64 62.2 79.3227 62.6693 79.664 63.608L95.472 105.016L95.6 105.72C95.6 106.061 95.472 106.36 95.216 106.616C94.96 106.872 94.6613 107 94.32 107H91.056C90.5867 107 90.224 106.893 89.968 106.68C89.712 106.424 89.5413 106.168 89.456 105.912L85.936 96.824H64.944L61.424 105.912C61.3387 106.168 61.1467 106.424 60.848 106.68C60.592 106.893 60.2507 107 59.824 107H56.56ZM84.08 91.32L75.44 68.6L66.8 91.32H84.08Z" fill="currentcolor" />
                        </svg>
                    </div>
                    <p className="text-2xl hidden md:block font-murecho text-green2">ACO Indonesia</p>
                </a>
                <div className="flex gap-4 lg:hidden">
                    <Link onClick={hide} to={'/store'}>
                        <div className="h-8 w-8 text-green2 cursor-pointer hover:opacity-60">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="h-full w-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                        </div>
                    </Link>
                    <Link onClick={hide} to={'/contact'}>
                        <div className="h-8 w-8 text-green2 cursor-pointer hover:opacity-60">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" className="h-full w-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></svg>
                        </div>
                    </Link>
                    <div onClick={hideShow} className="h-8 w-8 cursor-pointer hover:opacity-60">
                        <div className="h-full w-full grid">
                            <div className="bg-green2 h-2 w-8 rounded-md"></div>
                            <div className="bg-green2 h-2 w-8 rounded-md"></div>
                            <div className="bg-green2 h-2 w-8 rounded-md"></div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex gap-6 text-2xl text-green2 font-murecho font-semibold">
                    <Link className="" to={'/store'}>ACO Store</Link>
                    <Link className="" to={'/contact'}>Contact</Link>
                </div>
            </nav>
            <div className="hidden lg:block sticky top-0 z-40">
                <div className="w-full h-16 text-2xl font-murecho text-white font-bold flex items-center justify-center gap-6 bg-green2">
                    <Link className="hover:text-green-300" to={'/product'}>Product</Link>
                    <a className="hover:text-green-300" href={'https://sites.google.com/view/wwwacopagehcom/about-us?authuser=0'}>About Us</a>
                    <Link className="hover:text-green-300" to={'/gallery'}>Gallery</Link>
                    <a className="hover:text-green-300" href={'https://sites.google.com/view/wwwacopagehcom/faq?authuser=0'}>Faq</a>
                </div>
            </div>
            <div id="navbar" className="hide">
                <div className="w-full overflow-hidden h-screen fixed z-30 bg-white p-6">
                    <div className="justify-end hidden lg:flex">
                        <div onClick={hideShow} className="text-green2 h-10 w-10 cursor-pointer  hover:opacity-60">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="h-full w-full" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                        </div>
                    </div>
                    <div className="text-center grid gap-10 text-4xl mt-20 text-green2 font-murecho font-semibold">
                        <Link onClick={hideShow} className="hover:opacity-60" to={'/product'}>Product</Link>
                        <a onClick={hideShow} className="hover:opacity-60" href={'https://sites.google.com/view/wwwacopagehcom/about-us?authuser=0'}>About Us</a>
                        <Link onClick={hideShow} className="hover:opacity-60" to={'/gallery'}>Gallery</Link>
                        <a onClick={hideShow} className="hover:opacity-60" href={'https://sites.google.com/view/wwwacopagehcom/faq?authuser=0'}>Faq</a>
                    </div>
                </div>
            </div>
        </>
    )
}