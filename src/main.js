
// const div = dom.create("<div><span>1</span></div>")
// console.log(div)
// //在div里面在创建一个span


// const div2 = dom.create("  <td>li</td>")
// console.log(div2)


const div = dom.create("<div>newDiv</div>")
console.log(div)

dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)


const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Hi,I am Frank')
//查
// 看控制台的代码
const title = dom.attr(test, 'title')
// 读
console.log(`title: ${title}`)


dom.text(test, '你好，这是新的内容')
dom.text(test)



dom.style(test, {border: '1px solid red', color: 'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')


dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.contains(test, 'blue'))



const fn =() =>{
    console.log('点击了')
}
dom.on(test, 'click', fn)
// 点击事件
dom.off(test, 'click', fn)
// 移除点击事件


//查

const testDiv = dom.find('#test')[0]
console.log(testDiv)

const test2 = dom.find('#test2')[0]
console.log(dom.find('.red', test2)[0])
//如果有两个参数，第二个参数表示找的范围


console.log(dom.parent(test))


const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
//后一个节点
console.log(dom.previous(s2))
//上一个节点


const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=>dom.style(n, 'color', 'red'))


console.log(dom.index(t2))