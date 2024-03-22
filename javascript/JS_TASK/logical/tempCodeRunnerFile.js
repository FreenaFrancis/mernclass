function formatAsCurrency(number, locale, currencyCode) {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode
    });

    return formatter.format(number);
}

// Example usage:
const amount = 2500;
const formattedAmount = formatAsCurrency(amount, 'en-US', 'USD');
console.log(formattedAmount);