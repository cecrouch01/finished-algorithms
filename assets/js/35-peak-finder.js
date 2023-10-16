  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
  const peakFinder = function(nums) {
    let position = 1;
    let peak = 0;
    if(nums.length === 1){
      peak = nums[0];
      return peak
    };
    while (position < nums.length) {
      let previousPosition = position - 1;
      let futurePosition = position + 1;
      if(nums[position] > nums[previousPosition] && nums[position] > nums[futurePosition]) {
        peak = nums[position];
      };
      position++
    };
    if(nums[0] > nums[nums.length - 1] && nums[0] > peak){
      peak = nums[0];
         return peak
    };
    if(nums[0] < nums[nums.length - 1] && peak < nums[nums.length -1]){
      peak = nums[nums.length - 1];
      return peak
    };
    return peak
  };
