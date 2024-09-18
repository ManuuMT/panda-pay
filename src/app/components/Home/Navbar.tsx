export function Navbar() {
    return (
        <div className="altform fixed top-0 text-black w-full">
            <div className="flex w-full">
                <div className="flex w-3/4">
                    <div className="bg-black py-3 px-4 text-white flex justify-between w-2/5" style={{ borderRadius: "0 0 15px 0" }}>
                        <p className="text-lg">PandaPay</p>
                        <p>icon</p>
                    </div>
                    <div className="font-bold py-3 px-4">
                        <p>Welcome</p>
                    </div>
                </div>
                <div className="font-bold px-10 py-3 w-1/4 text-right">
                    <p>Support</p>
                </div>
            </div>
        </div>
    )
}
