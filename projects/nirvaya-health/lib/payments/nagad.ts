/**
 * Nagad Payment Gateway Integration Stub
 * 
 * TODO FOR PRODUCTION:
 * 1. Obtain Nagad Merchant ID, Public Key, and Private Key.
 * 2. Set environment variables: NAGAD_MERCHANT_ID, NAGAD_PG_PUBLIC_KEY, NAGAD_MERCHANT_PRIVATE_KEY
 * 3. Replace mock token & signature verification with Nagad API v0.2.0 payload encryption.
 */

export interface NagadPaymentPayload {
  appointmentId: string;
  amount: number;
  customerPhone: string;
}

export async function processNagadPayment(payload: NagadPaymentPayload): Promise<{ success: boolean; issuerPaymentRefNo: string; message: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  const mockRef = 'NGD' + Math.floor(100000000 + Math.random() * 900000000);

  return {
    success: true,
    issuerPaymentRefNo: mockRef,
    message: `Nagad Payment of ৳${payload.amount} successful. Ref: ${mockRef}`
  };
}
