/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        const temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }

    const m = nums1.length;
    const n = nums2.length;

    let imin = 0;
    let imax = m;
    const halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        if (i < imax && nums2[j - 1] > nums1[i]) {
            imin = i + 1;
        } else if (i > imin && nums1[i - 1] > nums2[j]) {
            imax = i - 1;
        } else {
            let maxLeft = 0;
            if (i == 0) {
                if (j > 0) {
                    maxLeft = nums2[j - 1];
                }
            } else if (j == 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            let minRight = 0.0;
            if (i == m) {
                if (j < n) {
                    minRight = nums2[j];
                }
            } else if (j == n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            if ((n + m) % 2 == 1) {
                return maxLeft;
            }

            return (maxLeft + minRight) / 2;
        }
    }


    return 0.0;
};

module.exports = findMedianSortedArrays;
