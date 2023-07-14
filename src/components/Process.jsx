export default function Process(props) {
    const { Tagline, Header, Body, Steps } = props

    if (!Steps) {
        return <div>failed to load</div>
    }

    return (
        <section
            className="editable-component relative bg-white py-20 lg:py-32"
            data-json="process"
        >
            {Header && (
                <div className="mx-auto px-6 pb-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                    <div className="mb-6 max-w-xl sm:text-center md:mx-auto md:mb-10 lg:max-w-2xl">
                        <div>
                            <p className="text-base font-bold uppercase leading-7 tracking-wide text-primary-800">
                                {Tagline}
                            </p>
                        </div>

                        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-neutral-800 sm:text-4xl sm:leading-tight">
                            {Header}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-neutral-800">
                            {Body}
                        </p>
                    </div>
                </div>
            )}

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/*Process Grid*/}
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <dl className="mx-auto grid max-w-xs grid-cols-1 gap-x-8 gap-y-20 sm:max-w-2xl sm:grid-cols-2 sm:gap-x-14 lg:max-w-none lg:grid-cols-4">
                        {Steps.slice(0, 4).map((Step, index) => (
                            <div
                                key={Step.Title}
                                className="flex flex-col text-neutral-800"
                            >
                                <div className="relative mb-2 flex min-h-[56px] justify-between">
                                    <h3 className="pr-7 text-2xl font-semibold leading-7">
                                        {Step.Title}
                                    </h3>
                                    <i
                                        className={`${
                                            Step.Icon
                                        } absolute right-0 top-0 ml-2 w-6 transform text-2xl text-primary-700 ${
                                            index === 3
                                                ? ''
                                                : 'rotate-90 sm:rotate-0'
                                        }`}
                                    />
                                </div>
                                <p className="flex-auto text-neutral-800">
                                    {Step.Description}
                                </p>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
