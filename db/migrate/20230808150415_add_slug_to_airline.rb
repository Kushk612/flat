class AddSlugToAirline < ActiveRecord::Migration[7.0]
  def change
    add_column :airlines, :slug, :string
  end
end
