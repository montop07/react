function customRender(reactelement,mainconatiner){
    // const domelement = document.createElement(reactelement.type)
    // domelement.innerHTML = reactelement.children
    // domelement.setAttribute('href',reactelement.props.href)
    // domelement.setAttribute('target',reactelement.props.target)

    // mainconatiner.appendChild(domelement)
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    for (const prop in reactelement.props ) {
        if(prop==='children')continue;
        domelement.setAttribute(prop,reactelement.props[prop])
   }
   mainconatiner.appendChild(domelement)
}
const reactelement = {
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me'
}
const mainconatiner = document.querySelector("#root");

customRender(reactelement,mainconatiner);