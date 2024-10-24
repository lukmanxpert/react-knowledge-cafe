import PropTypes from "prop-types";
const Bookmark = ({bookmarks}) => {
    return (
        <div className="rounded-lg p-4">
            {
                bookmarks.map((bookmark, key) => <div className="" key={key}>
                    <h1 className="font-semibold text-lg p-4 rounded-lg bg-white">{bookmark.post_title}</h1>
                    <br />
                </div>)
            }
        </div>
    );
};
Bookmark.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmark;