# asampal

## How to use

Adjust the variables in docker-compose.yml

| Variable    | Default Value | Description                                     |
| ----------- | ------------- | ----------------------------------------------- |
| WAIT        | 10000         | How long the service B will wait to respond.    |
| CONCURRENCY | 5000          | How many total request for the benchmark        |
| REQUESTS    | 5000          | How many concurrent request s for the benchmark |

Run it like this:

`docker-compose up`
