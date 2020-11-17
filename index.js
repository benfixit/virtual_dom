function createElement(tagName, { attrs = {}, children = [] }){
    const vElem = Object.create(null);

    return Object.assign(vElem, {
        tagName,
        attrs,
        children
    });
}

function renderElementNode(vNode){
    const elem = document.createElement(vNode.tagName);

    for(let [key, value] of Object.entries(vNode.attrs)){
        elem.setAttribute(key, value)
    }

    for(let child of vNode.children){
        elem.appendChild(render(child))
    }

    return elem
}

function renderTextNode(text){
    return document.createTextNode(text);
}

function render(vNode){
    if(typeof vNode === 'string'){
        return renderTextNode(vNode)
    }
    
    return renderElementNode(vNode)
}

function mount(node, target){
    target.replaceWith(node)
    return node;
}