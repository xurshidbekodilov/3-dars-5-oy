// 1-masala Sizga n soni beriladi. Uning eng kichik juft karralisini toping.
/*
function func(n) {
    let k = 2;
    while (k % 2 !== 0 || k % n !== 0) {
        k += 2;
    }
    return k;
}
console.log(func(61)) //122
*/

//2-masala Sizga to'g'ri to'rtburchakning tomonlari a va b beriladi, 
//siz uning yuzasi va perametrini topib quyidagi shartga tekshirishingiz kerak bo'ladi.
//Agar yuzasi perimetridan katta bo'lsa yuzasini aks holda peremetrini chiqaring
/*
function func(a,b){
    let S,P;
    S = a*b;
    P = 2*(a+b);
    if(S>P){
        return S;
    }
    else{
        return P;
    }
}
console.log(func(1,2)); //6
*/

//3-masala RoboBoyning poyezdi soat t da ketishi kerak edi, ammo u T soatga kechikdi. 
//Uni poyezdi nechchada ketishini topuvchi dastur tuzing.
/*
function func(t,T){
    let result;
    result = (t+T)%24;
    return result;
}
console.log(func(15,20)); //11
*/

//4-masala MIN AB -funksiya
/*
function func(N) {
    function MINAB(A, B) {
        const lengthA = A.toString().length;
        const lengthB = B.toString().length;
        return Math.min(lengthA, lengthB);
    }
    let minLength = Infinity;
    for (let A = 1; A <= Math.sqrt(N); A++) {
        if (N % A === 0) {
            let B = N / A;
            let currentLength = MINAB(A, B);
            minLength = Math.min(minLength, currentLength);
        }
    }
    return minLength;
}
*/

//5-masala Qiziqarki ketma ketlik.  Kunlardan bir kun Robotoy bir ketma-ketlikni 
//ko'rib qoldi. U quyidagicha:
//U ketma-ketlikni qiziqarli deb ataydi qachonki uning bo'luvchilar soni toq bo'lsa.
//Berilgan N uchun ketma-ketlik qiziqarli yoki yo'qligini aniqlang
/*
function func(N){
    const sum = Math.pow(N * (N + 1) / 2, 2);
    function countsec(num){
        let count = 0;
        for (let i = 1; i <= Math.sqrt(num); i++){
            if (num % i === 0){
                count++;
                if (i !== num / i){
                    count++;
                }
            }
        }
        return count;
    }
    const divisorsCount = countsec(sum);
    return divisorsCount % 2 === 1;
}
*/

//6-masala Tizimda jarima hisoblash
/*
function calculatePenalty(X, M){
    const penaltyFromErrors = X * 5;
    const time = M;
    const totalPenalty = time-time%5 + penaltyFromErrors;
    return totalPenalty;
}
console.log(calculatePenalty(5,21))
*/

//7-masala Tenglama (1054)
/*
function findABC(n){
    n = BigInt(n);
    for (let a = 1n; a * a * a <= n; a++){
        if (n % a === 0n){
            let n1 = n / a;
            for (let b = a + 1n; b * b <= n1; b++){
                if (n1 % b === 0n){
                    let c = n1 / b;
                    if (a !== b && b !== c && a !== c){
                        return `${a} ${b} ${c}`;
                    }
                }
            }
        }
    }

    return '-1';
}
*/

//8-masala Harorat (1095)
/*
function func(celsius){
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.80 + 32.00;
    console.log(kelvin.toFixed(5));
    console.log(fahrenheit.toFixed(5));
}
*/

//9-masala G'aroyib yig'indi (1099)
/*
function func(a,b){
    let sum = 0;
    if(a>b){
        min=b;
        max=a;
    }
    else{
        min=a;
        max=b;
    }
    for(let i=min; i<=max; i++){
        if(i%3==0 && i%7!==0){
            sum += i;
        }
    }
    return sum;
}
console.log(func(67,542))
*/

//10-masala Qiziqarli topshiriq ()
/*
function func(S, P) {
    for (let x = 1; x <= S; x++) {
        let y = S - x; 
        if (x * y === P) {
            return [x, y];
        }
    }
    return -1;
}
*/

//11-masala Karralilar yig'indisi (1094)
/*
function func(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
}
*/

//12-masala Bil Gates va Jurnalist (1097)
/*
function func(N) {
    let string = N.toString();
    let result = '';
    let foundNine = false;

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== '9' && !foundNine) {
            result += '9';
            foundNine = true;
        } else {
            result += strN[i];
        }
    }
    return BigInt(result);
}
*/

//13 masala Nollar soni (1100)
/*
function countTrailingZeros(n, m) {
    function countFactorialPrimeFactors(n, p) {
        let count = 0;
        while (n >= p) {
            count += Math.floor(n / p);
            n = Math.floor(n / p);
        }
        return count;
    }
    function countTrailingZerosInRange(n, m) {
        if (n > m) {
            [n, m] = [m, n];
        }
        let count2 = countFactorialPrimeFactors(m, 2) - countFactorialPrimeFactors(n - 1, 2);
        let count5 = countFactorialPrimeFactors(m, 5) - countFactorialPrimeFactors(n - 1, 5);
        return Math.min(count2, count5);
    }
    return countTrailingZerosInRange(n, m);
}
*/

//14-masala Ali va Vali (1137)
/*
function func(N, K) {
    if (K <= 1 || N % (K - 1) !== 0) {
        return -1;
    }
    let ValiAge = N / (K - 1);
    let AliAge = K * ValiAge;
    return [AliAge, ValiAge];
}
*/

//15-masala Uddalab bo'lmas topshiriq (1206)
/*
function func(N){
    let sum = 0;
    for(let i=0; i<=N; i++){
        sum += 1+3*i+3*i*i ;
    }
    return sum;
}
console.log(func(1))
*/