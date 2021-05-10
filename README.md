# port
- client: 3000
- mysql : 12340
- proxy : 12341
- redis : 12342
- server: 12343

# docker
```
$ docker-compose up -d --build
```

# server
```
$ ./docker-ruby
$ rails db:create
$ rails db:migrate
$ open http://localhost:12343
```

# client
```
$ yarn
$ yarn start
$ open http://localhost:3000
```

# debug
```
$ binding.pry
$ docker attach --detach-keys="ctrl-a" fitness2_server-ruby_1
```

# rspec
```
$ bin/docker exec admin bundle exec rspec spec/queries/questions/related_consultation_list_to_article_query_spec.rb
```

# rubocop
```
$ bin/docker exec site bundle exec rubocop -a
```

## mailHog ← 準備中
http://localhost:8025
