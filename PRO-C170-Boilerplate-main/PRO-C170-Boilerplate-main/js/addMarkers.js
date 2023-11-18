AFRAME.registerComponent("create-markers", {
  
  init:async function(){
    var mainScene=document.querySelector("#main-scene")
    var dishes=await this.getDishes();
    dishes.map(dish=>{
      var marker = document.createElement('a-marker');
      marker.setAttribute('id', dish.id);
      marker.setAttribute('type','pattern');
      marker.setAttribute('url', dish.marker_pattern_url);
      marker.setAttribute("cursor",{
        rayOrigin:"mouse"
      })
      marker.setAttribute("markerhandler",{})
      mainScene.appendChild(marker)

      var model = document.createElement('a-entity');
      model.setAttribute('id', `model-${dish.id}`);
      model.setAttribute('position',dish.model_geometry.position);
      model.setAttribute('rotation', dish.model_geometry_rotation);
      model.setAttribute("cursor",{
        rayOrigin:"mouse"
      })
      model.setAttribute("markerhandler",{})
      mainScene.appendChild(model)


    })
  }
  
  });
