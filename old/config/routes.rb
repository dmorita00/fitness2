Rails.application.routes.draw do
  root to: 'home#index'
  devise_scope :user do
    # get 'signin', to: 'devise_token_auth/sessions#new'
    # post 'signin', to: 'devise_token_auth/sessions#create'
    get 'signup', to: 'users/registrations#new'
    post 'signup', to: 'users/registrations#create'
    # put 'update', to: 'users/registrations#update'
  end
  # devise_for :users, controllers: {
  #     sessions: 'users/sessions'
  # }
  get "article", to: "articles#index", as: :articles
  get "article/:id", to: "articles#show", as: :article
  post "article/create", to: "articles#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
