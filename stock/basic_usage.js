auto();
toast('just test');
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
    // app.launchApp("华宝智投");
    // sleep(1000);
    // waitForPackage("com.hwabao.hbstockwarning");
    // waitForActivity("com.hwabao.hbstockwarning.home.HomeActivity");
    sleep(1000);
    // startActivity("com.hwabao.hbstockwarning.home.HomeActivity");
    toast("成功打开华宝证券");
    sleep(1000);
    click('交易');
    toast('next');
    // while (!click('交易'));
    toast('有交易字样');
    // market =text('市场').click();
    // toast(market);
    sleep(2000);
    // trade = text('交易').click();
    // toast(trade);
    // trade.click();
    // id("tab_text").className("android.widget.TextView").text("交易").findOne().parent().parent().click()    
    sleep(5000);
    // const tradeBtn = text("交易").findOne().parent().parent();
    // log(tradeBtn);
    // tradeBtn.click();
    //点击【场内基金】
sleep(1000);
const internalFund = text("场内基金")
    .findOnce()
    .parent();
internalFund.click();
toast('场内基金')

const buy = text("场内申购")
    .findOnce()
    .parent();
internalFund.click();
toast('场内申购');
purchaseFund('162411',0,'100');
}

function purchaseFund(code, count, money) {
    // log(code, count, money);
    toast('inside');
    const codeInput = id("fund_display").findOne();
    // toast(codeInput);
    codeInput.click();
    // codeInput.setText(code);
    
    const input_code = id("s_edittext").findOne();
    input_code.setText(code);
    sleep(1000);
    KeyCode('KEYCODE_ENTER');
    sleep(1000);
    toast('next');
    input_code.click();
    sleep(1000);
    className('android.widget.ToggleButton').findOne().click();
    sleep(1000)
    // const moneyBtn = id("et_right").findOnce().parent();
    // moneyBtn.click();
    // sleep(1000);
    // id("btn_ok").findOnce().click();
    KeyCode('KEYCODE_ENTER');
    sleep(1000);
    btn = text('162411.SZ').findOne().parent();
    log(btn);
    btn.click();
    

    // id("s_txt_code").findOne().parent().click();
    sleep(2000);
}

// main("162411", "6", "100");
purchaseFund("162411", "6", "100");
// toast('finish',5000);
// click(300,350);
// sleep(1000);