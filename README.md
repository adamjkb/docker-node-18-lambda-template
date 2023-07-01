# Minimal Docker container template for AWS Lambda using Node 18

Minimum viable Docker container setup optimized for local development. 

### Deployment

Official guide:

https://docs.aws.amazon.com/lambda/latest/dg/nodejs-image.html

Terraform + CI:

https://www.litiverse.com/posts/deploying-docker-image-lambda

### Running image

Run following update after each changes to rebuild image and start it:

```bash
docker compose up --build
```

Invoke lambda function using `curl`:

```bash
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{ "limit": 3 }'
# pipe to `| jq .` if installed
```

### Local development

Consider installing npm packages locally for Typescript completion and eslint linting:

```bash
npm i
```


### Features:

- Bundled by esbuild
- eslint
- ESM