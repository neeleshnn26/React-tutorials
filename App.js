import React from "react";
import ReactDOM from "react-dom/client";



const Header =()=>{
    return(
        <div className="header">

         <div>
         <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
         </div>

         <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
         </ul>
         </div>

        </div>
    )
}

const RestaurantCard=(props)=>{
    // Destructuring the props
    const{resData}=props


    const{
        cloudinaryImageId,name,cuisines,costForTwo,avgRating
    }=resData ?.info;
    //Using optional chaining (?.) ensures that if resData or resData.info is null or undefined, it won't throw an error and the variables will be undefined


    return (
        <div className="res-card">
            <div>
                <img className="res-logo"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/"+ resData.info.cloudinaryImageId}/>
            </div>
         <h3>{name}</h3>
         <h3>{cuisines.join(" , ")}</h3>
         <h3>{costForTwo}</h3>
         <h3>{avgRating}</h3>
        </div>
    );
};

const restList=[
    {
        "info": {
          "id": "94232",
          "name": "Tuhada Dhaba",
          "cloudinaryImageId": "ajamvrqdc0owkcumv3hm",
          "locality": "Majra",
          "areaName": "Majra ",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Thalis",
            "North Indian"
          ],
          "avgRating": 4.1,
          "parentId": "13588",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=15977668~p=0~adgrpid=15977668#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=94232~eid=66b90a39-7778-4a89-b476-432f749a75d1~srvts=1722593086016~collid=45826",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 4.8,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-02 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.9",
              "ratingCount": "500+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=94232",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "685166",
          "name": "IGP Cakes",
          "cloudinaryImageId": "cc84d172c8acb034e61ffaeb2d2557e3",
          "locality": "GMS Road",
          "areaName": "Deh_Patel Nagar",
          "costForTwo": "₹299 for two",
          "cuisines": [
            "Desserts",
            "Bakery"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "392350",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 6,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "6.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-03 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=685166",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "531280",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_531280.JPG",
          "locality": "Saharanpur Road",
          "areaName": "Subhash Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
          ],
          "avgRating": 4.4,
          "parentId": "547",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 1,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-02 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Burger.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=531280",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "532213",
          "name": "Chilli'Z Restro (Pure Veg)",
          "cloudinaryImageId": "mzsuzzznrww2mpzwk27d",
          "locality": "Prem Nagar",
          "areaName": "Patel Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Indian",
            "Chinese",
            "Mughlai"
          ],
          "avgRating": 4.2,
          "parentId": "13645",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=15983000~p=1~adgrpid=15983000#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=532213~eid=22484c66-e13e-4e65-a291-4649930d2227~srvts=1722593086016~collid=45826",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 6.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-02 23:55:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.8",
              "ratingCount": "100+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=532213",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
      {
        "info": {
          "id": "413821",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/bfa8d2d5-9e91-478c-8d9c-db5337bfdec8_413821.jpg",
          "locality": "Saharanpur Road",
          "areaName": "Majra",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.1,
          "parentId": "721",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 4.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-08-03 04:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
              "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "badgeType": "BADGE_TYPE_ONE_LITE"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=413821",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        }
      },
]


const Body =()=>{
    return (
        <div className="body">
            <div className="search-bar">
              <input className="input" type="text" placeholder="search for food " />
              <button className="btn">search</button>
            </div>
            <div className="res-container">
            {restList.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
            </div>

        </div>
    )
}


const AppLayout=()=>
{
  return (
    <div className="app">
  <Header/>
  <Body/>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);