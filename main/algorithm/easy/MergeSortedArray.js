const merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (j >= 0) {
        if (i < 0 || nums2[j] > nums1[i]) {
            nums1[k] = nums2[j];
            j -= 1;
        } else {
            nums1[k] = nums1[i];
            i -= 1;
        }
        k -= 1;
    }
};

module.exports = merge;
