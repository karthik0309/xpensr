(function(){
    this.clickEvents = function(){
        return captureClickEvents() 
    }

    const INPUT_CLICK = "InputClickedEvent"
    const LINK_CLICK = "LinkClickedEvent"

    const captureClickEvents=()=>{
        document.addEventListener('click',(event)=>{
            if(event.target.href!==undefined){
                storeEvents(event,LINK_CLICK)
            }else if(event.target.matches("button")){
                storeEvents(event,INPUT_CLICK)             
            }
        })
        document.addEventListener('submit',(event)=>{
            event.preventDefault()
            storeEvents(event,INPUT_CLICK)             
        })
    }

    const storeEvents=(event,eventType)=>{
        let eventStore = [];
        let currEvent = {}
        let currTime = new Date(Date.now())

        currEvent['name']  = event.target.name
        currEvent['id']    = event.target.id
        currEvent['class'] = event.target.className.split(" ")
        currEvent['label'] = event.target.localName
        currEvent['URL']   = event.target.origin
        currEvent['time']  = currTime.toString()

        if(eventType==="LinkClickedEvent"){
            currEvent['to'] = event.target.href
        }
        event.stopPropagation()

        if(localStorage.getItem(eventType)){
            eventStore = JSON.parse(localStorage.getItem(eventType))
        }

        eventStore.push(currEvent)

        localStorage.setItem(eventType,JSON.stringify(eventStore))
    }

}())

new clickEvents()

window.onload = function(){
    let currentNode;
    let allElements = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT);
    let idSet = new Set()
    while(currentNode = allElements.nextNode()) {
        try{
            if(currentNode.id!="" && idSet.has(currentNode.id)){
                console.log("multiple elements found with same id: "+currentNode.id)
                throw Error("Conflicting Element with the same property")
            }

            if(currentNode.class!=""){
                let classNames = document.getElementsByClassName(currentNode.className)
                if(classNames.length>1){
                    console.log("multiple elements found with same class: "+currentNode.className)
                    throw Error("Conflicting Element with the same property")
                }
            }
        }catch(e){
            console.log(e)
        }

        currentNode.id && idSet.add(currentNode.id)
    }
}
