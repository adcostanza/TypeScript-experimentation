class Math_ {
  add(x:number, y:number): number {
    return x+y;
  }
  subtract(x:number,y:number): number {
    return x-y;
  }
  multiply(x:number,y:number,z:number): number {
    return x*y*z;
  }
  xyz(x:number) {
    return x;
  }
}

class AJ {
  add(a:number, j:number): number {
    return a+j;
  }
}
let m: Math_ = new Math_();

console.log(m.add(2,3));
console.log(m.subtract(4,1));
console.log(m.xyz(3));

let aj: AJ = new AJ();
