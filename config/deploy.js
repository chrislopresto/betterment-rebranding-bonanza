/* eslint-env node */

module.exports = function(deployTarget) {
  var Promise = require('ember-cli/lib/ext/promise');
  var herokuAppName = 'chrislopresto-rails';
  var redisKeyPrefix = 'betterment-rebranding-bonanza';

  var ENV = {
    build: {},
    s3: {},
    pipeline: {},
    slack: {
      webhookURL: process.env.BETTERMENT_REBRANDING_BONANZA_SLACK_WEBHOOK
    },
    redis: {
      allowOverwrite: true,
      keyPrefix: redisKeyPrefix + ':index',
      filePattern: 'index.json'
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';

    // Standardize revision key for all development deploys
    ENV.redis.revisionKey = 'development';
    ENV.redis.url = process.env.BETTERMENT_REBRANDING_BONANZA_REDIS_URL;
    ENV.pipeline.disabled = {
      allExcept: ['build', 'json-config', 'redis']
    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.region = process.env.BETTERMENT_REBRANDING_BONANZA_AWS_REGION;
    ENV.s3.accessKeyId = process.env.BETTERMENT_REBRANDING_BONANZA_AWS_ACCESS_KEY_ID;
    ENV.s3.secretAccessKey = process.env.BETTERMENT_REBRANDING_BONANZA_AWS_SECRET_ACCESS_KEY;
    ENV.s3.bucket = 'betterment-rebranding-bonanza-assets';
  }

  return new Promise(function(resolve, reject) {
    var exec = require("child_process").exec;
    var command = "heroku config:get REDISTOGO_URL --app " + herokuAppName;
    exec(command, function(error, stdout /*, stderr*/) {
      ENV.redis.url = stdout.replace(/\n/, "").replace(/\/\/h:/, "//:");
      if (error) {
        reject(error);
      } else {
        resolve(ENV);
      }
    });
  });
};
