var findMedianSortedArrays = function (nums1, nums2) {
  let mid = ~~(nums1.length + nums2.length) / 2
  let type = (nums1.length + nums2.length) % 2
  let i = 0,
    j = 0,
    k = 0,
    p = 0,
    q = 0
  while (i <= mid) {
    p = q
    if (j < nums1.length && k < nums2.length) {
      if (nums1[j] < nums2[k]) {
        q = nums1[j++]
      }else{
        q = nums2[k++]
      }
    } else if (j < nums1.length) {
      q = nums1[j++]
    } else {
      q = nums2[k++]
    }
    console.log(q,i,j,k)
    i++
  }
  return type === 1?q:(p+q)/2
};

console.log(findMedianSortedArrays([1,3,9,7,5],[4]))