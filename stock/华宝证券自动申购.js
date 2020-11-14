// 公众号：可转债量化分析
// 华宝证券自动申购 162411 , 可自行修改申购基金代码与金额
function main(code,money) {
    //申购金额
    app.launchApp("华宝智投");
    sleep(1000);
    
    //交易按钮
    trade=desc("交易").findOne().parent().parent().parent().parent();
    trade.click();
    sleep(1000);
     
    text("场内基金").findOne().parent().click();
    sleep(1000);
    
    text("场内申购").findOne().parent().click();
    sleep(500);

    id("fund_display").click();
    sleep(1000);
    input_code = id("s_edittext").findOne();
    input_code.setText(code);
    sleep(2000);
    KeyCode('KEYCODE_ENTER');
    sleep(1000);
    input_code.click();
    sleep(1000);

    click(150,400); //选择搜索结果
    sleep(1000);

    for (let i = 0; i < stock_holder.length; i++) {
        //点击账号选择        
        id("tv_shareholder_account").findOne().click();
        sleep(1000);
        text(stock_holder[i]).findOne().parent().click();
        log(stock_holder[i]);
        sleep(1000);

        text("输入申购金额").findOnce().setText(money);        
        sleep(1000);
        
        text("确定申购").findOnce().click();
        sleep(1000);
        
        id("btn_right").findOnce().click();//完成
        sleep(1000);

        text("完成").findOnce().click();
        sleep(1000);
        
    }
    
} 
var code = "162411"; //申购代码
var money=100; //申购金额

//这里需要替换为你的深市股东号，有多少个写多少个
//因为本人的华宝只有一个股东号，所以无法确切的验证多个号能否在不同设备正常运行
// 例子 stock_holder = ['000888',']
var stock_holder=["1","2","3","4","5","6"] // 股东号，根据情况修改

main(code,money);