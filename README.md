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
