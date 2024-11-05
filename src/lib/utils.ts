import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}
export const calculateUnitAmount = (product) => {
  const originalPrice = product.price; // e.g., 20
  const discountPercentage = product.discount || 0; // e.g., 10

  // Calculate the discount amount
  const discountAmount = (originalPrice * discountPercentage) / 100;

  // Calculate the final price after discount
  const finalPrice = originalPrice - discountAmount;

  // Round to the nearest integer
  const roundedPrice = Math.round(finalPrice);

  // Convert to cents
  const unitAmount = roundedPrice * 100; // in cents

  return unitAmount;
};
