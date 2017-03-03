/**
 * Created by frankiepo on 03/03/2017.
 */
(function first() {
    "use strict";
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
})();

(function second() {
    "use strict";
    for (var i = 0; i < 10; i++) {
        (function (a) {
            setTimeout(function () {
                console.log(a);
            }, 1000);
        })(i);
    }
})();

(function third() {
    "use strict";
    const timeoutF = (a) => {
        console.log(a);
    };
    for (var i = 0; i < 10; i++) {
        const curriedF = timeoutF(i);
        setTimeout(curriedF, 1000);
    }
})();
