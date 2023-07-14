export default function CTAHero(props) {
    const { Header, Body, ImageUrl, CTA } = props

    if (!ImageUrl) {
        return <div>failed to load</div>
    }

    return (
        <section className="bg-primary-950">
            <div className="relative isolate overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-950 via-neutral-900 to-neutral-950 opacity-60"></div>
                <div
                    className="absolute inset-0 -z-20 h-full w-full bg-cover bg-fixed bg-center"
                    style={{ backgroundImage: `url(${ImageUrl})` }}
                />
                <div className="mx-auto min-h-[300px] max-w-4xl px-6 py-32 sm:min-h-[400px] sm:py-48 lg:min-h-[500px] lg:px-0">
                    <div className="text-center">
                        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:max-w-4xl lg:text-5xl">
                            {Header}
                        </h2>
                        <p className="text-balance mx-auto mt-6 max-w-2xl text-lg leading-8 text-white">
                            {Body}
                        </p>

                        {CTA && (
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a className="nj-lead focus-visible:transparent rounded-2xl bg-primary-700 px-5 py-5 text-xl font-bold text-white shadow-sm transition-all ease-in hover:bg-primary-600 focus-visible:outline focus-visible:outline-0 focus-visible:outline-offset-2">
                                    {CTA}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
