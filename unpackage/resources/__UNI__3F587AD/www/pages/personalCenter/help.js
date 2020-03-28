
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"all { width: 100%; height: 100%; }\n.",[1],"help { height: 60px; margin-top: 50%; text-align: center; color:#B0B0B0; font-size: 20px; }\n",],undefined,{path:"./pages/personalCenter/help.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/personalCenter/help.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      