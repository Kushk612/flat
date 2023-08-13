class AdduserNameToAirline < ActiveRecord::Migration[7.0]
  def change
    add_column :airlines, :user_Name, :string
  end
end
