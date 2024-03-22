function check(s1, s2) {
    const sortedS1 = s1.split('').sort().join('');
    const sortedS2 = s2.split('').sort().join('');

    if (sortedS1 === sortedS2) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

// Example usage:
const s1 = "naman";
const s2 = "manan";

check(s1, s2);
