class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :text, :created_at
  belongs_to :user
end