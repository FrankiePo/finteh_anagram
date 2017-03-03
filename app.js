/**
 * Created by frankiepo on 03/03/2017.
 */
(function () {
    "use strict";
    const s1 = prompt("Enter first string");
    const s2 = prompt("Enter second string");

    alert(s1.split("").sort().join() === s2.split("").sort().join());
})();
