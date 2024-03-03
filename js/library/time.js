(function(global) {
    function MyTimeLib(input) {
        // Parse the input date
        this.date = new Date(input);
    }

    // Format the date
    MyTimeLib.prototype.format = function(pattern) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Simple implementation for 'YYYY-MM-DD' pattern
        if (pattern === 'YYYY-MM-DD') {
            let month = this.date.getMonth() + 1;
            month = month < 10 ? '0' + month : month;
            let day = this.date.getDate();
            day = day < 10 ? '0' + day : day;
            return `${this.date.getFullYear()}-${month}-${day}`;
        }
        // Implement more patterns as needed
    };

    // Add or subtract time
    MyTimeLib.prototype.add = function(value, type) {
        if (type === 'days') {
            this.date.setDate(this.date.getDate() + value);
        }
        // Implement more types as needed (hours, months, etc.)
        return this; // Allow chaining
    };

    MyTimeLib.prototype.subtract = function(value, type) {
        return this.add(-value, type); // Reuse add for subtraction
    };

    // Difference between two dates
    MyTimeLib.prototype.diff = function(otherDate, type) {
        const diffTime = Math.abs(this.date - new Date(otherDate));
        if (type === 'days') {
            return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
        // Implement more types as needed
    };

    // Expose the library
    global.MyTimeLib = MyTimeLib;
})(this);

// Usage
const myDate = new MyTimeLib('2023-01-01');
console.log(myDate.format('YYYY-MM-DD')); // Example usage
