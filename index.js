import 'babel-polyfill';
import Rectangle from './src/Rectangle.js'
import Main from './src/Main.js'

let r = new Rectangle(2,3);
console.log(r.toString());

(async () => {
    console.log("Do some async stuff...");
    let main = new Main();
    main.run();
})();
