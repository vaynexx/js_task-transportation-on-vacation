const DAILY_RATE = 40;
const DISCOUNT_3_DAYS = 20;
const DISCOUNT_7_DAYS = 50;

function calculateRentalCost(days) {
  let total = days * DAILY_RATE;

  if (days >= 7) {
    total = total - DISCOUNT_7_DAYS;
  }

  if (days >= 3 && days < 7) {
    total = total - DISCOUNT_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;