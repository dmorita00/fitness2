require "rails_helper"

RSpec.describe "Articles", type: :request do
  describe "GET /article#index" do
    before do
      FactoryBot.create_list(:article, 3)
    end
    it "正常レスポンスコードが返ってくる" do
      get articles_url
      expect(response.status).to eq(200)
    end
    it "件数が正しく返ってくる" do
      get articles_url
      json = JSON.parse(response.body)
      expect(json["data"].length).to eq(3)
    end
    it "id降順にレスポンスが返ってくる" do
      get articles_url
      json = JSON.parse(response.body)
      first_id = json["data"][0]["id"]
      expect(json["data"][1]["id"]).to eq(first_id - 1)
      expect(json["data"][2]["id"]).to eq(first_id - 2)
    end
  end

  describe "GET /article#show" do
    let(:article) do
      FactoryBot.create(:article, title: "showテスト")
    end
    it "正常レスポンスコードが返ってくる" do
      get article_url(id: article.id )
      expect(response.status).to eq 200
    end
    it "titleが正しく返ってくる" do
      get article_url(id: article.id)
      json = JSON.parse(response.body)
      expect(json["data"]["title"]).to eq("showテスト")
    end
    it "存在しないidの時に404レスポンスが返ってくる" do
      get article_url({ id: article.id + 1 })
      expect(response.status).to eq 404
    end
  end
end
