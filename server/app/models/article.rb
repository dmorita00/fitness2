class Article < ApplicationRecord
  validates :title, presence: true, length: { maximum: 30 }
  validates :text, presence: true, length: { maximum: 100 }
  belongs_to :user
end
