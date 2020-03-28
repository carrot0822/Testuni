
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"redBook wx-image{ width: 100%; }\n.",[1],"image{ width: 100%; }\n",],undefined,{path:"./pages/index/fileDetails.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/index/fileDetails.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      