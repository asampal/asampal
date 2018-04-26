FROM gcr.io/valued-throne-148713/nodejs:latest

# This is to make sure the packages are cached and
# not rebuild each time unless package.json changes.
COPY package.json /app/package.json
WORKDIR /app
# You have to specify "--unsafe-perm" with npm install
# when running as root.  Failing to do this can cause
# install to appear to succeed even if a preinstall
# script fails, and may have other adverse consequences
# as well.
# This command will also cat the npm-debug.log file after the
# build, if it exists.
RUN npm install --unsafe-perm || \
  ((if [ -f npm-debug.log ]; then \
      cat npm-debug.log; \
    fi) && false)

COPY . /app/

EXPOSE 3000

CMD ["node", "/app/bin/www"]
