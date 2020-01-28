<template>
    <section id="features-carousel">
        <div class="container">
            <div id="featCarousel" class="carousel slide" data-ride="carousel" height="250px">
                <ol class="carousel-indicators">
                    <li data-target="#featCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#featCarousel" data-slide-to="1"></li>
                    <li data-target="#featCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <img src="../assets/images/doctor.jpg" alt="Los Angeles">
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/doctor.jpg" alt="Los Angeles">
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="../assets/images/doctor.jpg" alt="Los Angeles">
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>
                </div>

                
                <a class="left carousel-control" href="#featCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#featCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>
</template>