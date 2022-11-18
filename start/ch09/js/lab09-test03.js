/* add code after this comment */
window.onload = () => {
    //approach 1: loop and assing event handler to every div
    // let paneldivs = document.querySelectorAll('.panel');
    // for (let panel of paneldivs) {
    //     panel.addEventListener('click', (e) => {
    //         e.target.classList.toggle('open');
    // })
    // }
    //approach 2: assing event listener to parrent element

    let panelDiv=document.querySelector('.panels');

    panelDiv.addEventListener('click', (e)=>{
        let classListString = e.target.className;
        let classListArray = classListString.split(' ');
        if(classListArray[0]=='panel'){
            e.target.classList.toggle('open');
        };
    });
   



console.log(2)
}


