describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    // await expect(element(by.id('welcome'))).toBeVisible();


    setTimeout(async () => {
      await expect(element(by.id("Hello01"))).toBeVisible();
    }, 23000);

  });




  it("Click Button", async () => {
    // await expect(element(by.id('welcome'))).toBeVisible();


    await waitFor(element(by.id('Button')))
      .toBeVisible()
      .withTimeout(2000);
    try {
      await element(by.id('Button')).tap();
    } catch (e) {}



    expect(element(by.id("resDetail"))).toBeVisible();


  });

  //
  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });
  //
  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
