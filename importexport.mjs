const chanchosFelices = ['chanco 1', 'chanco 2', 'chanco 3']
 const chanchosTristes = ['triste 1', 'triste 2', 'triste 3']
 const otroschanchos = ['otros chanchos']
// module.exports = canchosFelices

// module.exports = {
//     canchosFelices,
//     canchosTristes
// }

// export default chanchosFelices
const fn1 = () => {
    console.log('soy la funtion 1');
}
const fn2 = () => {
    console.log('soy la funtion 2');
}

export {chanchosFelices, chanchosTristes, otroschanchos, fn1, fn2}