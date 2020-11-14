// 公众号： 可转债量化分析
function main(code, count, money) {
    log(code, count, money);
    if (!code) {
        toast("请输入基金代码");
        return;
    }
    if (!count) {
        toast("股东账户数量");
        return;
    }
    if (!money) {
        toast("申购金额");
        return;
    }
    app.launchApp("中国银河证券");
    waitForPackage("com.galaxy.stock");
    log("成功打开银河证券");
    sleep(1000);
    // 切换到【交易】tab
    const tradeBtn = text("交易")
        .findOne()
        .parent()
        .parent();
    log(tradeBtn);
    tradeBtn.click();

    //点击【场内基金】
    sleep(1000);
    const internalFund = text("场内基金")
        .findOnce()
        .parent();
    internalFund.click();

    //点击【基金申购】
    waitForActivity("cn.com.chinastock.trade.activity.LofActivity");
    const fundPurchase = text("基金申购")
        .findOnce()
        .parent();
    fundPurchase.click();

    // 自动填信息
    sleep(1000);

    purchaseFund(code, count, money);
}

function purchaseFund(code, count, money) {
    for (let i = 0; i < count; i++) {
        log(code, count, money);
        const codeInput = id("stockCode").findOne();
        codeInput.click();
        codeInput.setText(code);
        sleep(1000);
        back();
        sleep(100);
        const accountSelect = id("secuidList").findOne();
        accountSelect.click();
        sleep(1000);
        const options = className("CheckedTextView").find();
        click(options[i].bounds().left + 2, options[i].bounds().top + 2);
        sleep(300);
        const orderAmount = id("orderAmount")
            .findOnce()
            .children()[0];
        log(orderAmount);
        orderAmount.setText(money);
        sleep(300);
        id("order")
            .findOnce()
            .click();
        sleep(6000);
        id("acceptedCb")
            .findOnce()
            .click();
        id("okBtn")
            .findOnce()
            .click();
        sleep(6000);
        click("本人已认真阅读并理解上述内容");
        sleep(200);
        click("我接受");
        sleep(200);
        click("本人已认真阅读并理解上述内容");
        sleep(200);
        click("我接受");
        sleep(7000);
        click("本人已认真阅读并理解上述内容");
        sleep(200);
        click("我接受");
        sleep(500);
        text('确认申购').findOnce().click();
        sleep(1000);
        text("确定")
            .findOnce()
            .click();

        sleep(1000);
    }
}

main("162411", "6", "100");
//main('6位基金代码','自动循环次数','申购金额')