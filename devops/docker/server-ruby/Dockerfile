FROM ruby:2.6.3

RUN curl https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq && \
    apt-get install -y build-essential \
                       libpq-dev \
                       nodejs \
                       yarn

COPY server /code/server
ADD server/Gemfile $APP_ROOT/Gemfile
ADD server/Gemfile.lock $APP_ROOT/Gemfile.lock
ENV APP_ROOT /code/server
WORKDIR $APP_ROOT

RUN bundle update --bundler
RUN bundle install
ADD . $APP_ROOT

#EXPOSE 3000

# CMD ["rails", "server", "-b", "0.0.0.0"]
