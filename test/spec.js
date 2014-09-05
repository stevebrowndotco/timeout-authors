


describe('SignIn Page and log in as administrator', function() {
    var ptor;
    it('login as administrator',function() {
        ptor = protractor.getInstance();
        browser.get('http://localhost:9000/login');
                element(by.model('user.email')).sendKeys('du@uxentrik.com');
        element(by.model('user.password')).sendKeys('adminadmin');

        element(by.css('.btn.btn-lg.btn-primary.btn-block')).click();
        ptor.waitForAngular();
    }, 10000);


    it ('Check URL after Sign In', function(){
        var expectedURL = 'http://localhost:9000/'+ 'profile';
        ptor.waitForAngular();
        expect(ptor.getCurrentUrl()).toBe(expectedURL);

    }, 10000);

    it ('Go to Views', function(){
        browser.get('http://localhost:9000/admin-view');
        var expectedURL = 'http://localhost:9000/admin-view';
        ptor.waitForAngular();
        expect(ptor.getCurrentUrl()).toBe(expectedURL);
    }, 10000);
    
   it ('Select first view', function(){
        element(by.xpath('/html/body/div[2]/div/accordion[1]/div/div/div[2]/div/ul/li[1]/div[3]/button')).click();
        ptor.waitForAngular();
        browser.pause()
    }, 10000);
});