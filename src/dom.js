// window.dom = {
//     //create: function(){}
//     //create(){}
// };

// dom.create = function (tagNmae) {
//     return document.createElement(tagNmae)
//     //加入一个div
//     //create 创造
// };
//也可以写在上面,简化 再 简化



window.dom = {
    create(string){
        // const container = document.createElement("div");
        // container.innerHTML = string;
        // return container.children[0];
        //此容器是一个div，而div里面不允许存在<tr>、<td>类的
        
        const container = document.createElement
        ("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
        //template 是新语法，专门包用标签用的
        // trim 作用是消除空格，
        //如果不加trim标签两边有空格的话会显示为文本格式
    },
    after(node, node2) {
        // console.log(node.nextSibling);
        node.parentNode.insertBefore(node2, node.nextSibling);
        //在它后面加一个节点话，因为没有insetAfter
        //所以采用，在其后面的标签，的前面加一个
        //就是本身的后面        
    },
    before(node, node2){
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node){
        parent.appendChild(node)
    },
    wrap(node, parent){
        dom.before(node, parent)
        dom.append(parent, node)
        //把parent放在节点的前面
        //再把节点移出去
    },



    // 删
    remove(node) {
        node.parentNode.removeChild(node)
        return node
        // return 一下，是为了保留这个节点的引用
    },
    empty(node){
        const {childNodes} = node
        //const chilNodes = node.childNodes 可以简写为上面的
        const array = []
        let x = node.firstChild
        while(x){
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array 
        // 简单方法node.innerHTML = ''；
        //如果后续还需要这个节点的引用，就使用上面的方法
        //删掉这个节点的所有儿子
    },
    attr(node,name,value){//这叫做“重载”，
        if(arguments.length === 3){
            node.setAttribute(name, value)
        }else if(arguments.length === 2){
            return node.getAttribute(name)
        }
        // 这里的数字代表参数的数量
    },
    text(node, string){ //适配
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = string  //ie
            }else{
                node.textContent = string // firefox / chrome
            }
        }else if(arguments.length === 1){
            if('innerText' in node){
                return node.innerText
            }else{
                return node.textContent
            }
        } 
        //大部分两种都支持，怎么避免，做一个判断
    },
    html(node, string){
        if(arguments.length === 2){
            node.innerHTML = string
        }else if(arguments.length === 1){
            return node.innerHTML
        }
    },
    style(node, name, value){
        if(arguments.length===3){
            //dom.style(div, 'color', 'red')
            node.style[name] = value
        }else if(arguments.length===2){
            if(typeof name === 'string'){
                //dom.style(div, 'color')
            return node.style[name]
            //[] 对象是变量，要调用的话，用[]包起来；不能用“点"

            }else if(name instanceof Object){
                // dom.style(div, {color: 'red'})
                const object = name
                for(let key in object){
                    node.style[key] = object[key]
                }
            }
        }
        
    },
    class: {
        add(node, className){
            node.classList.add(className)
            //添加
        },
        remove(node, className){
            node.classList.remove(className)
            //删除
        },
        contains(node, className){
            return node.classList.contains(className)
            //查找有没有
        }
    },
    on(node, eventName, fn){
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn){
        node.removeEventListener(eventName, fn)
    },

    
    
    //查
    find(selector, scope){
        return (scope || document).querySelectorAll(selector)
        // selector 挑选着/选择器
        // scope  范围
        //如果有scope就在scope里调用，如果有document，在document里调
    },
    parent(node){
        return node.parentNode
    },
    children(node){
        return node.children
    },
    siblings(node){
        return Array.from(node.parentNode.children)
        .filter(n => n!==node)
        //filter 过滤
    },
    next(node){
        let x = node.nextSibling
        while(x && x.nodeType === 3){
            x = x.nextSibling
            // "1"表示节点；“3”表示文本
        }
        return x
    },
    previous(node){
        let x = node.previousSibling
        while(x && x.nodeType === 3){
            x = x.previousSibling
            // "1"表示节点；“3”表示文本
        }
        return x
    },
    each(nodeList, fn){
        for(let i = 0; i<nodeList.length; i++){
            fn.call(null, nodeList[i])
        }
    },
    index(node){
        const list = dom.children(node.parentNode)
        let i
        for(i =0; i<list.length;i++){
            if(list[i] === node){
                break
            }
        }
        return i
    }
};