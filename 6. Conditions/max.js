function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
    for (let num of nums) {
        if (num > max_num) {
            max_num = num; // Update max_num if a larger number is found
        }
    }
    return max_num;
}