import PropTypes from 'prop-types';
const Post = ({ post, handleBookmarkBtn }) => {
    const { image_url, read_time, author_img, author_name, post_date, post_title, keyword} = post;
    return (
        <div className='pr-4 my-4'>
            <img className='rounded-lg w-full' src={image_url} alt="" />
            <div className='flex justify-between items-center my-4'>
                <div className='flex gap-4'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h1 className='font-bold text-2xl'>{author_name}</h1>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <p>{read_time} read<span className='ml-2'><button onClick={()=> handleBookmarkBtn(post)}><i className="fa-regular fa-bookmark"></i></button></span></p>
                </div>
            </div>
            <h1 className='font-bold text-4xl'>{post_title}</h1>
            <div>
                {
                    keyword.map((key, id)=> <span key={id}><a href="#">#{key}</a></span>)
                }
            </div>
            <div>
                <a className='underline font-semibold text-xl text-purple-700' href="#">Mark as read</a>
            </div>
            <hr className='my-8 border-2' />
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object.isRequired,
    handleBookmarkBtn: PropTypes.func
}
export default Post;