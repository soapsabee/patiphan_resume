
export const Navbar = () => {

    const moveTo = (target) => {
        const anchor = document.querySelector(`#${target}`)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    return <div class="flex flex-wrap place-items-center fixed top-0  left-0">
        <section class="relative mx-auto">
            {/* <!-- navbar --> */}
            <nav class="flex justify-between bg-zinc-800 text-white w-screen">
                <div class="px-5 xl:px-12 py-6 flex w-1/2 items-center">
                    <a class="text-3xl font-bold font-heading" href="#">
                        {/* <img class="h-9" src="logo.png" alt="logo"> --> */}
                        Patiphan
                    </a>
                    <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li><a class="hover:text-gray-200" onClick={() => moveTo("aboutme")}>About me</a></li>
                        <li><a class="hover:text-gray-200" onClick={() => moveTo("portfolio")}>Portfolio</a></li>
                    </ul>

                </div>

            </nav>

        </section>
    </div>
}