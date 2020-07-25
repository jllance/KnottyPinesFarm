import React from "react";

function RenderCard({ item }) {
  return (
    <div class="container bg-success">
      <div class="row-content">
        <div class="card-deck">
          <div class="Card" style="width:400px">
            <img
              class="card-img-top"
              src="src/components/img/barn.jpg"
              alt="barn"
            />
            <div class="CardBody">
              <h4 class="CardTitle">
                <a href="OurFarm.html">Our Family Farm</a>
              </h4>
            </div>
          </div>
          <div class="Card" style="width:400px">
            <img
              class="card-img-bottom"
              src="src/components/img/Coop.jpg"
              alt="Coop"
            />
            <div class="CardBody">
              <h4 class="CardTitle">
                <a href="Animals.html">The Coop</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
