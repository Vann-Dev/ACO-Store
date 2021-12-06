export default function Store() {
    return (
        <section className="p-20">
            <div className="grid lg:flex mt-16 lg:mt-36 gap-6 justify-center">
                <button className="w-40 md:w-60 h-20 md:h-40 bg-green2 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110 rounded-tl-md rounded-bl-xl rounded-br-3xl">
                    <a className="text-white font-murecho text-md md:text-2xl lg:text-3xl" href="https://acostore.bukaolshop.site/akun/login/">Aco Store</a>
                </button>
                <button className="w-40 md:w-60 h-20 md:h-40 bg-green2 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110 rounded-tr-md rounded-br-xl rounded-bl-3xl">
                    <a className="text-white font-murecho text-md md:text-2xl lg:text-3xl" href="https://aco.toko.id/">Aco Indonesia</a>
                </button>
                <button className="w-40 md:w-60 h-20 md:h-40 bg-green2 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-5 hover:scale-110 rounded-tl-md rounded-bl-xl rounded-br-3xl">
                    <a className="text-white font-murecho text-md md:text-2xl lg:text-3xl" href="https://toko.ly/aco/">Aco Internasional</a>
                </button>
            </div>
        </section>
    )
}