class ArticlesController < ApplicationController
  # 記事の一覧表示
  def index
  end

  # 記事の表示
  def show
  end

  # 記事の作成
  def new
  end

  # 記事の登録
  def create

    @article = Article.new(article_params)
    @article.save

    render json: { status: 'SUCCESS', message: 'Created posts', data: ['bbb'] }
  end

  # 記事の編集
  def edit
  end

  # 記事の更新
  def update
  end

  # 記事の削除
  def destroy
  end

  private
  def article_params
    params.require(:article).permit(:title, :text)
  end
end
