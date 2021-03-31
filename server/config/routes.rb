Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get "article", to: "articles#index", as: :articles
  get "article/:id", to: "articles#show", as: :article
  post "article/create", to: "articles#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
