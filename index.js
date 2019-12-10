const{Builder,By,Key,util} = require("selenium-webdriver");
async function example(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://demo.1crmcloud.com/login.php");
    const user = By.id("login_user");
    const pas = By.id("login_pass");
    const profil = By.className("meta-profile");
    await driver.findElement(user).sendKeys("admin");
    await driver.findElement(pas).sendKeys("admin", Key.RETURN);
    await driver.sleep(10000);
    await driver.findElement(profil).click();
}
example();