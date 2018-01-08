import React from 'react';


const CarouselCards = () => (
    <div>
    <div class="container">
        <div id="carouselExampleControls" class="carousel vert slide" data-ride="carousel" data-interval="2000">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block mx-auto img-fluid" src="//placehold.it/800x400" alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block mx-auto img-fluid" src="//placehold.it/800x400/dd4444/fff" alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block mx-auto img-fluid" src="//placehold.it/800x400/777" alt="Third slide" />
                </div>
            </div>
        </div>
    </div>
    </div>
  );

export default CarouselCards;
