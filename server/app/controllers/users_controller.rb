class UsersController < ApplicationController
  def index
    render json: { status: "SUCCESS", message: "Loaded posts", data: ["aaa"] }
  end
end
