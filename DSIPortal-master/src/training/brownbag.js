(function() {
'use strict';

  angular
    .module('training')
    .controller('Brownbag', Brownbag);
  
  function Brownbag() {
    var vm = this;

    vm.goToUrl = goToUrl;
    
    vm.brownbags = [
      {
        title: "Wire Syntax Highlighting",
        titleEncoded: "Wire%20Syntax%20Highlighting",
        duration: "20 minutes",
        description: "Learn how Language Syntax Highlighting works and find out how to set it up to improve your Wire coding with external editors.",
        resourcesUrl: "https://share.grupoassa.com/SiteDirectory/adi/DSI/Forms/AllItems.aspx?RootFolder=%2FSiteDirectory%2Fadi%2FDSI%2FBrownbags%2FSyntax%20Highlighting&FolderCTID=0x0120009466220B80B1B5448D9A09BA16683A40&View=%7B76B99D23-655A-49F3-9447-53A373486935%7D&InitialTabId=Ribbon%2EDocument&VisibilityContext=WSSTabPersistence",
        active: false
      },{
        title: "Electron",
        titleEncoded: "Electron",
        duration: "2 hours",
        description: "Learn how the Mobile Client Launcher was built and how to create powerful desktop apps with web technologies.",
        active: true,
        date: "TBD - 2 PM"
      }
    ];

     function goToUrl(url){
      window.open(url, '_blank');
    }

    activate();

    ////////////////

    function activate() { }
  }
})();