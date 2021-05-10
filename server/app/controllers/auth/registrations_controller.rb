class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  private

  def sign_up_params
    binding.pry
    params.permit(:email, :password, :password_confirmation)
  end
end
