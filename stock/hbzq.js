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
    app.launchApp("华宝智投");
    waitForPackage("com.hwabao.hbstockwarning");
    log("成功打开华宝证券");
    sleep(5000);
    // 切换到【交易】tab
    const tradeBtn = text("交易")
        .findOne()
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
    // waitForActivity("cn.com.chinastock.trade.activity.LofActivity");
    const fundPurchase = text("场内申购")
        .findOnce()
        .parent();
    fundPurchase.click();

    // 自动填信息
    sleep(1000);

    //purchaseFund(code, count, money);
}

function purchaseFund(code, count, money) {
    log(code, count, money);
    const codeInput = id("code_name_layout").findOne();
    codeInput.click();
    codeInput.setText(code);
    sleep(1000);
    const money = id("et_right").findOne();
    accountSelect.click();
    sleep(1000);
    id("btn_ok").findOne().click();
}

main("162411", "6", "100");