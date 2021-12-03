# is-drm-supported

Tiny MSE video and audio DRM detection library.

## Usage

The package exports the following asynchronous methods:

> isPlayreadySupported
> 
> isPlayreadyRecommendedSupported
> 
> isWidevineSupported
> 
> isFairplaySupported

## Example

```typescript
import { isFairplaySupported } from "@eyevinn/is-drm-supported";

const isSupported = await isFairplaySupported();
```

## Contributing


The project uses semantic-release to **automatically generate release notes** based on commits, it is important to follow some rules when committing.

This project uses [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

Read [Using Git with Discipline](https://drewdevault.com/2019/02/25/Using-git-with-discipline.html).

Read [How to Write a Commit Message](https://chris.beams.io/posts/git-commit/).
