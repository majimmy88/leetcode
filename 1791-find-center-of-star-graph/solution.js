/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const first = edges[0][0]
    const second = edges[0][1]
    for(let i = 1; i < edges.length; i++) {
        if(edges[i][0] !== first && edges[i][1] !== first) {
            break
        }
        if(i === edges.length - 1) {
            return first
        }
    }
    for(let i = 1; i < edges.length; i++) {
        if(edges[i][0] !== second && edges[i][1] !== second) {
            break
        }
        if(i === edges.length - 1) {
            return second
        }
    }
};
