
const readline = require('readline');

class GSTCalc {
    constructor() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.readline = rl;
    }

    getReadline() {
        return this.readline
    }

    closeInterface() {
        return this.readline.close()
    }

    async getAnswer(params) {
        return new Promise((resolve) => {
            const {
                question
            } = params;
            this.readline
                .question(question, answer => resolve(answer));
        });
    }
}

module.exports = GSTCalc;
