import React from "react"

const MainPage = () => {
    return (
        <section className="h-screen w-full bg-slate-800 flex">
            <div className="h-full xs:w-full sm:w-1/2">

            </div>
            <div className="h-full xs:w-full sm:w-full md:w-1/2 flex xs:px-6">
                <div className="my-auto">
                    <h1 class="xs:text-2xl sm:text-6xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-6 text-white font-bold">
                        Hola, <span className="text-red-400"> soy Esteban Quintana. </span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default MainPage;