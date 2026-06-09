const badges = [
  "HOT",
  "NEW",
  "TRENDING",
  "BEST SELLER",
  "LIMITED",
]

export const getProductBadge  = (productId) => {
  const badgeIndex = productId % badges.length;
  return badges[badgeIndex];
};