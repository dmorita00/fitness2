Rails.application.routes.draw do
  get "users/index"
  get "article", to: "articles#index"
  post "article/create", to: "articles#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
