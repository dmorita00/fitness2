class ArticlesController < ApplicationController
  # 記事の一覧表示
  def index
    articles = Article.includes(:user).all.order(created_at: :desc)
    render json: articles
  end

  # 記事の表示
  def show
    id = params[:id]
    article = Article.find(id)
    render json: article
  end

  # 記事の作成
  def new; end

  # 記事の登録
  def create
    article = Article.new(article_params)
    article.save

    render json: article
  end

  # 記事の編集
  def edit; end

  # 記事の更新
  def update; end

  # 記事の削除
  def destroy; end

  private

  def article_params
    params.require(:article).permit(:title, :text)
  end
end
