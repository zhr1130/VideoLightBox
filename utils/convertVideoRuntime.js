export default (runtime) => {
    return new Date(runtime * 1000).toISOString().substr(11,5);
}