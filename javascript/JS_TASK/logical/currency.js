// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });

// const formattedValue = formatter.format(2500);

// console.log(formattedValue);


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

console.log(formattedAmount); // Output: "$2,500.00"
