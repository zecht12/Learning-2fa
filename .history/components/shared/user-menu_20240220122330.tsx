import React from 'react'

const UserMenu = () => {
    return (
        <div className='gap-3 p-4 md:py-1 md:px-2 border-[1px] border-neutral-300 rounded-full bg-slate-100 flex justify-around items-center shadow-md shadow-neutral-500'>
        <Avatar src={user?.image} />
        <div className="relative">
            <AiOutlineMenu size={25} onClick={toggleMenu} className="text-black hover:text-blue-600 cursor-pointer" />
            {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 flex flex-col justify-center items-center">
                    <Button asChild variant="link" size="sm">
                        <Link href="/settings">
                            Settings
                        </Link>
                    </Button>
                    <Button asChild variant="link" size="sm">
                        <button type="submit" onClick={onClick}>
                            Sign Out
                        </button>
                    </Button>
                </div>
            )}
        </div>
    </div>
    )
}

export default UserMenu