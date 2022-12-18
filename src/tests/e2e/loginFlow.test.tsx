/**
 * @jest-environment puppeteer
 */
import 'expect-puppeteer';

const baseUrl = 'http://localhost:3000';

beforeEach(async () => {
  await page.goto(baseUrl);
});

describe('super awesome end to end tests', () => {
  jest.setTimeout(20000);

  describe('dashboard', () => {
    test('if it loads total rewards overview card', async () => {
      await checkPageTextContains('Total Rewards');
    });

    test('if it loads rewards history card', async () => {
      await checkPageTextContains('Reward History');
    });

    test('if it loads CO2 savings history card', async () => {
      await checkPageTextContains('CO2 Savings History');
    });
  });

  describe('navigation', () => {
    test('if you can navigate to history page', async () => {
      await page.click('a[href="/history"]');

      const url = await page.url();
      console.log(url);
      expect(url).toBe(`${baseUrl}/history`);
      await checkPageTextContains('Rewards History');
    });
  });
});

async function checkPageTextContains(substring: string) {
  const text = await page.evaluate(() => document.body.textContent);
  expect(text).toContain(substring);
}
