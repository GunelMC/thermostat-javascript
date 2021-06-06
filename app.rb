require 'sinatra/base'
require 'json'
require_relative './src/thermostat.js'

class CountApp < Sinatra::Base
  enable :sessions

  get "/" do
    File.read('index.html')
  end

  get '/temperature' do
    
  end 
 
  run! if app_file == $0
end