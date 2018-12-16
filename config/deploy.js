/* eslint-env node */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    s3: {},
    pipeline: {}
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';

    // Standardize revision key for all development deploys
    ENV.pipeline.disabled = {
      allExcept: ['build']
    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV['s3'] = {
      accessKeyId: process.env.BETTERMENT_REBRANDING_BONANZA_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.BETTERMENT_REBRANDING_BONANZA_AWS_SECRET_ACCESS_KEY,
      bucket: 'betterment-rebranding-bonanza-assets',
      region: process.env.BETTERMENT_REBRANDING_BONANZA_AWS_REGION
    };

    ENV['s3-index'] = {
      accessKeyId: process.env.BETTERMENT_REBRANDING_BONANZA_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.BETTERMENT_REBRANDING_BONANZA_AWS_SECRET_ACCESS_KEY,
      bucket: 'betterment-rebranding-bonanza-index',
      region: process.env.BETTERMENT_REBRANDING_BONANZA_AWS_REGION
    };
  }

  return ENV;
};
