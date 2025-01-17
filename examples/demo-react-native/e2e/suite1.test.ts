import { by, device, element, expect } from 'detox';

describe('Demo Overflow', () => {
  beforeAll(async () => {
    await device.relaunchApp();
  });

  it('find overflow view', async () => {
    await waitFor(element(by.id('test_ID'))).toBeVisible().withTimeout(500);
    await expect(element(by.id('test_ID'))).toBeVisible();
  });
});
