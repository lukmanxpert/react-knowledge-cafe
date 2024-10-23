import profile from '../../assets/profile.png'
const Header = () => {
    return (
        <div className="my-4">
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                <div className="">
                    <img className="w-10" src={profile} alt="" />
                </div>
            </div>
            <hr className='my-2 mt-6 border' />
        </div>
    );
};

export default Header;