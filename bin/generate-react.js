#!/usr/bin/env node

const isNotValidNodeVersion = () => {
  const currentNodeVersion = process.versions.node;
  const semver = currentNodeVersion.split('.');
  const major = semver[0];

  if (major < 12) {
    console.error(
      // eslint-disable-next-line
      'You are running Node ' +
        currentNodeVersion +
        ' Generate React CLI requires Node 12 or higher. Please update your version of Node.'
    );

    return true;
  }

  return false;
};

// --- Check if user is running Node 12 or higher.

if (isNotValidNodeVersion()) {
  process.exit(1);
}

require('../src/cli')(process.argv);
