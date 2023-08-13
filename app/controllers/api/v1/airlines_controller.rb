module Api
    module V1
        class AirlinesController < ApplicationController
            def index   
                airlines = Airline.all.map do |airline|
                    {
                        name: airline.name,
                        image_url: airline.image_url,
                        slug: airline.slug
                    }
                end

                render(json: { airlines: airlines })
            end
        end
    end
end