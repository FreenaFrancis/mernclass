function highestAltitude(n, gain) {
    let currentAltitude = 0, highestAltitude = 0;

    for (let i = 0; i < n; i++) {
        currentAltitude += gain[i];
        highestAltitude = Math.max(highestAltitude, currentAltitude);
    }

    return highestAltitude;
}

// Example 1
console.log(highestAltitude(5, [-5, 1, 5, 0, -7])); // Output: 1

// Example 2
console.log(highestAltitude(5, [-5, 1, 5, 0, 8])); // Output: 9
