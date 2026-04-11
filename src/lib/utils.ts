import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * GENERIC PAYMENT LINK GENERATOR (FORENSIC V390)
 * Safely constructs payment URLs based on entity and country context.
 * Strictly non-invasive: Zero modification to payment logic.
 */
export const generatePaymentLink = (params: {
  invoiceId: string;
  company?: string;
  country?: string;
  amount?: number;
  currency?: string;
  paymentMethod?: string;
  type?: string;
}): string => {
  const baseUrl = window.location.origin;
  const { invoiceId, ...rest } = params;
  
  const query = new URLSearchParams();
  Object.entries(rest).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });

  const queryString = query.toString();
  return `${baseUrl}/pay/${invoiceId}${queryString ? '?' + queryString : ''}`;
};
