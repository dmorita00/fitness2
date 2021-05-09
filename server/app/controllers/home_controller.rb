class HomeController < ApplicationController
  def index
    render json: ['aaa'], status: 200
  end
end
