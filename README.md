# fitness

# port
12342: client
12341: server
3306 : mysql

# docker-compose
docker-compose up -d --build

# client
./docker-client

# server
./docker-ruby

- debug
  - binding.pry
  - docker attach --detach-keys="ctrl-a" fitness2_server-ruby
- rspec
  - bin/docker exec admin bundle exec rspec spec/queries/questions/related_consultation_list_to_article_query_spec.rb
- rubocop
  - bin/docker exec site bundle exec rubocop -a

## mailHog
http://localhost:8025
