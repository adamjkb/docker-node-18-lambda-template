# Install dependencies and bundle handler
FROM public.ecr.aws/lambda/nodejs:18 as builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM public.ecr.aws/lambda/nodejs:18

WORKDIR ${LAMBDA_TASK_ROOT}

COPY --from=builder /usr/app/dist/* ./

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "lambda.handler" ]