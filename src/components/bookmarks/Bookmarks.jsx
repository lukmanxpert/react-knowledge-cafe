import PropTypes from "prop-types";
import Bookmark from "./bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 my-4 bg-slate-200 rounded-lg border-2 border-purple-700">
            <h1 className="font-bold text-2xl py-6">Bookmarked Blogs : {bookmarks.length}</h1>
            <div>
                <Bookmark bookmarks={Bookmarks}></Bookmark>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;