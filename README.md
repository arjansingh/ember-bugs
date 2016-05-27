# ember-bugs

Examples of various ember bugs I come across.

## Current Bugs

### Fastboot Intermediate Transitions

1. Fastboot the app (`npm run fastboot`)
2. Visit: `http://localhost:3000/fastboot/intermediate-transition-to/when-you-visit-this-route`

Expected: You should get the template content from `should-render-this-content.hbs`

Actual: You get this error.

```
Error: TransitionAborted at handleReject (/code/ember-bugs/dist/fastboot/vendor.js:14132:17)
 at tryCatch (/code/ember-bugs/dist/fastboot/vendor.js:63911:14)
 at invokeCallback (/code/ember-bugs/dist/fastboot/vendor.js:63926:15)
 at publish (/code/ember-bugs/dist/fastboot/vendor.js:63894:9)
 at publishRejection (/code/ember-bugs/dist/fastboot/vendor.js:63829:5)
 at /code/ember-bugs/dist/fastboot/vendor.js:42159:7 at Queue.invokeWithOnError (/code/ember-bugs/dist/fastboot/vendor.js:10447:18)
 at Object.Queue.flush (/code/ember-bugs/dist/fastboot/vendor.js:10502:11)
 at Object.DeferredActionQueues.flush (/code/ember-bugs/dist/fastboot/vendor.js:10310:17)
 at Object.Backburner.end (/code/ember-bugs/dist/fastboot/vendor.js:10665:25)
 at [object Object]._onTimeout (/code/ember-bugs/dist/fastboot/vendor.js:11231:18)
 at Timer.listOnTimeout (timers.js:92:15)
```

### najax breaks Ember.NativeArray.sortBy prototype extension.

1. Fastboot the app (`npm run fastboot`)
2. Visit: `http://localhost:3000/fastboot/native-array-extensions-missing/when-najax-returns-data-with-an-array`

Expected: You should get the template content.

Actual: You get `TypeError: o.get(...).sortBy is not a function`
