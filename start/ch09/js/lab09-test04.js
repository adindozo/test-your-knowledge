document.addEventListener("DOMContentLoaded", function () {
    let reset = function(){
        filterObj = {
            opacity: '100',
            saturation: '100',
            brightness: '100',
            grayscale: '0',
            hue: '0',
            blur: '0'
        };
        generateFilter(filterObj);
        
        //reset labels and sliders
        document.getElementById('numOpacity').innerText=100;
        document.getElementById('numSaturation').innerText=100;
        document.getElementById('numBrightness').innerText=100;
        document.getElementById('numHue').innerText=0;
        document.getElementById('numGray').innerText=0;
        document.getElementById('numBlur').innerText=0;

        document.getElementById('sliderOpacity').value=100;        
        document.getElementById('sliderSaturation').value=100;        
        document.getElementById('sliderBrightness').value=100;        
        document.getElementById('sliderHue').value=0;        
        document.getElementById('sliderGray').value=0;        
        document.getElementById('sliderBlur').value=0;        
    }
    let mainimg = document.querySelector('#imgManipulated img');
    let clickHandler = (e) => {
        if (e.target.nodeName == "IMG") {
            reset();

            let thumbSrcArray = e.target.src.split('/');
            mainimg.src = thumbSrcArray[thumbSrcArray.length - 3] + '/medium/' + thumbSrcArray[thumbSrcArray.length - 1];
            document.querySelector('#imgManipulated figcaption em').textContent=e.target.alt;
            document.querySelector('#imgManipulated figcaption span').textContent=e.target.title;
            

        }


    }
    let filterObj = {
        opacity: '100',
        saturation: '100',
        brightness: '100',
        grayscale: '0',
        hue: '0',
        blur: '0'
    };
    let generateFilter = (f) => { //change filter attrib
        mainimg.style.filter = `opacity(${f.opacity}%) `
            + `saturate(${f.saturation}%) `
            + `brightness(${f.brightness}%) `
            + `grayscale(${f.grayscale}%) `
            + `hue-rotate(${f.hue}deg) `
            + `blur(${f.blur}px) `;


    }
    document.querySelector('#thumbBox').addEventListener('click', clickHandler);
    document.querySelector('#sliderBox').addEventListener('input', (e) => {
        let v = e.target.value;
        if (e.target.id == 'sliderOpacity') {
            filterObj.opacity = v;
            document.getElementById('numOpacity').innerText=v;

            generateFilter(filterObj);

        }
        if (e.target.id == 'sliderSaturation') {
            filterObj.saturation = v;
            document.getElementById('numSaturation').innerText=v;
            generateFilter(filterObj);

        }
        if (e.target.id == 'sliderBrightness') {
            filterObj.brightness = v;
            document.getElementById('numBrightness').innerText=v;
            generateFilter(filterObj);
        }
        if (e.target.id == 'sliderHue') {
            filterObj.hue = v;
            document.getElementById('numHue').innerText=v;
            generateFilter(filterObj);
        }
        if (e.target.id == 'sliderGray') {
            filterObj.grayscale = v;
            document.getElementById('numGray').innerText=v;
            generateFilter(filterObj);
        }
        if (e.target.id == 'sliderBlur') {
            filterObj.blur = v;
            document.getElementById('numBlur').innerText=v;
            generateFilter(filterObj);
        }



    })
    
    document.getElementById('resetFilters').addEventListener('click',(e)=>{
        reset();
        e.preventDefault();
    })

});