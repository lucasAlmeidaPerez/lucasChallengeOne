const chai = require("chai")
chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should()
const request = require("request")
chai.use(chaiHttp);
const urlBase = "https://sabion-challenge-one.herokuapp.com/api";

describe("Teste API sabion-challenge-one",function(){
  
  it("Deve receber pelo menos 15 bots",function(done){
    request.get(
      {
        url : urlBase + "/bots"
      },
      function(error, response, body){

        // precisamos converter o retorno para um objeto json
        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        
        expect(response.statusCode).to.equal(200);

       
        if( _body.should.have.property('total') ){
         
          expect(_body.total).at.least(15);
        }

        done(); 
      }
    );
  });

  it("Deve receber o por ID' ",function(done){
    
    request.get(
      {
        url : urlBase + "/bots/5d16b91abcf9822044fa1945" 
      },
      function(error, response, body){

        
        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        
        expect(response.statusCode).to.equal(200);

        
        if( _body.should.have.property('name') ){
          
          expect(_body.name).to.have.lengthOf.at.least(1);

          
          
          
          
        }

        done(); 
      }
    );
  });

    /*it('Deve cadastrar um bot ', (done) => {
          let bot = {
             name: "Bot000100 Prime"
          }
        chai.request(urlBase)
            .post('/bots')
            .send(bot)
            .end((err, res,) => {
                  expect(res.statusCode).to.equal(200)
                  res.body.should.have.property('createdAt')

              done()
            });
      });*/


    it('Deve atualizar um bot pelo ID', (done) => {
          let bot = {
             name: "Bot000100 tester"
          }
        chai.request(urlBase)
            .put('/bots/5d1a21b373303d00172ed39e')
            .send(bot)
            .end((err, res) => {
            	
			    var _body = {};
		        try{
		          _body = JSON.parse(res.body);
		        }
		        catch(e){
		          _body = {};
		        }


                  expect(res.statusCode).to.equal(200)
                  expect(res.body.should.have.property('name').to.equal('Bot000100 tester'))
              
              done()
            });
      });


     it('Deve deletar um bot pelo ID', (done) => {
          
        chai.request(urlBase)
            .delete('/bots/5d1a23a773303d00172ed39f')
            .end((err, res) => {
                  expect(res.statusCode).to.equal(200)
              	  

    
				    request.get(
				      {
				        url : urlBase + "/bots/5d1a23a773303d00172ed39f" 
				      },
				      function(error, response, body){

				        
				        var _body = {};
				        try{
				          _body = JSON.parse(body);
				        }
				        catch(e){
				          _body = {};
				        }

				        
				         expect(response.body).to.equal('null');

				        
				      
				         
				          
				        })

       				  done()
      
   






            
            });
      });


});
