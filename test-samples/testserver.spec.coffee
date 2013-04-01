describe "test the web server...", ->
  it "should return a 200", (done) ->
    request 'http://localhost:2000', (error, response, body) ->
      expect response.statusCode toEqual 200
      console.log response
