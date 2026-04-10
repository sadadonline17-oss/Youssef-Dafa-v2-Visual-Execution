# Payment Flow Documentation

## Current Payment Flow Implementation

### Payment Method Detection
The payment method is determined from multiple sources (in priority order):
1. URL parameter: `?method=card` or `?method=bank_login`
2. Link payload: `linkData?.payload?.payment_method`
3. Default: `'card'`

### Payment Flow Routes

#### **Card Payment Flow**
```
PaymentRecipient 
  ↓ (customer info)
PaymentDetails 
  ↓ (method=card)
PaymentCardInput 
  ↓ (card validation)
PaymentOTP 
  ↓ (OTP verification)
PaymentReceipt
```

**Steps:**
1. **PaymentRecipient** - Collect recipient information
2. **PaymentDetails** - Display order summary
3. **PaymentCardInput** - Enter card details (Card Number, Expiry, CVV)
4. **PaymentOTP** - Enter OTP verification code
5. **PaymentReceipt** - Show payment confirmation

---

#### **Bank Login Payment Flow**
```
PaymentRecipient 
  ↓ (customer info)
PaymentDetails 
  ↓ (method=bank_login)
PaymentBankSelector 
  ↓ (select bank)
PaymentBankLogin 
  ↓ (bank credentials)
PaymentOTP 
  ↓ (OTP verification)
PaymentReceipt
```

**Steps:**
1. **PaymentRecipient** - Collect recipient information
2. **PaymentDetails** - Display order summary
3. **PaymentBankSelector** - Select bank from list
4. **PaymentBankLogin** - Enter bank credentials
5. **PaymentOTP** - Enter OTP verification code
6. **PaymentReceipt** - Show payment confirmation

---

## Implementation Details

### PaymentDetails.tsx - Flow Controller
```typescript
const handleProceed = () => {
  const paymentMethod = methodParam || linkData?.payload?.payment_method || 'card';
  
  const nextUrl = paymentMethod === 'bank_login' 
    ? `/pay/${id}/bank-selector?company=${serviceKey}&...`
    : `/pay/${id}/card-input?company=${serviceKey}&...`;
  
  navigate(nextUrl);
};
```

### URL Parameter Passing
All payment pages pass the following parameters:
- `company` - Service/company key (aramex, health, logistics, etc.)
- `currency` - Currency code (SAR, AED, etc.)
- `amount` - Payment amount
- `method` - Payment method (card or bank_login)

### Payment Method Selection
Users can select payment method at:
1. **Link Creation Time** - When creating payment link
2. **Payment Details Page** - Option to switch methods (if enabled)

---

## Services Payment Flow

### Health Services Payment
- **Link Creator**: `/create/:country/health-payment`
- **Payment Link**: `/pay/:id?company=health&method=card|bank_login`
- **Branding**: Red/Pink gradient

### Logistics Services Payment
- **Link Creator**: `/create/:country/logistics-payment`
- **Payment Link**: `/pay/:id?company=logistics&method=card|bank_login`
- **Branding**: Purple/Blue gradient

### Contract Services Payment
- **Link Creator**: `/create/:country/contract-payment`
- **Payment Link**: `/pay/:id?company=contract&method=card|bank_login`
- **Branding**: Amber/Orange gradient

### Government Services Payment
- **Link Creator**: `/create/:country/government/:serviceKey`
- **Payment Link**: `/pay/:id?company=government&method=card|bank_login`
- **Branding**: Government-specific colors

---

## Visual Customization

### Header Styling
All payment pages use:
- **Background**: Transparent with blur effect
- **Logo**: Removed from header
- **Text Color**: Service primary color
- **Border**: Service primary color bottom border

### Color System
Each service has its own color scheme:
- Primary Color: Main brand color
- Secondary Color: Accent color
- Surface Color: Background color
- Text Color: Derived from primary color

---

## Data Flow

### Link Data Structure
```typescript
{
  id: string;
  type: string; // 'health_payment', 'logistics_payment', etc.
  country_code: string;
  payload: {
    service_name: string;
    service_key: string;
    service_type: string;
    cod_amount: number;
    reference: string;
    description: string;
    payment_method: 'card' | 'bank_login';
    selectedCountry: string;
    customerInfo?: {
      name: string;
      email: string;
      phone: string;
      address: string;
    };
    selectedBank?: string;
  };
}
```

---

## Next Steps for Enhancement

1. **Payment Method Selection UI** - Add UI to switch payment methods on PaymentDetails page
2. **Payment Status Tracking** - Track payment status in real-time
3. **Payment History** - Store and display payment history
4. **Refund Management** - Handle refunds and cancellations
5. **Payment Analytics** - Track payment metrics and trends

---

## Testing Checklist

- [ ] Card payment flow completes successfully
- [ ] Bank login flow completes successfully
- [ ] Payment method parameter is correctly passed through all pages
- [ ] All service branding is correctly applied
- [ ] Header transparency and logo removal working
- [ ] OTP verification works for both methods
- [ ] Payment receipt displays correct information
- [ ] Mobile responsiveness maintained
