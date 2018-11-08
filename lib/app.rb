require 'sinatra/base'
require 'shotgun'

class App < Sinatra::Base
  enable :sessions, :method_override

  get '/' do
    if session[:location] == nil
      redirect '/setup'
    else
      @loc = session[:location]
      puts "Session with Location :" + @loc
      erb(:index)
    end
  end

  get '/setup' do
    erb(:setup)
  end

  post '/setup' do
    session.clear
    session[:location] = params[:location]
    redirect '/'
  end

  get '/reset' do
    session[:location] = nil
    session.clear
    redirect '/'
  end
end