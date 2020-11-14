// 公众号： 可转债量化分析
// 银河拖拉机 批量卖出

function main(code, count, price) {
    log(code, count, price);
    if (!code) {
        toast("请输入基金代码");
        return;
    }
    if (!count) {
        toast("股东账户数量");
        return;
    }
    if (!price) {
        toast("申购金额");
        return;
    }
    // app.launchApp("中国银河证券");
    // waitForPackage("com.galaxy.stock");
    // log("成功打开银河证券");
    // sleep(1000);
    // // 切换到【交易】tab
    // const tradeBtn = text("交易")
    //     .findOne()
    //     .parent()
    //     .parent();
    // log(tradeBtn);
    // tradeBtn.click();

    //点击【场内基金】
    sleep(1000);
    const internalFund = text("卖出")
        .findOne();
    internalFund.click();
    sleep(3000);
    //点击【基金申购】
    // waitForActivity("cn.com.chinastock.trade.activity.LofActivity");
    
    sell_stock(code, count, price);
}

function sell_stock(code, count, price) {
    for (let i = 0; i < count; i++) 
    {
        log(code, count, price);

        const input_name  = text("请输入名称代码")
        .findOne();
        input_name.click();
        sleep(1000);
        const input_name_  = text("输入股票代码或拼音首字母")
        .findOne();
        input_name_.setText(code);
        sleep(1000);

    // 默认价格 买1
    // const assign_price = text("委托价格").findOnce().parent();
    // assign_price.setText(price);
    // sleep(1000);
        id('secuid').click();
        sleep(1000);
        className('android.view.View').depth(6).findOne().parent().scrollDown()
        sleep(10000);
        
    // const sold_count = text("全仓").findOne().parent();
    // sold_count.click();
    // sleep(1000);
    
    // sold_btn = text("卖出");
    // sold_btn.click();
    // sleep(1000);

    // text('确认卖出').click();
    // text('确定').click();

}
}
//卖出价
var price = '0.237' 
main("162411", "6",price);
toast('Done')