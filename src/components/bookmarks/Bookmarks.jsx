import PropTypes from "prop-types";
import Bookmark from "./bookmark/Bookmark";
import Time from "./bookmark/spent_time/Time";
const Bookmarks = ({ bookmarks, times }) => {
    return (
        <div>
            <Time times={times}></Time>
            <div className="md:w-1/3 md:float-right my-4 bg-slate-200 rounded-lg border-2 border-purple-700 px-6">
                <h1 className="font-bold text-2xl py-6">Bookmarked Blogs : {bookmarks.length}</h1>
                <div>
                    <Bookmark bookmarks={bookmarks}></Bookmark>
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    times: PropTypes.number
}
export default Bookmarks;