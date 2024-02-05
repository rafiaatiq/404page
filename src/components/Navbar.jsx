

export default function Navbar () {
    return(
        <div className="h-20 w-full flex justify-between items-center absolute top-0 px-32 py-14">
            <div>
                <h1 className="text-[#5C4033] font-semibold text-xl underline underline-offset-[10px]">404 Page</h1>
            </div>

            <div className=" px-30 ">
                <ul className="flex gap-10 text-xl text-[#5C4033] font-semibold tracking-wider">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    )
}