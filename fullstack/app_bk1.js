var express = require('express');
var app = express();
var port=9000;
var hotelRouter = express.Router();
var cityRouter = express.Router();

hotels = [{
	"id" : "6360",
	"name" : "Gulab",
	"city" : "Delhi",
	"locality" : "Pitampura, New Delhi",
	"thumb" : "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
	"aggregate_rating" : "4.2",
    "rating_text" : "Very Good",
    "min_price": "230"
},
{
	"id" : "307406",
	"name" : "Pandit Ji Parantha Hut",
	"locality" : "Ashok Vihar Phase 2",
	"city" : "Delhi",
	"thumb" : "https://b.zmtcdn.com/data/pictures/5/19295175/231f0337cd9140f230d8208ddde923c9.jpg",
	"aggregate_rating" : "4.0",
    "rating_text" : "Very Good",
    "min_price": "530"
},
{
	"id" : "2008",
	"name" : "Hira Sweets",
	"locality" : "Laxmi Nagar",
	"city" : "Delhi",
	"thumb" : "https://b.zmtcdn.com/data/reviews_photos/15b/d3faa48ac6382d15d60ca96b501dc15b_1570259732.jpg",
	"aggregate_rating" : "4.0",
	"rating_text" : "Very Good",
    "min_price": "450"
},
{

	"id" : "553",
	"name" : "Haldiram's",
	"locality" : "Lajpat Nagar 2",
	"city" : "Delhi",
	"thumb" : "https://b.zmtcdn.com/data/pictures/4/18932104/e90bb17c3b05e7a39251378389afe651.jpg",
	"aggregate_rating" : "4.1",
	"rating_text" : "Very Good",
    "min_price": "280"
},
{

	"id" : "18453961",
	"name" : "Food Adda",
	"locality" : "Borivali West",
	"city" : "Mumbai",
	"thumb" : "https://b.zmtcdn.com/data/pictures/7/18690357/0df7f4ca0c645a68a1657b1e69b015fa.jpg",
	"aggregate_rating" : "4.2",
	"rating_text" : "Very Good",
    "min_price": "530"
},
{
	"id" : "35105",
	"name" : "McDonald's",
	"locality" : "Mira Road",
	"city" : "Mumbai",
	"thumb" : "https://b.zmtcdn.com/data/pictures/chains/9/35079/2be67efb4302119d103affa1c5f85ee0.jpg",
	"aggregate_rating" : "4.1",
	"rating_text" : "Very Good",
    "min_price": "980"
},
{
	"id" : "40853",
	"name" : "Hardeep Punjab",
	"locality" : "Sion",
	"city" : "Mumbai",
	"thumb" : "https://b.zmtcdn.com/data/pictures/3/40853/6575f9f7e5b67f8b43364fff733b898c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
	"aggregate_rating" : "4.4",
	"rating_text" : "Very Good",
    "min_price": "890"
},
{
	"id" : "41769",
	"name" : "Shalimar",
	"locality" : "Mohammad Ali Road",
	"city" : "Mumbai",
	"thumb" : "https://b.zmtcdn.com/data/pictures/chains/0/38430/c657dda522a081edaec24884fb0dcebb.jpg",
	"aggregate_rating" : "4.0",
	"rating_text" : "Very Good",
    "min_price": "130"
},
{
	"id" : "12073",
	"name" : "Satguru's Punjabi Rasoi",
	"locality" : "Destination Centre Magarpatta",
	"city" : "Pune",
	"aggregate_rating" : "4.2",
	"rating_text" : "Very Good",
    "min_price": "670",
	"thumb" : "https://b.zmtcdn.com/data/pictures/3/12073/a8e288f382c2950ffe4819aa47a82b7b.jpg"
},
{
	"id" : "6508401",
	"name" : "Apna Punjab",
	"locality" : "Magarpatta",
	"city" : "Pune",
	"thumb" : "https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",
	"aggregate_rating" : "4.1",
	"rating_text" : "Very Good",
    "min_price": "650"
},
{
	"id" : "13813",
	"name" : "Teri Rajput",
	"locality" : "Koregaon Park",
	"city" : "Pune",
	"aggregate_rating" : "4.1",
	"rating_text" : "Very Good",
    "min_price": "570",
	"thumb" : "https://b.zmtcdn.com/data/pictures/3/13813/0ace082a85ec491574e8cea325482a6e.jpg"
},
{
	"id" : "18731537",
	"name" : "Empire Restaurant",
	"locality" : "Rajajinagar",
	"city" : "Bangalore",
	"thumb" : "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",
	"aggregate_rating" : "4.4",
	"rating_text" : "Very Good",
    "min_price": "290"
},
{
	"id" : "61381",
	"name" : "Kota Kachori",
	"locality" : "Koramangala 6th Block",
	"city" : "Bangalore",
	"thumb" : "https://b.zmtcdn.com/data/pictures/1/61381/67f358c29c0497e73556490bafc9f374.jpg",
	"aggregate_rating" : "4.2",
	"rating_text" : "Very Good",
    "min_price": "130"
},
{
	"id" : "19070793",
	"name" : "JnJ's",
	"locality" : "Sector 28",
	"city" : "Chandigarh",
	"aggregate_rating" : "4.0",
	"rating_text" : "Very Good",
    "min_price": "870",
	"thumb" : "https://b.zmtcdn.com/data/pictures/chains/9/18904519/2a7cc85404716ac8d886bccbc5b1635f.jpg"
},
{
	"id" : "123334",
	"name" : "Captain Sam's",
	"locality" : "Sector 70",
	"city" : "Chandigarh",
	"thumb" : "https://b.zmtcdn.com/data/reviews_photos/c7a/634a2c0def8a8d044992aea9e7680c7a_1556257724.jpg",
	"aggregate_rating" : "3.9",
    "min_price": "670",
	"rating_text" : "Good"
}],


city = [
    {
		"id": 1,
		"name": "Delhi",
		"country_id": 1,
		"country_name": "India",
		"country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_1.png",
	},
    {
		"id": 3,
		"name": "Mumbai",
		"country_id": 1,
		"country_name": "India",
		"country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_1.png",
		
    },
    {
		"id": 280,
		"name": "New York City, NY",
		"country_id": 216,
		"country_name": "United States",
		"country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_216.png",
		
    },
    {
        "id": 32,
		"name": "Pune",
		"country_id": 1,
		"country_name": "India",
		"country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_1.png",
	        
	},
	{
		"id": 77,
		"name": "Chandigrah",
		"country_id": 1,
		"country_name": "India",
		"country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_1.png",
	
	},
    {
		"id": 4,
		"name": "Bangalore",
		"country_id": 1,
		"country_name": "India",
		"country_flag_url": "https://b.zmtcdn.com/images/countries/flags/country_1.png",
    }
]

app.get('/',function(req,res){
    res.send("Hi from express")
})
cityRouter.route('/')
.get(function(req,res){
     res.send(city)
})
cityRouter.route('/details')
.get(function(req,res){
    res.send('city details')
})

hotelRouter.route('/')
.get(function(req,res){
    res.send(hotels)
})
hotelRouter.route('/details')
.get(function(req,res){
    res.send('hotel details')
})
app.use('/hotel',hotelRouter)
app.use('/city',cityRouter)
app.listen(port,function(err){
    if(err)throw err;
    else{
        console.log("Server is running on port"+port)
    }
})