angular.module('bbq').service('mainService', function($q, $http){
  // this.locations = [
  //   {
  //       "id": 0,
  //       "restaurant_name": "Joe's Kansas City Bar-B-Que",
  //       "address": "3002 West 47th Avenue, Kansas City, KS 66103",
  //       "phone": "(913) 722-3366"
  //   },
  //   {
  //       "id": 1,
  //       "restaurant_name": "Arthur Bryant's Barbeque",
  //       "address": "1727 Brooklyn Ave, Kansas City, MO 64127",
  //       "phone": "(816) 231-1123"
  //   },
  //   {
  //       "id": 2,
  //       "restaurant_name": "Q39 - Midtown",
  //       "address": "1000 W 39th St, Kansas City, MO 64111",
  //       "phone": "(816) 255-3753"
  //   },
  //   {
  //       "id": 3,
  //       "restaurant_name": "Smokin' Guns BBQ & Catering",
  //       "address": "1218 Swift St, North Kansas City, MO 64116",
  //       "phone": "(816) 221-2535"
  //   },
  //   {
  //       "id": 4,
  //       "restaurant_name": "Rosedale Barbeque",
  //       "address": "600 Southwest Blvd, Kansas City, KS 66103",
  //       "phone": "(913) 262-0343"
  //   },
  //   {
  //       "id": 5,
  //       "restaurant_name": "LC's Bar-B-Q",
  //       "address": "5800 Blue Pkwy, Kansas City, MO 64129",
  //       "phone": "(816) 923-4484"
  //   },
  //   {
  //       "id": 6,
  //       "restaurant_name": "B.B.'s Lawnside BBQ",
  //       "address": "1205 E 85th St, Kansas City, MO 64131",
  //       "phone": "(816) 822-7427"
  //   },
  //   {
  //       "id": 7,
  //       "restaurant_name": "Fiorella's Jack Stack Barbecue",
  //       "address": "101 W 22nd St 300, Kansas City, MO 64108",
  //       "phone": "(816) 472-7427"
  //   },
  //   {
  //       "id": 8,
  //       "restaurant_name": "Gates Bar-B-Q",
  //       "address": "1221 Brooklyn Ave, Kansas City, MO 64127",
  //       "phone": "(816) 483-3880"
  //   },
  //   {
  //       "id": 9,
  //       "restaurant_name": "Jack Stack Barbecue - Martin City",
  //       "address": "13441 Holmes Rd, Kansas City, MO 64145",
  //       "phone": "(816) 942-9141"
  //   },
  //   {
  //       "id": 10,
  //       "restaurant_name": "Gates Bar-B-Q",
  //       "address": "1325 Emanuel Cleaver II Blvd, Kansas City, MO 64110",
  //       "phone": "(816) 531-7522"
  //   },
  //   {
  //       "id": 11,
  //       "restaurant_name": "Jack Stack Barbecue - Country Club Plaza",
  //       "address": "4747 Wyandotte St, Kansas City, MO 64112",
  //       "phone": "(816) 531-7427"
  //   },
  //   {
  //       "id": 12,
  //       "restaurant_name": "Gates Bar-B-Q",
  //       "address": "1026 State Ave, Kansas City, KS 66102",
  //       "phone": "(913) 621-1134"
  //   },
  //   {
  //       "id": 13,
  //       "restaurant_name": "Danny Edward's Boulevard Barbecue",
  //       "address": "2900 Southwest Blvd, Kansas City, MO 64108",
  //       "phone": "(816) 283-0880"
  //   },
  //   {
  //       "id": 14,
  //       "restaurant_name": "Slap's BBQ",
  //       "address": "553 Central Ave, Kansas City, KS 66101",
  //       "phone": "(913) 213-3736"
  //   },
  //   {
  //       "id": 15,
  //       "restaurant_name": "Woodyard Bar-B-Que",
  //       "address": "3001 Merriam Ln, Kansas City, KS 66106",
  //       "phone": "(913) 362-8000"
  //   },
  //   {
  //       "id": 16,
  //       "restaurant_name": "Smokehouse Barbecue - Zona Rosa",
  //       "address": "8451 NW Prairie View Rd, Kansas City, MO 64153",
  //       "phone": "(816) 587-3337"
  //   },
  //   {
  //       "id": 17,
  //       "restaurant_name": "Jack Stack Catering & Private Dining",
  //       "address": "13645 Holmes Rd, Kansas City, MO 64145",
  //       "phone": "(816) 941-4309"
  //   },
  //   {
  //       "id": 18,
  //       "restaurant_name": "Back Porch Bar-B-Q",
  //       "address": "8500 E US Hwy 40, Kansas City, MO 64129",
  //       "phone": "(816) 349-2880"
  //   },
  //   {
  //       "id": 19,
  //       "restaurant_name": "Fiorella's Jack Stack BBQ",
  //       "address": "1 Arrowhead Dr, Kansas City, MO 64129",
  //       "phone": "(816) 621-7427"
  //   },
  //   {
  //       "id": 20,
  //       "restaurant_name": "Smokebox BBQ Cafe",
  //       "address": "10020 N Ambassador Dr, Kansas City, MO 64153",
  //       "phone": "(816) 891-8011"
  //   },
  //   {
  //       "id": 21,
  //       "restaurant_name": "Smokehouse Barbecue-Gladstone Mo",
  //       "address": "6304 N Oak Trafficway, Kansas City, MO 64118",
  //       "phone": "(816) 454-4500"
  //   },
  //   {
  //       "id": 22,
  //       "restaurant_name": "Big T's Bar Bq",
  //       "address": "6201 Blue Pkwy, Kansas City, MO 64129",
  //       "phone": "(816) 923-2278"
  //   },
  //   {
  //       "id": 23,
  //       "restaurant_name": "Arthur Bryant's - Legends",
  //       "address": "1702 Village W Pkwy, Kansas City, KS 66111",
  //       "phone": "(913) 788-7500"
  //   },
  //   {
  //       "id": 24,
  //       "restaurant_name": "Big Q Barbeque",
  //       "address": "2117 S 34th St, Kansas City, KS 66106",
  //       "phone": "(913) 362-6980"
  //   },
  //   {
  //       "id": 25,
  //       "restaurant_name": "Hawg Jaw Que & Brew",
  //       "address": "900 Swift St, North Kansas City, MO 64116",
  //       "phone": "(816) 741-4294"
  //   },
  //   {
  //       "id": 26,
  //       "restaurant_name": "Wyandot Barbeque",
  //       "address": "8441 State Ave, Kansas City, KS 66112",
  //       "phone": "(913) 788-7554"
  //   },
  //   {
  //       "id": 27,
  //       "restaurant_name": "Char Bar",
  //       "address": "4050 Pennsylvania Ave 150, Kansas City, MO 64111",
  //       "phone": "(816) 389-8600"
  //   },
  //   {
  //       "id": 28,
  //       "restaurant_name": "Joe's Kansas City Bar-B-Que",
  //       "address": "11723 Roe Ave, Leawood, KS 66211",
  //       "phone": "(913) 338-5151"
  //   },
  //   {
  //       "id": 29,
  //       "restaurant_name": "Deke's BBQ",
  //       "address": "5200 Raytown Rd, Kansas City, MO 64133",
  //       "phone": "(816) 737-9588"
  //   },
  //   {
  //       "id": 30,
  //       "restaurant_name": "Ricky's Pit Bar-B-Que",
  //       "address": "3800 Leavenworth Rd, Kansas City, KS 66104",
  //       "phone": "(913) 371-8088"
  //   },
  //   {
  //       "id": 31,
  //       "restaurant_name": "R & J Barbeque",
  //       "address": "8401 Parallel Pkwy, Kansas City, KS 66112",
  //       "phone": "(913) 299-1311"
  //   },
  //   {
  //       "id": 32,
  //       "restaurant_name": "Papa Bob's Bar-B-Que",
  //       "address": "11610 Kaw Dr, Kansas City, KS 66111",
  //       "phone": "(913) 422-4210"
  //   },
  //   {
  //       "id": 33,
  //       "restaurant_name": "Gates Bar-B-Q",
  //       "address": "2001 W 103rd Terrace, Leawood, KS 66206",
  //       "phone": "(913) 383-1752"
  //   },
  //   {
  //       "id": 34,
  //       "restaurant_name": "Papa Bob's Bar-B-Que",
  //       "address": "11610 Kaw Dr, Kansas City, KS 66111",
  //       "phone": "(913) 422-4210"
  //   },
  //   {
  //       "id": 35,
  //       "restaurant_name": "Brobecks Barbeque",
  //       "address": "4615 Indian Creek Pkwy, Overland Park, KS 66207",
  //       "phone": "(913) 901-9700"
  //   },
  //   {
  //       "id": 36,
  //       "restaurant_name": "Hickory Log Bar-B-Q",
  //       "address": "5047 Welborn Ln, Kansas City, KS 66104",
  //       "phone": "(913) 287-9560"
  //   },
  //   {
  //       "id": 37,
  //       "restaurant_name": "A Little BBQ Joint",
  //       "address": "1101 W US Hwy 24, Independence, MO 64050",
  //       "phone": "(816) 252-2275"
  //   },
  //   {
  //       "id": 38,
  //       "restaurant_name": "Johnny's B-B-Q",
  //       "address": "5959 Broadmoor St, Shawnee Mission, KS 66202",
  //       "phone": "(913) 432-0777"
  //   },
  //   {
  //       "id": 39,
  //       "restaurant_name": "Snead's Bar B-Q",
  //       "address": "1001 E 171st St, Belton, MO 64012",
  //       "phone": "(816) 331-7979"
  //   },
  //   {
  //       "id": 40,
  //       "restaurant_name": "Jack Stack - Overland Park",
  //       "address": "9520 Metcalf Ave, Overland Park, KS 66212",
  //       "phone": "(913) 385-7427"
  //   },
  //   {
  //       "id": 41,
  //       "restaurant_name": "Gates Bar-B-Q",
  //       "address": "3205 Main St, Kansas City, MO 64111",
  //       "phone": "(816) 753-0828"
  //   },
  //   {
  //       "id": 42,
  //       "restaurant_name": "Plowboys Barbeque",
  //       "address": "1111 Main St, Kansas City, MO 64105",
  //       "phone": "(816) 221-7569"
  //   },
  //   {
  //       "id": 43,
  //       "restaurant_name": "Wabash BBQ",
  //       "address": "646 Kansas City Ave S, Excelsior Springs, MO 64024",
  //       "phone": "(816) 630-7700"
  //   },
  //   {
  //       "id": 44,
  //       "restaurant_name": "Jack Stack Barbecue - Lee's Summit",
  //       "address": "1840 NW Chipman Rd, Lee's Summit, MO 64081",
  //       "phone": "(816) 621-7427"
  //   },
  //   {
  //       "id": 45,
  //       "restaurant_name": "Joe’s Kansas City Bar-B-Que",
  //       "address": "11950 S Strang Line Rd, Olathe, KS 66062",
  //       "phone": "(913) 782-6858"
  //   },
  //   {
  //       "id": 46,
  //       "restaurant_name": "Winslow's BBQ",
  //       "address": "20 E 5th St, Kansas City, MO 64106",
  //       "phone": "(816) 471-7427"
  //   },
  //   {
  //       "id": 47,
  //       "restaurant_name": "Burnt End BBQ",
  //       "address": "11831 Metcalf Ave, Overland Park, KS 66210",
  //       "phone": "(913) 451-8888"
  //   },
  //   {
  //       "id": 48,
  //       "restaurant_name": "R.J.'s Bob-Be-Que Shack",
  //       "address": "5835 Lamar Ave, Mission, KS 66202",
  //       "phone": "(913) 262-7300"
  //   },
  //   {
  //       "id": 49,
  //       "restaurant_name": "Plowboys BBQ",
  //       "address": "3111 MO-7, Blue Springs, MO 64014",
  //       "phone": "(816) 228-7569"
  //   },
  //   {
  //       "id": 50,
  //       "restaurant_name": "Smokehouse Barbecue - Independence",
  //       "address": "19000 E 39th Street South, Independence, MO 64057",
  //       "phone": "(816) 795-5555"
  //   },
  //   {
  //       "id": 51,
  //       "restaurant_name": "Zarda Bar-B-Q",
  //       "address": "11931 W 87th St Pkwy, Lenexa, KS 66215",
  //       "phone": "(913) 492-2330"
  //   },
  //   {
  //       "id": 52,
  //       "restaurant_name": "Zarda Bar-B-Q",
  //       "address": "11931 W 87th St Pkwy, Lenexa, KS 66215",
  //       "phone": "(913) 492-2330"
  //   },
  //   {
  //       "id": 53,
  //       "restaurant_name": "Smokey's On The Boulevard BBQ",
  //       "address": "14521 Metcalf Ave, Overland Park, KS 66223",
  //       "phone": "(913) 897-7427"
  //   },
  //   {
  //       "id": 54,
  //       "restaurant_name": "Jon Russell's Barbeque",
  //       "address": "12094 W 135th St, Overland Park, KS 66221",
  //       "phone": "(913) 213-6944"
  //   },
  //   {
  //       "id": 55,
  //       "restaurant_name": "Fireside BBQ",
  //       "address": "10400 Mastin St, Overland Park, KS 66212",
  //       "phone": "(913) 310-9227"
  //   },
  //   {
  //       "id": 56,
  //       "restaurant_name": "Hayward's Pit Bar B Que",
  //       "address": "12804 Santa Fe Trail Dr, Lenexa, KS 66215",
  //       "phone": "(913) 808-3078"
  //   },
  //   {
  //       "id": 57,
  //       "restaurant_name": "Blind Box BBQ",
  //       "address": "13214 W 62nd Terrace, Shawnee, KS 66216",
  //       "phone": "(913) 268-4227"
  //   },
  //   {
  //       "id": 58,
  //       "restaurant_name": "Zarda Bar-B-Q",
  //       "address": "214 NW Hwy 7, Blue Springs, MO 64014",
  //       "phone": "(816) 229-9999"
  //   },
  //   {
  //       "id": 59,
  //       "restaurant_name": "Bates City BBQ",
  //       "address": "201 E Market St, Bates City, MO 64011",
  //       "phone": "(816) 625-4961"
  //   },
  //   {
  //       "id": 60,
  //       "restaurant_name": "Bates City BBQ of Shawnee",
  //       "address": "6493 Quivira Rd, Shawnee, KS 66216",
  //       "phone": "(913) 962-7447"
  //   },
  // ]
  //

  // return {
  //     getData: function() {
  //         var defer = $q.defer();
  //         $http.get('/data.json', { cache: 'true'}).then(function(response) {
  //             defer.resolve(response);
  //         });
  //         return defer.promise;
  //       }
  // };
});
