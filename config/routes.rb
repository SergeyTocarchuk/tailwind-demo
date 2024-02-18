Rails.application.routes.draw do

  namespace 'account' do
    resources :profiles, only: :index
    resources :subscriptions, only: :index
    resources :interests, only: :index
  end

end
