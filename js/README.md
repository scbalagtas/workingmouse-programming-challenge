# Programming Challenge - Javascript

Supported versions, >12.x

## Running

### Local

For installation, see https://nodejs.org/en/download/.

```bash
$ cd js
$ yarn
$ yarn start
```

### Note from Steven :)

To whoever is reviewing this sorry in advance. I just realised migrating this challenge to TypeScript probably broke the the ability to run this in docker like the instructions below suggest. Sorry :)

### Docker

_Update `<absolute-path-to>`_.

```bash
$ docker run -it --rm -v <absolute-path-to>/programming-challenge/js:/usr/programming-challenge -w /usr/programming-challenge node:lts-alpine node programming-challenge.js
```
