function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if(!root) {
        return 0
    }
    if ( root.val >= low && root.val <= high) {
        return  root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
    } else {
        return rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
    }
};
