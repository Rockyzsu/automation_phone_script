
launchApp("什么值得买")
waitForPackage("com.smzdm.client.android")
sleep(8000)


sleep(2000)
click(982,2308)
sleep(2000)
click(807,670)
sleep(3000)

click(550,1828)
sleep(3000)

text("去完成").findOne(2000).click()
text("去完成").findOne(2000).click()
sleep(5000)
back()
sleep(3000)



text("去完成").findOne(2000).click()
sleep(1000)
text("去完成").findOne(5000).click()
text("分享").findOne(10000).parent().parent().click()
text("微信好友").findOne(5000).click()
sleep(5000)
back()
sleep(4000)
back()
sleep(3000)

var a = text("达人关注任务").findOne(1000)
if(a){
    text("去完成").findOne(2000).click()
    sleep(3000)
    // click(935,480)
    click(830,1014)
    sleep(3000)
    back()
    sleep(5000)
}
else{
    text("去完成").findOne(2000).click()
    sleep(3000)
    click(935,457)
    // click(830,772)
    sleep(3000)
    back()
    sleep(5000)
}




text("领奖励").findOne(2000).click()
sleep(2000)
text("朕知道了").findOne(2000).click()
sleep(2000)
text("领奖励").findOne(2000).click()
sleep(2000)
text("朕知道了").findOne(2000).click()
sleep(2000)
text("领奖励").findOne(2000).click()
sleep(2000)
text("朕知道了").findOne(2000).click()
sleep(2000)



swipe(579, 1050, 579, 880, 25)
sleep(3000)
click(508,1432)
sleep(3000)
click(548,2299)
sleep(4000)
click(459,2281)
sleep(2000)
setText("先收藏一下，紫薯布丁，紫薯布丁,。")
sleep(2000)
click(1016,1483)
sleep(2000)
back()
sleep(2000)
back()

sleep(3000)
swipe(579, 1050, 579, 880, 25)
sleep(3000)
click(508,1732)
sleep(4000)
click(548,2299)
sleep(2000)
click(459,2281)
sleep(2000)
setText("你写的真棒呢,紫薯布丁。")
sleep(2000)
click(1016,1483)
sleep(2000)
back()
sleep(2000)
back()

sleep(3000)
swipe(579, 1050, 579, 880, 25)
sleep(3000)
click(508,2032)
sleep(4000)
click(548,2299)
sleep(2000)
click(459,2281)
sleep(2000)
setText("分享的东西很棒，收藏一下，。")
sleep(2000)
click(1016,1483)
sleep(2000)
back()
sleep(2000)
back()


home()

