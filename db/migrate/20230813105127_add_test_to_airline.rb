class AddTestToAirline < ActiveRecord::Migration[7.0]
  def change
    add_column :airlines, :test, :string
  end
end
