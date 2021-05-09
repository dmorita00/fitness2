Rails.application.config.middleware.insert_before 0, Rack::Cors, debug: true, logger: (-> { Rails.logger }) do
  allow do
    origins 'http://127.0.0.1:12341'

    resource '*',
             :headers => :any,
             :methods => [:get, :post, :delete, :put, :patch, :options, :head],
             :expose => :any
  end
end