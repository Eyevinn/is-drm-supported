# [2.0.0](https://github.com/Eyevinn/is-drm-supported/compare/v1.4.1...v2.0.0) (2024-06-13)


* feat!: update playready key system checks ([0051866](https://github.com/Eyevinn/is-drm-supported/commit/0051866d57421d3ff52207918e519a9ba19b8e31))


### BREAKING CHANGES

* The original isPlayreadySupported has been renamed to
isPlayreadyLegacySupported. The new isPlayreadySupported
now checks com.microsoft.playready.recommendation.

com.microsoft.playready is deprecated by Microsoft.

https://learn.microsoft.com/en-us/playready/overview/key-system-strings

## [1.4.1](https://github.com/Eyevinn/is-drm-supported/compare/v1.4.0...v1.4.1) (2023-02-28)


### Bug Fixes

* remove node engine limitation ([018a823](https://github.com/Eyevinn/is-drm-supported/commit/018a823e9a46f43310e48716951c2e85d90f3865))

# [1.4.0](https://github.com/Eyevinn/is-drm-supported/compare/v1.2.1...v1.4.0) (2023-02-27)


### Features

* add legacy fairplay support ([26fe083](https://github.com/Eyevinn/is-drm-supported/commit/26fe0833fd6fcd384ce28113d8eb2b277c820ea1))

## [1.2.1](https://github.com/Eyevinn/is-drm-supported/compare/v1.2.0...v1.2.1) (2022-03-28)


### Bug Fixes

* working fairplay check ([a1983b3](https://github.com/Eyevinn/is-drm-supported/commit/a1983b375437a068b6a60e213894a0cdb322eed5))

# [1.2.0](https://github.com/Eyevinn/is-drm-supported/compare/v1.1.0...v1.2.0) (2021-12-15)


### Features

* remove accidental polyfilling ([296ad05](https://github.com/Eyevinn/is-drm-supported/commit/296ad053d0ba762a0bae186b1c095d3306631304))

# [1.1.0](https://github.com/Eyevinn/is-drm-supported/compare/v1.0.1...v1.1.0) (2021-12-15)


### Bug Fixes

* update linst-staged to correctly run scripts ([78ddbe6](https://github.com/Eyevinn/is-drm-supported/commit/78ddbe6026c562c64baa6242b8432b50434c03f1))


### Features

* add isPlayreadyChromecastSupported ([a3a4b40](https://github.com/Eyevinn/is-drm-supported/commit/a3a4b40b6cd097cc1290858967571594325f4e9a))

## [1.0.1](https://github.com/Eyevinn/is-drm-supported/compare/v1.0.0...v1.0.1) (2021-12-03)


### Bug Fixes

* update license ([86ed16a](https://github.com/Eyevinn/is-drm-supported/commit/86ed16af65af9e3cb0531ea4e059400cd2394671))

# 1.0.0 (2021-12-03)


### Features

* add source code ([c278af2](https://github.com/Eyevinn/is-drm-supported/commit/c278af2ae4af92560c0b5dd68acf4daca76d7643))
