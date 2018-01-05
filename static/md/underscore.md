##通用函数
### 集合函数
#### each 

`s3.each(list, iteratee, [context])`

遍历**list**中的所有元素，按顺序用遍历输出每个元素。如果传递了**context**参数，则把**iteratee**绑定到**context**对象上。每次调用**iteratee**都会传递三个参数：(element, index, list)。如果**list**是个JavaScript对象，**iteratee**的参数是 (value, key, list))。返回**list**以方便链式调用。

```javascript
s3.each([1, 2, 3], alert);
=> alerts each number in turn...
s3.each({one: 1, two: 2, three: 3}, alert);
=> alerts each number value in turn...
```

注意：集合函数能在数组，对象，和类数组对象，比如arguments, NodeList和类似的数据类型上正常工作。 但是它通过鸭子类型工作，所以要避免传递一个不固定length属性的对象（注：对象或数组的长度（length）属性要固定的）。每个循环不能被破坏 - 打破， 使用s3.**find**代替，这也是很好的注意。

#### **map**

`s3.map(list, iteratee, [context])`
通过变换函数（**iteratee**迭代器）把**list**中的每个值映射到一个新的数组中（注：产生一个新的数组）。如果存在原生的**map**方法，就用原生**map**方法来代替。如果**list**是个JavaScript对象，**iteratee**的参数是(value, key, list)。

```javascript
s3.map([1, 2, 3], function(num){ return num * 3; });
=> [3, 6, 9]
s3.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
=> [3, 6, 9]
```

#### **reduce**

`s3.reduce(list, iteratee, [memo], [context])` 
 **reduce**方法把**list**中元素归结为一个单独的数值。**Memo**是reduce函数的初始值，reduce的每一步都需要由**iteratee**返回。这个迭代传递4个参数：memo,value 和 迭代的index（或者 key）和最后一个引用的整个 list。

如果没有**memo**传递给**reduce**的初始调用，**iteratee**不会被列表中的第一个元素调用。第一个元素将取代 传递给列表中下一个元素调用**iteratee**的**memo**参数，

```javascript
var sum = s3.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=> 6
```

#### **reduceRight**

`s3.reduceRight(list, iteratee, memo, [context])` 
**reducRight**是从右侧开始组合的元素的**reduce**函数，如果存在JavaScript 1.8版本的**reduceRight**，则用其代替。

```javascript
var list = [[0, 1], [2, 3], [4, 5]];
var flat = s3.reduceRight(list, function(a, b) { return a.concat(b); }, []);
=> [4, 5, 2, 3, 0, 1]
```

#### **find**

`s3.find(list, predicate, [context])` 
在**list**中逐项查找，返回第一个通过**predicate**迭代函数真值检测的元素值，如果没有值传递给测试迭代器将返回`undefined`。 如果找到匹配的元素，函数将立即返回，不会遍历整个list。

```javascript
var even = s3.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> 2
```

#### **filter**

`s3.filter(list, predicate, [context])` 
遍历**list**中的每个值，返回包含所有通过**predicate**真值检测的元素值。（注：如果存在原生**filter**方法，则用原生的**filter**方法。）

```javascript
var evens = s3.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [2, 4, 6]
```

#### **where**

`s3.where(list, properties)` 
遍历**list**中的每一个值，返回一个数组，这个数组包含包含**properties**所列出的属性的所有的键 - 值对。

```javascript
s3.where(listOfPlays, {author: "Shakespeare", year: 1611});
=> [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}]
```

#### **findWhere**

`s3.findWhere(list, properties)` 
遍历**list**中的每一个值，返回匹配**properties**所列出的属性的所有的键 - 值对的第一个值。

如果没有找到匹配的属性，或者**list**是空的，那么将返回*undefined*。

```javascript
s3.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
=> {year: 1918, newsroom: "The New York Times",
  reason: "For its public service in publishing in full so many official reports,
  documents and speeches by European statesmen relating to the progress and
  conduct of the war."}
```

#### **reject**

`s3.reject(list, predicate, [context])` 
返回**list**中没有通过**predicate**真值检测的元素集合，与**filter**相反。

```javascript
var odds = s3.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [1, 3, 5]
```

#### **every**

`s3.every(list, [predicate], [context])` 
如果**list**中的所有元素都通过**predicate**的真值检测就返回*true*。（注：如果存在原生的**every**方法，就使用原生的**every**。）

```javascript
s3.every([true, 1, null, 'yes'], s3.identity);
=> false
```

#### **some**

`s3.some(list, [predicate], [context])` 
如果**list**中有任何一个元素通过 **predicate** 的真值检测就返回*true*。一旦找到了符合条件的元素, 就直接中断对list的遍历. （注：如果存在原生的**some**方法，就使用原生的**some**。）

```javascript
s3.some([null, 0, 'yes', false]);
=> true
```

#### **contains**

`s3.contains(list, value)`
如果**list**包含指定的**value**则返回*true*（注：使用===检测）。如果**list** 是数组，内部使用**indexOf**判断。

