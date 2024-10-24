import PropTypes from "prop-types";
const Time = ({times}) => {
    return (
        <div className="bg-slate-200 w-1/3 float-left mt-4 rounded-lg font-bold text-2xl text-purple-900">
            <h1 className="text-3xl p-4">Spent time on read : {times} min</h1>
        </div>
    );
};
Time.propTypes = {
    times: PropTypes.number
}
export default Time;