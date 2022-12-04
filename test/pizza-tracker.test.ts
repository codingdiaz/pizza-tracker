import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as PizzaTracker from '../lib/pizza-tracker-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new PizzaTracker.PizzaTrackerStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
