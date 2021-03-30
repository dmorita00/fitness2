require "rails_helper"

RSpec.describe Article, type: :model do
  describe "title" do
    context "blankの時に" do
      let(:article) do
        FactoryBot.build(:article, title: "", text: "あ")
      end
      it "invalidになる" do
        expect(article).not_to be_valid
      end
    end
    context "maxlengthにより" do
      let(:article) do
        FactoryBot.build(:article, title: "あ" * 30, text: "あ")
      end
      context "30文字の場合に" do
        it "validになる" do
          expect(article).to be_valid
        end
      end
      context "31文字の場合に" do
        let(:article) do
          FactoryBot.build(:article, title: "あ" * 31, text: "あ")
        end
        it "invalidになる" do
          expect(article).not_to be_valid
        end
      end
    end
  end

  describe "text" do
    context "blankの時に" do
      let(:article) do
        FactoryBot.build(:article, title: "あ", text: "")
      end
      it "invalidになる" do
        expect(article).not_to be_valid
      end
    end
    context "maxlengthにより" do
      let(:article) do
        FactoryBot.build(:article, title: "あ", text: "あ" * 100)
      end
      context "100文字の場合に" do
        it "validになる" do
          expect(article).to be_valid
        end
      end
      context "101文字の場合に" do
        let(:article) do
          FactoryBot.build(:article, title: "あ", text: "あ" * 101)
        end
        it "invalidになる" do
          expect(article).not_to be_valid
        end
      end
    end
  end
end
