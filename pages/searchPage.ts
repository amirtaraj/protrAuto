import { $, ElementFinder } from "protractor";


export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public login: ElementFinder;
    public outline: ElementFinder;
    public first: ElementFinder;
    public username: ElementFinder;
    public continue: ElementFinder;
    public password: ElementFinder;
    public passwordbox: ElementFinder;
    public loginbutton: ElementFinder;
    public fromcity: ElementFinder
    public enterFromCity: ElementFinder
    public tocity: ElementFinder;
    public enterToCity: ElementFinder;
    public search: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[title='Search']");
        this.searchButton = $("div[class='FPdoLc tfB0Bf']").$("input[name='btnK']");
        this.outline =$("div[id='lga']");   
        this.first =$("h3[class='LC20lb DKV0Md']");
        
        /*LOGIN
        this.login = $("div[class='makeFlex column flexOne whiteText latoBold']");
        this.username = $("input[id='username']");
        this.continue = $("button[class='capText font16']");
        this.password = $("a[xpath='1']");
        this.passwordbox = $("input[id='password']");
        this.loginbutton = $("button[class='capText font16']");
        */

        this.fromcity =$("input[id='fromCity']");
        this.enterFromCity =$("input[placeholder='From']");
        this.tocity =$("input[id='fromCity']");
        this.enterToCity =$("input[placeholder='To']");
        this.search =$("p[data-cy='submit']");


    }
}
