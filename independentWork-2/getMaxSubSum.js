/* На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Например:
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.  */
getMaxSubSum = arr => {
    let sums = [];
    if (Math.max(...arr) < 0)
        return 0;
    else {
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];
                sums.push(sum);
            }
        }
        return Math.max(...sums);
    }
}

console.log([-1, 2, 3, -9], getMaxSubSum([-1, 2, 3, -9]));
console.log([2, -1, 2, 3, -9], getMaxSubSum([2, -1, 2, 3, -9]));
console.log([-1, 2, 3, -9, 11], getMaxSubSum([-1, 2, 3, -9, 11]));
console.log([-2, -1, 1, 2], getMaxSubSum([-2, -1, 1, 2]));
console.log([100, -9, 2, -3, 5], getMaxSubSum([100, -9, 2, -3, 5]));
console.log([1, 2, 3], getMaxSubSum([1, 2, 3]));
console.log([-1, -2, -3], getMaxSubSum([-1, -2, -3]));