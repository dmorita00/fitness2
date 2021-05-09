Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users, controllers: {
      sessions: 'users/sessions'
  }
  mount LetterOpenerWeb::Engine, at: "/letter_opener"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
