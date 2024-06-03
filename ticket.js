function calculateTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
    
}
console.log('price tags');

function main() {
    try {
        let age = parseInt(prompt("Please enter your age: "));
        if (isNaN(age) || age < 0) {
            console.log("Please enter a valid age.");
        } else {
            let ticketPrice = calculateTicketPrice(age);
            console.log(`The price of your movie ticket is $${ticketPrice}.`);
        }
    } catch (error) {
        console.log("An error occurred. Please try again.");
    }
}

main();





function isLeapYear(year) {
    // Check if the year is divisible by 4 and not divisible by 100 unless it is also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
}

// Example usage:
let year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
