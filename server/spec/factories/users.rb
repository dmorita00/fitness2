FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "morita#{n}"}
  end
end
