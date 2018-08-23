(function () {
    'use strict';

    angular
        .module('news')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'news-header',
                config: {
                    name: 'news-header',
                    abstract: true,
                    templateUrl: 'dist/views/news/news.html',
                    controller: 'News',
                    controllerAs: 'vm'
                }
            },
            {
                state: 'news-header.news',
                config: {
                    name: 'news',
                    url: '/news',
                    templateUrl: 'dist/views/news/news-container.html',
                    controller: 'NewsContainer',
                    controllerAs: "vm",
                }
            },{
             state: 'news-header.article',
                config: {
                    name: 'article',
                    url: '/news/article',
                    templateUrl: 'dist/views/news/article.html',
                    controller: 'Article',
                    controllerAs: "vm",
                    params: {
                        news: null
                    }
                }   
            }
        ];
    }

})();