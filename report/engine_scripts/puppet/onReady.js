module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);

  await page.evaluate(async () => {
    await document.fonts.ready;
  });
};
