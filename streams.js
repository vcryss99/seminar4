class Stream{
    #value;
    #nextValue;
    static #count=0;
    constructor(value,nextValue){
        this.#value=value;
        this.#nextValue=nextValue;
        Stream.#count++;
    }
    get value(){
        return this.#value;
    }   
    get next(){
        this.#value=this.#nextValue();
        return this.#value;
    }
    static get count(){
        return Stream.#count;
    }
}
class ConstantStream extends Stream{
    constructor(value){
        super(value,()=>value);
    }
}

class NextIntegerStream extends Stream {
    constructor() {
        let current = 0;
        super(current, () => ++current); // incrementare internă
    }
}

class EvenStream extends Stream {
    constructor(start) {
    
        const firstEven = start % 2 === 0 ? start : start + 1;
        let current = firstEven;
        super(firstEven, () => {
            current += 2;
            return current;
        });
    }
}

const constant =new ConstantStream(1);
const nextInteger=new NextIntegerStream();
//for(let i=0;i<10;i++){
  //  console.log(`constant[${i}] =${constant.next}` );
    //console.log(`nextInteger[${i}] =${nextInteger.next}` );
//}
//console.log(Stream.count);

const even = new EvenStream(5);  
for (let i = 0; i < 10; i++) {
    console.log(`even[${i}] = ${even.next}`);
}

console.log(`Total stream instances: ${Stream.count}`);