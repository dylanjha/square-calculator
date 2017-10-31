export const METHODS = {
  /* Swipe/ Chip/ Contactless/ Giftcard/ API Swipe or Insert */
  'swipe/chip/contactless-pos': {
    name: 'swipe/chip/contactless (pos)',
    description: 'Swipe, chip, contactless or giftcard on the POS app',
    rate: 0.0275,
    flat: 0
  },
  'swipe/chip/contactless-reg': {
    name: 'swipe/chip/contactless (register)',
    description: 'Swipe, chip, contactless or giftcard on Register',
    rate: 0.025,
    flat: 0.10
  },
  /* end Swipe/ Chip/ Contactless/ Giftcard/ API Swipe or Insert */

  /* Card on file/ Manual key in/ POS API Key in/ Virtual Terminal */
  /* 3.5% + 15c */
  'cof': {
    name: 'card on file (pos & register)',
    description: 'Card on file, for both POS app and Register',
    rate: 0.035,
    flat: 0.15
  },
  'manual': {
    name: 'manual entry (pos & register)',
    description: 'Manual, for both POS app and Register',
    rate: 0.035,
    flat: 0.15
  },
  /* end Card on file/ Manual key in/ POS API Key in/ Virtual Terminal */

  /* Invoices/Online Store/ eCommerce API / eCommerce COF */
  /* 2.9% + 30c */
  'invoice': {
    name: 'invoice',
    rate: 0.029,
    flat: 0.30
  },
  'invoice-cof': {
    name: 'invoice card on file',
    rate: 0.035,
    flat: 0.15
  },
  'online-store': {
    name: 'online store',
    rate: 0.029,
    flat: 0.30
  },
  'ecommerce/api': {
    name: 'ecommerce & api',
    rate: 0.029,
    flat: 0.30
  },
  'ecommerce/cof': {
    name: 'ecommerce card on file',
    rate: 0.029,
    flat: 0.30
  }
  /* end  Invoices/Online Store/ eCommerce API / eCommerce COF */
}
