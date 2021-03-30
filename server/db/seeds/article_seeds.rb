unless Article.exists?
  20.times do
    Article.create!(title: Faker::Lorem.word, text: Faker::Lorem.paragraph)
  end
end