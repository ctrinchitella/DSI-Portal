(function() {
'use strict';

    angular
        .module('news')
        .controller('NewsContainer', NewsContainer);

    function NewsContainer($state) {
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

        vm.openArticle = openArticle;
        activate();

        function openArticle(article){
            $state.go('news-header.article', {news: article});
        }

        function activate() { 
        }
    }
})();