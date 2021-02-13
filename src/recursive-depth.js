module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr)
      ? arr.length > 0
        ? Math.max(...arr.map((item) => 1 + this.calculateDepth(item)))
        : 1
      : 0;
  }
};