```javascript
s3.contains([1, 2, 3], 3);
=> true
```

#### **invoke**

`s3.invoke(list, methodName, *arguments)` 
在**list**的每个元素上执行**methodName**方法。 任何传递给**invoke**的额外参数，**invoke**都会在调用**methodName**方法的时候传递给它。

```javascript
s3.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
=> [[1, 5, 7], [1, 2, 3]]
```

#### **pluck**

`s3.pluck(list, propertyName)` 
**pluck**也许是**map**最常使用的用例模型的简化版本，即萃取对象数组中某属性值，返回一个数组。

```javascript
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
s3.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]
```

#### **max**

`s3.max(list, [iteratee], [context])` 
返回**list**中的最大值。如果传递**iteratee**参数，**iteratee**将作为**list**中每个值的排序依据。如果**list**为空，将返回*-Infinity*，所以你可能需要事先用[isEmpty](http://www.bootcss.com/p/underscore/#isEmpty)检查 **list** 。

```javascript
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
s3.max(stooges, function(stooge){ return stooge.age; });
=> {name: 'curly', age: 60};
```

#### **min**

`s3.min(list, [iteratee], [context])` 
返回**list**中的最小值。如果传递**iteratee**参数，**iteratee**将作为**list**中每个值的排序依据。如果**list**为空，将返回*-Infinity*，所以你可能需要事先用[isEmpty](http://www.bootcss.com/p/underscore/#isEmpty)检查 **list** 。

```javascript
var numbers = [10, 5, 100, 2, 1000];
s3.min(numbers);
=> 2
```

#### **sortBy**

`s3.sortBy(list, iteratee, [context])` 
返回一个排序后的**list**拷贝副本。如果传递**iteratee**参数，**iteratee**将作为**list**中每个值的排序依据。迭代器也可以是字符串的属性的名称进行排序的(比如 length)。

```javascript
s3.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
=> [5, 4, 6, 3, 1, 2]
```

#### **groupBy**

`s3.groupBy(list, iteratee, [context])` 
把一个集合分组为多个集合，通过 **iterator** 返回的结果进行分组. 如果 **iterator** 是一个字符串而不是函数, 那么将使用 **iterator** 作为各元素的属性名来对比进行分组.

```javascript
s3.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
=> {1: [1.3], 2: [2.1, 2.4]}

s3.groupBy(['one', 'two', 'three'], 'length');
=> {3: ["one", "two"], 5: ["three"]}
```

#### **indexBy**

`s3.indexBy(list, iteratee, [context])` 
给定一个**list**，和 一个用来返回一个在列表中的每个元素键 的**iterator** 函数（或属性名）， 返回一个每一项索引的对象。和[groupBy](http://www.bootcss.com/p/underscore/#groupBy)非常像，但是当你知道你的键是唯一的时候可以使用**indexBy** 。

```javascript
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
s3.indexBy(stooges, 'age');
=> {
  "40": {name: 'moe', age: 40},
  "50": {name: 'larry', age: 50},
  "60": {name: 'curly', age: 60}
}
```

#### **countBy**

`s3.countBy(list, iteratee, [context])` 
排序一个列表组成一个组，并且返回各组中的对象的数量的计数。类似groupBy，但是不是返回列表的值，而是返回在该组中值的数目。

```javascript
s3.countBy([1, 2, 3, 4, 5], function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});
=> {odd: 3, even: 2}
```

#### **shuffle**

`s3.shuffle(list)` 
返回一个随机乱序的 **list** 副本, 使用 [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher%E2%80%93Yatess3shuffle) 来进行随机乱序.

```javascript
s3.shuffle([1, 2, 3, 4, 5, 6]);
=> [4, 1, 6, 3, 5, 2]
```

#### **sample**

`s3.sample(list, [n])` 
从 **list**中产生一个随机样本。传递一个数字表示从**list**中返回**n**个随机元素。否则将返回一个单一的随机项。

```javascript
s3.sample([1, 2, 3, 4, 5, 6]);
=> 4

s3.sample([1, 2, 3, 4, 5, 6], 3);
=> [1, 6, 2]
```

#### **toArray**

`s3.toArray(list)` 
把**list**(任何可以迭代的对象)转换成一个数组，在转换 **arguments** 对象时非常有用。

```javascript
(function(){ return s3.toArray(arguments).slice(1); })(1, 2, 3, 4);
=> [2, 3, 4]
```

#### **size**

`s3.size(list)` 
返回**list**的长度。

```javascript
s3.size({one: 1, two: 2, three: 3});
=> 3
```

#### **partition**

`s3.partition(array, predicate)` 
拆分一个数组（**array**）为两个数组： 第一个数组其元素都满足**predicate**迭代函数， 而第二个的所有元素均不能满足**predicate**迭代函数。

```javascript
s3.partition([0, 1, 2, 3, 4, 5], isOdd);
=> [[1, 3, 5], [0, 2, 4]]
```



### 数组函数（Arrays）

#### **first**

`s3.first(array, [n])` 
返回**array（数组）**的第一个元素。传递 **n**参数将返回数组中从第一个元素开始的**n**个元素（注：返回数组中前 **n** 个元素.）。

```javascript
s3.first([5, 4, 3, 2, 1]);
=> 5
```

#### **initial**

`s3.initial(array, [n])` 
返回数组中除了最后一个元素外的其他全部元素。 在arguments对象上特别有用。传递 **n**参数将从结果中排除从最后一个开始的**n**个元素（注：排除数组后面的 **n** 个元素）。

```javascript
s3.initial([5, 4, 3, 2, 1]);
=> [5, 4, 3, 2]
```

#### **last**

`s3.last(array, [n])` 
返回**array（数组）**的最后一个元素。传递 **n**参数将返回数组中从最后一个元素开始的**n**个元素（注：返回数组里的后面的**n**个元素）。

```javascript
s3.last([5, 4, 3, 2, 1]);
=> 1
```

#### **rest**

`s3.rest(array, [index])` 别名： **tail, drop** 
返回数组中除了第一个元素外的其他全部元素。传递 **index** 参数将返回从**index**开始的剩余所有元素 。

```javascript
s3.rest([5, 4, 3, 2, 1]);
=> [4, 3, 2, 1]
```

#### **compact**

`s3.compact(array)` 
返回一个除去所有*false*值的 **array**副本。 在javascript中, *false*, *null*, *0*, *""*, *undefined* 和 *NaN* 都是*false*值.

```javascript
s3.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
```

#### **flatten**

`s3.flatten(array, [shallow])` 
将一个嵌套多层的数组 **array（数组）** (嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 **shallow**参数，数组将只减少一维的嵌套。

```javascript
s3.flatten([1, [2], [3, [[4]]]]);
=> [1, 2, 3, 4];

s3.flatten([1, [2], [3, [[4]]]], true);
=> [1, 2, 3, [[4]]];
```

#### **without**

`s3.without(array, *values)` 
返回一个删除所有**values**值后的 **array**副本。

```javascript
s3.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
=> [2, 3, 4]
```

#### **union**

`s3.union(*arrays)` 
返回传入的 **arrays（数组）**并集：按顺序返回，返回数组的元素是唯一的，可以传入一个或多个 **arrays（数组）**。

```javascript
s3.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
=> [1, 2, 3, 101, 10]
```

#### **intersection**

`s3.intersection(*arrays)` 
返回传入 **arrays（数组）**交集。结果中的每个值是存在于传入的每个**arrays（数组）**里。

```javascript
s3.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
=> [1, 2]
```

#### **difference**

`s3.difference(array, *others)` 
类似于**without**，但返回的值来自**array**参数数组，并且不存在于**other** 数组.

```javascript
s3.difference([1, 2, 3, 4, 5], [5, 2, 10]);
=> [1, 3, 4]
```

#### **uniq**

`s3.uniq(array, [isSorted], [iteratee])`
返回 **array**去重后的副本, 使用 *===* 做相等测试. 如果您确定 **array** 已经排序, 那么给 **isSorted** 参数传递 *true*值, 此函数将运行的更快的算法. 如果要处理对象元素, 传参 **iterator** 来获取要对比的属性.

```javascript
s3.uniq([1, 2, 1, 3, 1, 4]);
=> [1, 2, 3, 4]
```

#### **zip**

`s3.zip(*arrays)` 
将 每个**arrays**中相应位置的值合并在一起。在合并分开保存的数据时很有用. 如果你用来处理矩阵嵌套数组时, s3.zip.apply 可以做类似的效果。

```javascript
s3.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
=> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

s3.zip.apply(s3, arrayOfRowsOfData);
=> arrayOfColumnsOfData
```

#### **object**

`s3.object(list, [values])` 
将数组转换为对象。传递任何一个单独[key, value]对的列表，或者一个键的列表和一个值得列表。 如果存在重复键，最后一个值将被返回。

```javascript
s3.object(['moe', 'larry', 'curly'], [30, 40, 50]);
=> {moe: 30, larry: 40, curly: 50}

s3.object([['moe', 30], ['larry', 40], ['curly', 50]]);
=> {moe: 30, larry: 40, curly: 50}
```

#### **indexOf**

`s3.indexOf(array, value, [isSorted])` 
返回**value**在该 **array** 中的索引值，如果**value**不存在 **array**中就返回*-1*。使用原生的**indexOf** 函数，除非它失效。如果您正在使用一个大数组，你知道数组已经排序，传递true给**isSorted**将更快的用二进制搜索..,或者，传递一个数字作为第三个参数，为了在给定的索引的数组中寻找第一个匹配值。

```javascript
s3.indexOf([1, 2, 3], 2);
=> 1
```

#### **lastIndexOf**

`s3.lastIndexOf(array, value, [fromIndex])` 
返回**value**在该 **array** 中的从最后开始的索引值，如果**value**不存在 **array**中就返回*-1*。如果支持原生的**lastIndexOf**，将使用原生的**lastIndexOf**函数。 传递**fromIndex**将从你给定的索性值开始搜索。

```javascript
s3.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
=> 4
```

#### **sortedIndex**

`s3.sortedIndex(list, value, [iteratee], [context])` 
使用二分查找确定**value**在**list**中的位置序号，**value**按此序号插入能保持**list**原有的排序。 如果提供**iterator**函数，**iterator**将作为list排序的依据，包括你传递的**value** 。 **iterator**也可以是字符串的属性名用来排序(比如length)。

```javascript
s3.sortedIndex([10, 20, 30, 40, 50], 35);
=> 3

var stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
s3.sortedIndex(stooges, {name: 'larry', age: 50}, 'age');
=> 1
```

#### **range**

`s3.range([start], stop, [step])` 
一个用来创建整数灵活编号的列表的函数，便于each 和 map循环。如果省略**start**则默认为 *0*；**step** 默认为 *1*.返回一个从**start** 到**stop**的整数的列表，用**step**来增加 （或减少）独占。值得注意的是，如果**stop**值在**start**前面（也就是**stop**值小于**start**值），那么值域会被认为是零长度，而不是负增长。-如果你要一个负数的值域 ，请使用负数**step**.

```javascript
s3.range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
s3.range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
s3.range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
s3.range(0, -10, -1);
=> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
s3.range(0);
=> []
```



### 函数（Functions）

#### **bind**

`s3.bind(function, object, *arguments)` 
绑定函数 **function** 到对象 **object** 上, 也就是无论何时调用函数, 函数里的 *this* 都指向这个 **object**. 任意可选参数 **arguments** 可以传递给函数 **function** , 可以填充函数所需要的参数, 这也被称为 **partial application**。对于没有结合上下文的**partial application**绑定，请使用[partial](http://www.bootcss.com/p/underscore/#partial)。 

```javascript
var func = function(greeting){ return greeting + ': ' + this.name };
func = s3.bind(func, {name: 'moe'}, 'hi');
func();
=> 'hi: moe'
```

#### **bindAll**

`s3.bindAll(object, *methodNames)` 
把**methodNames**参数指定的一些方法绑定到**object**上，这些方法就会在对象的上下文环境中执行。绑定函数用作事件处理函数时非常便利，否则函数被调用时*this*一点用也没有。**methodNames**参数是必须的。

```javascript
var buttonView = {
  label  : 'underscore',
  onClick: function(){ alert('clicked: ' + this.label); },
  onHover: function(){ console.log('hovering: ' + this.label); }
};
s3.bindAll(buttonView, 'onClick', 'onHover');
// When the button is clicked, this.label will have the correct value.
jQuery('#underscores3button').bind('click', buttonView.onClick);
```

#### **partial**

`s3.partial(function, *arguments)` 
局部应用一个函数填充在任意个数的 **参数**，*不*改变其动态this值。和[bind](http://www.bootcss.com/p/underscore/#bind)方法很相近。你可以在你的参数列表中传递s3来指定一个参数 ，不应该被预先填充， but left open to supply at call-time. You may pass s3 in your list of **arguments** to specify an argument that should not be pre-filled, but left open to supply at call-time.（翻译不好，求好的翻译）

```javascript
var add = function(a, b) { return a + b; };
add5 = s3.partial(add, 5);
add5(10);
=> 15
```

#### **memoize**

`s3.memoize(function, [hashFunction])` 
Memoizes方法可以缓存某函数的计算结果。对于耗时较长的计算是很有帮助的。如果传递了 **hashFunction** 参数，就用 **hashFunction** 的返回值作为key存储函数的计算结果。**hashFunction** 默认使用function的第一个参数作为key。memoized值的缓存 可作为 返回函数的cache属性。

```javascript
var fibonacci = s3.memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});
```

#### **delay**

`s3.delay(function, wait, *arguments)` 
类似**setTimeout**，等待**wait**毫秒后调用**function**。如果传递可选的参数**arguments**，当函数**function**执行时， **arguments** 会作为参数传入。

```javascript
var log = s3.bind(console.log, console);
s3.delay(log, 1000, 'logged later');
=> 'logged later' // Appears after one second.
```

#### **defer**

`s3.defer(function, *arguments)` 
延迟调用**function**直到当前调用栈清空为止，类似使用延时为0的**setTimeout**方法。对于执行开销大的计算和无阻塞UI线程的HTML渲染时候非常有用。 如果传递**arguments**参数，当函数**function**执行时， **arguments** 会作为参数传入。

```javascript
s3.defer(function(){ alert('deferred'); });
// Returns from the function before the alert runs.
```

#### **throttle**

`s3.throttle(function, wait, [options])` 
创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 **wait**毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。

默认情况下，**throttle**将在你调用的第一时间尽快执行这个**function**，并且，如果你在**wait**周期内调用任意次数的函数，都将尽快的被覆盖。如果你想禁用第一次首先执行的话，传递{leading: false}，还有如果你想禁用最后一次执行的话，传递{trailing: false}。

```javascript
var throttled = s3.throttle(updatePosition, 100);
$(window).scroll(throttled);
```

#### **debounce**

`s3.debounce(function, wait, [immediate])` 
返回 **function** 函数的防反跳版本, 将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 **wait** 毫秒之后. 对于必须在一些输入（多是一些用户操作）停止到达*之后*执行的行为有帮助。 例如: 渲染一个Markdown格式的评论预览, 当窗口停止改变大小之后重新计算布局, 等等.

传参 **immediate** 为 true， **debounce**会在 **wait** 时间间隔的开始调用这个函数 。（注：并且在 waite 的时间之内，不会再次调用。）在类似不小心点了提交按钮两下而提交了两次的情况下很有用。 

```javascript
var lazyLayout = s3.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
```

#### **once**

`s3.once(function)` 
创建一个只能调用一次的函数。重复调用改进的方法也没有效果，只会返回第一次执行时的结果。 作为初始化函数使用时非常有用, 不用再设一个boolean值来检查是否已经初始化完成.

```javascript
var initialize = s3.once(createApplication);
initialize();
initialize();
// Application is only created once.
```

#### **after**

`s3.after(count, function)` 
创建一个函数, 只有在运行了 **count** 次之后才有效果. 在处理同组异步请求返回结果时, 如果你要确保同组里所有异步请求完成之后才 执行这个函数, 这将非常有用。

```javascript
var renderNotes = s3.after(notes.length, render);
s3.each(notes, function(note) {
  note.asyncSave({success: renderNotes});
});
// renderNotes is run once, after all notes have saved.
```

#### **before**

`s3.before(count, function)` 
创建一个函数,调用不超过**count** 次。 当**count**已经达到时，最后一个函数调用的结果 是被记住并返回 。

```javascript
var monthlyMeeting = s3.before(3, askForRaise);
monthlyMeeting();
monthlyMeeting();
monthlyMeeting();
// the result of any subsequent calls is the same as the second call
```

#### **wrap**

`s3.wrap(function, wrapper)` 
将第一个函数 **function** 封装到函数 **wrapper** 里面, 并把函数 **function** 作为第一个参数传给 **wrapper**. 这样可以让 **wrapper** 在 **function** 运行之前和之后 执行代码, 调整参数然后附有条件地执行.

```javascript
var hello = function(name) { return "hello: " + name; };
hello = s3.wrap(hello, function(func) {
  return "before, " + func("moe") + ", after";
});
hello();
=> 'before, hello: moe, after'
```

#### **negate**

`s3.negate(predicate)` 
返回一个新的**predicate**函数的否定版本。

```javascript
var isFalsy = s3.negate(Boolean);
s3.find([-2, -1, 0, 1, 2], isFalsy);
=> 0
```

#### **compose**

`s3.compose(*functions)` 
返回函数集 **functions** 组合后的复合函数, 也就是一个函数执行完之后把返回的结果再作为参数赋给下一个函数来执行. 以此类推. 在数学里, 把函数 *f()*, *g()*, 和 *h()* 组合起来可以得到复合函数 *f(g(h()))*。

```javascript
var greet    = function(name){ return "hi: " + name; };
var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
var welcome = s3.compose(greet, exclaim);
welcome('moe');
=> 'hi: MOE!'
```



### 对象函数（Object）

#### **keys**

`s3.keys(object)` 
获取**object**对象所有的属性名称。

```javascript
s3.keys({one: 1, two: 2, three: 3});
=> ["one", "two", "three"]
```

#### **values**

`s3.values(object)` 
返回**object**对象所有的属性值。

```javascript
s3.values({one: 1, two: 2, three: 3});
=> [1, 2, 3]
```

#### **pairs**

`s3.pairs(object)` 
把一个对象转变为一个[key, value]形式的数组。

```javascript
s3.pairs({one: 1, two: 2, three: 3});
=> [["one", 1], ["two", 2], ["three", 3]]
```

#### **invert**

`s3.invert(object)` 
返回一个**object**副本，使其键（keys）和值（values）对换。对于这个操作，必须确保object里所有的值都是唯一的且可以序列号成字符串.

```javascript
s3.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
=> {Moses: "Moe", Louis: "Larry", Jerome: "Curly"};
```

#### **functions**

`s3.functions(object)` 
返回一个对象里所有的方法名, 而且是已经排序的 — 也就是说, 对象里每个方法(属性值是一个函数)的名称.

```javascript
s3.functions(s3);
=> ["all", "any", "bind", "bindAll", "clone", "compact", "compose" ...
```

#### **extend**

`s3.extend(destination, *sources)` 
复制**source**对象中的所有属性覆盖到**destination**对象上，并且返回 **destination** 对象. 复制是按顺序的, 所以后面的对象属性会把前面的对象属性覆盖掉(如果有重复).

```javascript
s3.extend({name: 'moe'}, {age: 50});
=> {name: 'moe', age: 50}
```

#### **pick**

`s3.pick(object, *keys)` 
返回一个**object**副本，只过滤出**keys**(有效的键组成的数组)参数指定的属性值。或者接受一个判断函数，指定挑选哪个key。

```javascript
s3.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
=> {name: 'moe', age: 50}
s3.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return s3.isNumber(value);
});
=> {age: 50}
```

#### **omit**

`s3.omit(object, *keys)` 
返回一个**object**副本，只过滤出除去**keys**(有效的键组成的数组)参数指定的属性值。 或者接受一个判断函数，指定忽略哪个key。

```javascript
s3.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
=> {name: 'moe', age: 50}
s3.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
  return s3.isNumber(value);
});
=> {name: 'moe', userid: 'moe1'}
```

#### **defaults**

`s3.defaults(object, *defaults)` 
用**defaults**对象填充**object** 中的undefined属性。 并且返回这个**object**。一旦这个属性被填充，再使用defaults方法将不会有任何效果。

```javascript
var iceCream = {flavor: "chocolate"};
s3.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=> {flavor: "chocolate", sprinkles: "lots"}
```

#### **clone**

`s3.clone(object)` 
创建 一个浅复制（浅拷贝）的克隆**object**。任何嵌套的对象或数组都通过引用拷贝，不会复制。

```javascript
s3.clone({name: 'moe'});
=> {name: 'moe'};
```

#### **tap**

`s3.tap(object, interceptor)` 
用 **object**作为参数来调用函数**interceptor**，然后返回**object**。这种方法的主要意图是作为函数链式调用 的一环, 为了对此对象执行操作并返回对象本身。

```javascript
s3.chain([1,2,3,200])
  .filter(function(num) { return num % 2 == 0; })
  .tap(alert)
  .map(function(num) { return num * num })
  .value();
=> // [2, 200] (alerted)
=> [4, 40000]
```

#### **has**

`s3.has(object, key)` 
对象是否包含给定的键吗？等同于object.hasOwnProperty(key)，但是使用hasOwnProperty 函数的一个安全引用，以防[意外覆盖](http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/)。

```javascript
s3.has({a: 1, b: 2, c: 3}, "b");
=> true
```

#### **property**

`s3.property(key)` 
返回一个函数，这个函数返回任何传入的对象的key 属性。

```javascript
var moe = {name: 'moe'};
'moe' === s3.property('name')(moe);
=> true
```

#### **matches**

`s3.matches(attrs)` 
返回一个断言函数，这个函数会给你一个断言 可以用来辨别 给定的对象是否匹配**attrs**指定键/值属性。

```javascript
var ready = s3.matches({selected: true, visible: true});
var readyToGoList = s3.filter(list, ready);
```

#### **isEqual**

`s3.isEqual(object, other)` 
执行两个对象之间的优化深度比较，确定他们是否应被视为相等。

```javascript
var moe   = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone = {name: 'moe', luckyNumbers: [13, 27, 34]};
moe == clone;
=> false
s3.isEqual(moe, clone);
=> true
```

#### **isEmpty**

`s3.isEmpty(object)` 
如果**object** 不包含任何值(没有可枚举的属性)，返回*true*。 对于字符串和类数组（array-like）对象，如果length属性为0，那么s3.isEmpty检查返回*true*。

```javascript
s3.isEmpty([1, 2, 3]);
=> false
s3.isEmpty({});
=> true
```

#### **isElement**

`s3.isElement(object)` 
如果**object**是一个DOM元素，返回*true*。

```javascript
s3.isElement(jQuery('body')[0]);
=> true
```

#### **isArray**

`s3.isArray(object)` 
如果**object**是一个数组，返回*true*。

```javascript
(function(){ return s3.isArray(arguments); })();
=> false
s3.isArray([1,2,3]);
=> true
```

#### **isObject**

`s3.isObject(value)` 
如果**object**是一个对象，返回*true*。需要注意的是JavaScript数组和函数是对象，字符串和数字不是。

```javascript
s3.isObject({});
=> true
s3.isObject(1);
=> false
```

#### **isArguments**

`s3.isArguments(object)` 
如果**object**是一个参数对象，返回*true*。

```javascript
(function(){ return s3.isArguments(arguments); })(1, 2, 3);
=> true
s3.isArguments([1,2,3]);
=> false
```

#### **isFunction**

`s3.isFunction(object)` 
如果**object**是一个函数（Function），返回*true*。

```javascript
s3.isFunction(alert);
=> true
```

#### **isString**

`s3.isString(object)` 
如果**object**是一个字符串，返回*true*。

```javascript
s3.isString("moe");
=> true
```

#### **isNumber**

`s3.isNumber(object)` 
如果**object**是一个数值，返回*true* (包括 NaN)。

```javascript
s3.isNumber(8.4 * 5);
=> true
```

#### **isFinite**

`s3.isFinite(object)` 
如果**object**是一个有限的数字，返回*true*。

```javascript
s3.isFinite(-101);
=> true

s3.isFinite(-Infinity);
=> false
```

#### **isBoolean**

`s3.isBoolean(object)` 
如果**object**是一个布尔值，返回*true*。 Returns *true* if **object** is either *true* or *false*.

```javascript
s3.isBoolean(null);
=> false
```

#### **isDate**

`s3.isDate(object)` 
如果**object**是一个Date类型（日期时间），返回*true*。

```javascript
s3.isDate(new Date());
=> true
```

#### **isRegExp**

`s3.isRegExp(object)` 
如果**object**是一个正则表达式，返回*true*。

```javascript
s3.isRegExp(/moe/);
=> true
```

#### **isNaN**

`s3.isNaN(object)` 
如果**object**是 *NaN*，返回*true*。 
注意： 这和原生的**isNaN** 函数不一样，如果变量是*undefined*，原生的**isNaN** 函数也会返回 *true* 。

```javascript
s3.isNaN(NaN);
=> true
isNaN(undefined);
=> true
s3.isNaN(undefined);
=> false
```

#### **isNull**

`s3.isNull(object)` 
如果**object**的值是 *null*，返回*true*。

```javascript
s3.isNull(null);
=> true
s3.isNull(undefined);
=> false
```

#### **isUndefined**

`s3.isUndefined(value)` 
如果**value**是*undefined*，返回*true*。

```javascript
s3.isUndefined(window.missingVariable);
=> true
```



### 工具函数（Utility）

#### **identity**

`s3.identity(value)` 
返回与传入参数相等的值. 相当于数学里的: f(x) = x
这个函数看似无用, 但是在Underscore里被用作默认的迭代器iterator.

```javascript
var moe = {name: 'moe'};
moe === s3.identity(moe);
=> true
```

#### **constant**

`s3.constant(value)` 
创建一个函数，这个函数 返回相同的值 用来作为s3.constant的参数。

```javascript
var moe = {name: 'moe'};
moe === s3.constant(moe)();
=> true
```

#### **noop**

`s3.noop()` 
返回undefined，不论传递给它的是什么参数。 可以用作默认可选的回调参数。

```javascript
obj.initialize = s3.noop;
```

#### **times**

`s3.times(n, iteratee, [context])` 
调用给定的迭代函数**n**次,每一次调用**iteratee**传递index参数。生成一个返回值的数组。 
*注意: 本例使用 链式语法*。

```javascript
s3(3).times(function(n){ genie.grantWishNumber(n); });
```

#### **random**

`s3.random(min, max)` 
返回一个**min** 和 **max**之间的随机整数。如果你只传递一个参数，那么将返回0和这个参数之间的整数。

```javascript
s3.random(0, 100);
=> 42
```

#### **mixin**

`s3.mixin(object)` 
允许用您自己的实用程序函数扩展Underscore。传递一个 {name: function}定义的哈希添加到Underscore对象，以及面向对象封装。

```javascript
s3.mixin({
  capitalize: function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }
});
s3("fabio").capitalize();
=> "Fabio"
```

#### **iteratee**

`s3.iteratee(value, [context], [argCount])` 
一个重要的内部函数用来生成可应用到集合中每个元素的回调， 返回想要的结果 - 无论是等式，任意回调，属性匹配，或属性访问。 
通过s3.iteratee转换判断的Underscore 方法的完整列表是 map, find, filter, reject, every, some, max, min, sortBy, groupBy, indexBy, countBy, sortedIndex, partition, 和 unique.

```javascript
var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
s3.map(stooges, s3.iteratee('age'));
=> [25, 21, 23];
```

#### **uniqueId**

`s3.uniqueId([prefix])` 
为需要的客户端模型或DOM元素生成一个全局唯一的id。如果**prefix**参数存在， id 将附加给它。

```javascript
s3.uniqueId('contacts3');
=> 'contacts3104'
```

#### **escape**

`s3.escape(string)` 
转义HTML字符串，替换&, <, >, ", ', 和 /字符。

```javascript
s3.escape('Curly, Larry & Moe');
=> "Curly, Larry &amp; Moe"
```

#### **unescape**

`s3.unescape(string)` 
和[**escape**](http://www.bootcss.com/p/underscore/#escape)相反。转义HTML字符串，替换&, &lt;, &gt;, &quot;, &#96;, 和 &#x2F;字符。

```javascript
s3.unescape('Curly, Larry &amp; Moe');
=> "Curly, Larry & Moe"
```

#### **result**

`s3.result(object, property)` 
如果对象 **object** 中的属性 **property** 是函数, 则调用它, 否则, 返回它。

```javascript
var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};
s3.result(object, 'cheese');
=> "crumpets"
s3.result(object, 'stuff');
=> "nonsense"
```

#### **now**

`s3.now()` 
一个优化的方式来获得一个当前时间的整数时间戳。 可用于实现定时/动画功能。

```javascript
s3.now();
=> 1392066795351
```

#### **template**

`s3.template(templateString, [settings])` 
将 JavaScript 模板编译为可以用于页面呈现的函数, 对于通过JSON数据源生成复杂的HTML并呈现出来的操作非常有用。 模板函数可以使用 <%= … %>插入变量, 也可以用<% … %>执行任意的 JavaScript 代码。 如果您希望插入一个值, 并让其进行HTML转义,请使用<%- … %>。 当你要给模板函数赋值的时候，可以传递一个含有与模板对应属性的**data**对象 。 如果您要写一个一次性的, 您可以传对象 **data** 作为第二个参数给模板 **template**来直接呈现, 这样页面会立即呈现而不是返回一个模板函数. 参数 **settings** 是一个哈希表包含任何可以覆盖的设置 s3.templateSettings.

```javascript
var compiled = s3.template("hello: <%= name %>");
compiled({name: 'moe'});
=> "hello: moe"

var template = s3.template("<b><%- value %></b>");
template({value: '<script>'});
=> "<b>&lt;script&gt;</b>"
```

您也可以在JavaScript代码中使用 print. 有时候这会比使用 <%= ... %> 更方便.

```javascript
var compiled = s3.template("<% print('Hello ' + epithet); %>");
compiled({epithet: "stooge"});
=> "Hello stooge"
```

如果ERB式的分隔符您不喜欢, 您可以改变Underscore的模板设置, 使用别的符号来嵌入代码. 定义一个 **interpolate** 正则表达式来逐字匹配 嵌入代码的语句, 如果想插入转义后的HTML代码 则需要定义一个 **escape** 正则表达式来匹配, 还有一个 **evaluate** 正则表达式来匹配 您想要直接一次性执行程序而不需要任何返回值的语句. 您可以定义或省略这三个的任意一个. 例如, 要执行 [Mustache.js](http://github.com/janl/mustache.js#readme) 类型的模板:

```javascript
s3.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var template = s3.template("Hello {{ name }}!");
template({name: "Mustache"});
=> "Hello Mustache!"
```

默认的, **template** 通过 with 语句 来取得 data 所有的值. 当然, 您也可以在 **variable** 设置里指定一个变量名. 这样能显著提升模板的渲染速度.

```javascript
s3.template("Using 'with': <%= data.answer %>", {variable: 'data'})({answer: 'no'});
=> "Using 'with': no"
```

预编译模板对调试不可重现的错误很有帮助. 这是因为预编译的模板可以提供错误的代码行号和堆栈跟踪, 有些模板在客户端(浏览器)上是不能通过编译的 在编译好的模板函数上, 有 **source** 属性可以提供简单的预编译功能.

```javascript
<script>
  JST.project = <%= s3.template(jstText).source %>;
</script>
```



### 链式语法(Chaining)

您可以在面向对象或者函数的风格下使用s3, 这取决于您的个人偏好. 以下两行代码都可以 把一个数组里的所有数字乘以2.

```javascript
s3.map([1, 2, 3], function(n){ return n * 2; });
s3([1, 2, 3]).map(function(n){ return n * 2; });
```

对一个对象使用 chain 方法, 会把这个对象封装并 让以后每次方法的调用结束后都返回这个封装的对象, 当您完成了计算, 可以使用 value 函数来取得最终的值. 以下是一个同时使用了 **map/flatten/reduce** 的链式语法例子, 目的是计算一首歌的歌词里每一个单词出现的次数.

```javascript
var lyrics = [
  {line: 1, words: "I'm a lumberjack and I'm okay"},
  {line: 2, words: "I sleep all night and I work all day"},
  {line: 3, words: "He's a lumberjack and he's okay"},
  {line: 4, words: "He sleeps all night and he works all day"}
];

s3.chain(lyrics)
  .map(function(line) { return line.words.split(' '); })
  .flatten()
  .reduce(function(counts, word) {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  }, {})
  .value();

=> {lumberjack: 2, all: 4, night: 2 ... }
```

此外, [数组原型方法](https://developer.mozilla.org/en/JavaScript/Reference/Globals3Objects/Array/prototype) 也通过代理加入到了链式封装的s3对象, 所以您可以 在链式语法中直接使用 reverse 或 push 方法, 然后再接着其他的语句.

#### **chain**

`s3.chain(obj)` 
返回一个封装的对象. 在封装的对象上调用方法会返回封装的对象本身, 直道 value 方法调用为止.

```javascript
var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}];
var youngest = s3.chain(stooges)
  .sortBy(function(stooge){ return stooge.age; })
  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
  .first()
  .value();
=> "moe is 21"
```

#### **value**

`s3(obj).value()` 
获取封装对象的最终值.

```javascript
s3([1, 2, 3]).value();
=> [1, 2, 3]
```