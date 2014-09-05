angular.module('myApp')
    .constant('ENV', 'dev')
    .constant('RELEASE', '1234567890abcd')
    .constant('GRAFFITI', {
        host: 'http://graffiti.internal.timeout.com/public',
        token: 'client_id=local-listers&client_secret=4a201577-9d93-4974-8906-47263d421a79&grant_type=authorization_code&scope=local-listers',
        location: 'london'
    })
    .constant('GIGYA_API_KEY', '3_lPMEj5VTPtlW1i_uRZZdKHZPMzey0AVcOrKC_wittdLLOwJQPxbcDi7MEYDhwQ75')
    .constant('OMNITURE_SCRIPT', '//d1w8ihwdzwigdq.cloudfront.net/omniture/s_code_uk_lon_prem_prof_dash_qa.js')
    .config(function($logProvider, ENV) { $logProvider.debugEnabled(ENV == 'dev'); });