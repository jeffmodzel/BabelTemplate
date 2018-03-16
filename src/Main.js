

class Main {

    async run() {
        // wait for async method to finish
        let r = await this.someAsyncMethod();
        console.log(r);
    }

    async someAsyncMethod() {
        // wait for promise to complete
        let p = await new Promise(function(resolve, reject) {
            setTimeout(resolve, 5000, 'foo');
        });

        return "Done";
    }
}

export default Main;
