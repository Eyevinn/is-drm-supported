module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => /\(release\)/m.test(message)],
};
