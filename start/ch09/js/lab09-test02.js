const photos = JSON.parse(content);

/* put your code after this */
let sectionContainer = document.getElementById('parent');

for(let photo of photos){
    let figureNode = document.createElement('figure');
    let figCNode = document.createElement('figcaption');
    let h2Node = document.createElement('h2');
    let h2text = document.createTextNode(photo.title);
    let pNode = document.createElement('p');
    let ptext = document.createTextNode(photo.description);
    let spanNodeArray = [];
    let imgNode = document.createElement('img');
    for(let i=0; i<photo.colors.length; i++){
        spanNodeArray.push(document.createElement('span'));
        spanNodeArray[i].style.backgroundColor=photo.colors[i].hex;
    }
    imgNode.src=`images/${photo.filename}`;
    imgNode.alt=`images/${photo.filename}`;
    h2Node.appendChild(h2text);
    pNode.append(ptext);
    figCNode.appendChild(h2Node);
    figCNode.appendChild(pNode);
    for(let spanNode of spanNodeArray){
        figCNode.appendChild(spanNode);
    }
    figureNode.appendChild(imgNode);
    figureNode.appendChild(figCNode);
    sectionContainer.append(figureNode);


}