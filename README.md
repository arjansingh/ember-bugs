# ember-bugs

Examples of various ember bugs I come across.

## Current Bugs

### Fastboot Intermediate Transitions

1. Fastboot the app (`npm run fastboot`)
2. Visit: `http://localhost:3000/fastboot/intermediate-transition-to/when-you-visit-this-route`

Expected: You should get the template content from `should-render-this-content.hbs`

Actual: You get the template content from `when-you-visit-this-route`

### najax breaks Ember.NativeArray.sortBy prototype extension.

1. Fastboot the app (`npm run fastboot`)
2. Visit: `http://localhost:3000/fastboot/native-array-extensions-missing/when-najax-returns-data-with-an-array`

Expected: You should get the template content.

Actual: You get `TypeError: o.get(...).sortBy is not a function`
