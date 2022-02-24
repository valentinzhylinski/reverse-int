module.exports = function reverse (n) {
    let s = n.toString();
    let a = Array.from(s);
    let a1 = [];
    for (let i = a.length - 1; i >= 0; i--) {
        a1.push(a[i]);
    }
    const r = a1.join('');
    if (r.includes('-')){
        return r.slice(0,3);
    } else {
        return r;
    }
    
}