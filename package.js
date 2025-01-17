Package.describe({
  name: 'tunguska:reactive-aggregate',
  version: '1.3.8',
  summary: 'Publish aggregations reactively',
  git: 'https://github.com/robfallows/tunguska-reactive-aggregate',
  documentation: 'README.md',
});

Npm.depends({
  'simpl-schema': '1.12.3',
});

Package.onUse(function (api) {
  api.versionsFrom('1.5');
  api.use('mongo');
  api.use('ecmascript');
  api.use('promise');
  api.mainModule('aggregate.js', 'server');
});
