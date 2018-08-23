(function () {
  'use strict';

  angular
    .module('resources')
    .controller('Resources', Resources);

  function Resources($state) {
    var vm = this;
    vm.goToUrl = goToUrl;
    vm.expand = expand; 
    vm.resources = [{
      id: "1",
      resourceNm: "Loftware and TranPrint",
      description: "This document explains the Loftware configuration, a world-class barcode labeling software, and TranPrint, a Windows Service and a Socket Base Printing solution that uses TCPIP based printers.",
      link: "./dist/files/Admin-Loftware-TranPrint-Configuration.pdf",
      questions: [
        {
        id: 1,
        expanded: false,
        q: "What does the document contain?",
        answer: "This document contains information about the configuration of Loftware and TranPrint service."
      },{
        id: 2,
        expanded: false,
        q: "In which cases is it used?  ",
        answer: "The document is used when you need to config the label printing process."
      }]
    },{
      id: "2",
      resourceNm: "Certified Device Lists",
      description: "This collection of documents has information about Certified Devices for different versions of MEP.",
      link: "./dist/files/Certified-Device-Lists.zip",
      questions: [
        {
        id: 1,
        expanded: false,
        q: "What does the document contain?",
        answer: "This document contains a list with all certified devices for versions Pre 8.x and 8.x of MEP."
      }]
    },{
      id: "3",
      resourceNm: "Unibar Guides",
      description: "With Unibar, we can create label formats and printing workflows. We can also administrate this software with different topics and examples.",
      link: "./dist/files/UnibarDocuments.zip",
      questions: [
        {
        id: 1,
        expanded: false,
        q: "What does the document contain?",
        answer: "This document contains information about administration and communication of label formats."
      },{
        id: 2,
        expanded: false,
        q: "In which cases is it used?",
        answer: "This document is used when you need to configure the label printing process."
      }]
    },{
      id: "4",
      resourceNm: "Best Practices",
      description: "The objetive of these files is to communicate the best practices when you develop in Forms, Wire, Adc, etc. It's an important protocol that we have to follow.",
      link: "./dist/files/Buenas_Practicas.zip",
      questions: [
        {
        id: 1,
        expanded: false,
        q: "What does the document contain?",
        answer: "This document contains information about the Best Practices during development."
      },{
        id: 2,
        expanded: false,
        q: "In which cases is it used?",
        answer: "It is best to consult these files whenever we have doubts about our developments."
      }]
    }];
    vm.active;
    activate();

    function activate() {
      
    }

    function goToUrl(url){
      window.open(url, '_blank');
    }

    function expand(resource, question) {
      
      var expandEl = document.getElementById('question-'+resource+'-'+question.id);

      if(question.expanded){
        expandEl.style.maxHeight = "";
      }else{
        expandEl.style.maxHeight = expandEl.scrollHeight + "px";
      }
  
      var qa = document.getElementById('qa'+resource);
      qa.style.maxHeight = qa.scrollHeight + "px";

      var exp = document.getElementById('resource'+resource);
      exp.style.maxHeight = exp.scrollHeight + "px";

      question.expanded = !question.expanded;
    }

    function collapse(){
      if(vm.active){
        
      }
    }
  }
})();