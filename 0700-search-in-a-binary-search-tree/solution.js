var searchBST = function(root, val) {
    let result = null
    function helper(node) {
        if(!node) return
        if(node.val === val) {
            result = node
        }
        if(node.val > val) {
            helper(node.left)
        } else {
            helper(node.right)
        }
    }
    helper(root)
    return result
};
