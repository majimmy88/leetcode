function maxDepth(root: Node | null): number {
    if(root == null) {
        return 0
    }
    let max = 0

    function helper(node, level) {
        if(node.children.length === 0){
            max = Math.max(max, level)
            return
        }
        level++
        for(const child of node.children) {
            helper(child, level)
        }
    }
    helper(root, 1)
    return max
};
