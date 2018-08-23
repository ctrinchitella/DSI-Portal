(function () {
  'use strict';

  angular
    .module('layout')
    .controller('Layout', Layout);

  function Layout($state) {
    var vm = this;

    vm.articles = [{
            title: 'New DSI Portal',
            imgSlide: "./dist/img/Banner-webinar.jpg",
            imgNews: "./dist/img/paginaPortal.png",
            imgArticle: "./dist/img/paginaPortal.png",
            cite: 'DSI Portal - new tool for DSI Team',
            shortDesc: "This Portal was created to generate a better access to all the different tools and information about DSI-gA that was dispersed in different places. Thanks to this, we can found all that we need fast and easily.",
            body1: "Lucas Prieto came up with the idea to improve the practices for the DSI team, streamlining and organizing the development activities in the team. When we had time, we started designing mockups and mixed our knowledge in Angular, HTML, CSS, SASS to create this solution. Mariano Barbuscio directed this project while Carla Trinchitella and Federico Armando Parisi helped with the coding and graphic design.<br><br>This project lasted two weeks and is now integrated into the Web Service of gA. If your computer is connected into the private network of Grupo Assa, you will have access to this portal without any problems.",
            body2: 'As you can see, there are lot of components and sections in this page. This sections contains: <br>1. "News" - Created to post new information about the team. <br>2. "Trainings" - Shows information about BrownBags, dates of incoming trainings and also a direct access to the DSI Platform.<br>3. "Licenses" - This section was prepared to focus the protocol licenses. You will be required to complete a form whenever you take a license and also a calendar with the vacation timesheet.<br>4. "Team Meetings" - Provide information about the next occurrences and the summary of every meeting.<br><br> There are more sections that you can use like the ones previously listed.'
        },{
            title: 'First webinar of DSI for Partners',
            imgSlide: "./dist/img/Banner-webinar.jpg",
            imgNews: "./dist/img/webinar.jpg",
            imgArticle: "./dist/img/Banner-webinar.jpg",
            cite: 'Webinar from DSI',
            shortDesc: "DSI proposed a meeting for partners to communicate updates on different topics, for example, the DSI Platform, Products, and more. These Webinars are dedicated to DSI Partners. The application 'webex' is the tool that we used to communicate with them.",
            body1: 'These webinars were created to keep up to date with the partners of DSI. These meetings will be quarterly and their topics will be shown by email. These topics are selected and are addressed by the panelist of DSI, who will explain the concepts and answer questions from the participants. The application "Webex" is the tool that we use for communication, and it´s very easy to join the webinar. The inscriptions are sent through mail, and, in order to register it is necessary to verify the attendance.',
            body2: 'In the first Webinar, the topics were: <br><u>What is DSI?</u><br> DSI has five International Offices around the world, but the biggest is the USA office. The company has over 300 employees with experience in Mobile Bussiness. DSI provides services to over 1300 companies in 50 countries, such as applications for distribution, digital supply chain, transportation, connections of sales, etc. <br><u>DSI & Oracle Cloud</u><br> DSI and Oracle are partners now, and for that reason DSI offers applications dedicated to data collection, work orders, route sales, and more.<br><u>Cloud Inventory</u> <br> It is a software dedicated to inventory management. It is easier to implement and use. This application offers automatic Inventory Supply, Fixed Assets, Inventory Management to Third Parties. Cloud Inventory works in the cloud, administered by DSI. This tool was developed in the DSI Platform, and it does not have manteinance costs. It´s faster to implement and will increase the vision of the company.<br><u>DSI DSCP 8.5</u> <br> In this part of webinar, Marco Jimenez talks about Detail Supply Chain Platform, and also, he talks about the origin and functionality of Wire, Analitycs.<br><br> The New Webinar does not have a date, but it will be announced through this portal.'
        }];

    vm.links = [{
      Img: './dist/img/Logos-04.png',
      Icon: 'Sharepoint',
      Url: 'https://share.grupoassa.com/SiteDirectory/adi/DSI/Forms/AllItems.aspx'
    },{
      Img: './dist/img/Logos-05.png',
      Icon: 'Slack',
      Url: 'https://ga-dsi.slack.com/'
    },{
      Img: './dist/img/Logos-06.png',
      Icon: 'Trello',
      Url: 'https://trello.com/gadsi'
    },{
      Img: './dist/img/Logos-02.png',
      Icon: 'Gain',
      Url: 'https://grupoassa.jiveon.com/'
    },{
      Img: './dist/img/Logos-03.png',
      Icon: 'Community',
      Url: 'https://community.dsiglobal.com/welcome'
    }];

    vm.projects = [{
      title: "DSI Portal",
      assignees: "Lucas Prieto, Carla Trinchitella, Federico Parisi",
      desc: "The DSI Portal is a new tool dedicated to the DSI team. This page contains different spaces, for example, 'Team Meetigns', 'Trainings', 'Resources', and more.",
      inProgress: true
    },{
      title: "Solution Accelerators",
      assignees: "Gaston Cattani, Walter Schroeder",
      desc: "Gaston and Walter started this new internal project. This project consists on improving and documenting the accelerators for JDE and SAP. Also, this project will help assistants and consultors to understand all business processes.",
      inProgress: true
    },{
      title: "JDE Training for DSI Team",
      assignees: "Conrado Borchez, Gaston Cattani",
      desc: "Gaston and Conrado made this new course of JDE for the team. The objective of this training is to explain differents important topics on JDE for the new integrants of the DSI team.",
      inProgress: true
    },{
      title: "Wire Language Support",
      assignees: "Lucas Prieto, Carla Trinchitella",
      desc: "This tool was created to have a better understanding of the Wire code. This improvement is working in SublimeText editor, but the idea is to implement this tool in the Wire Editor.",
      inProgress: true
    },{
      title: "Wire Components Library",
      assignees: "Franco Gaurisso",
      desc: "Franco started a Common Components Library for Wire. These components can be used by all the team. They are being programmed in the DSI-gA Lab.",
      inProgress: true
    }];

    vm.projectsFilter = "none";
    vm.displayProjects = [];
    
    vm.goToUrl = goToUrl;
    vm.scrollTo = scrollTo;
    vm.goToRocket = goToRocket;
    vm.tbdProjects = tbdProjects;
    vm.onGoingProjects = onGoingProjects;
    vm.goArticle = goArticle;

    activate();

    function activate() {
      vm.displayProjects = vm.projects;
    }

    function goArticle(article){
      $state.go('news-header.article', {news: article});
    }

    function goToUrl(url){
      window.open(url, '_blank');
    }

    function goToRocket(){
      $state.go('rocket');
    }

    function tbdProjects() {
      if(vm.projectsFilter == "tbd"){
        unfilter();
      }else{
        vm.displayProjects = vm.projects.filter(function(item){
          return !item.inProgress;
        });
        vm.projectsFilter = "tbd";
      }
    }

    function onGoingProjects() {
      if(vm.projectsFilter == "inprogress"){
        unfilter();
      }else{
        vm.displayProjects = vm.projects.filter(function(item){
          return item.inProgress;
        });
        vm.projectsFilter = "inprogress";
      }
    }

    function unfilter() {
      vm.displayProjects = vm.projects;
      vm.projectsFilter = "none";
    }

    function scrollTo(element) {
      var startY = currentYPosition();
      var stopY = elmYPosition(element);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY); return;
      }
      var speed = Math.round(distance / 50);
      if (speed >= 20) speed = 20;
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
          setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
      }
      for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
      }

      function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
          return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
      }

      function elmYPosition(element) {
        var elm = document.getElementById(element);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        } return y;
      }
    }
  }
})();