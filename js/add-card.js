var card_id = 0;

function addCard1(heading, btnText, funcName) {
    card_id++; 
    var myCol = $(`<div class="col-lg-4 col-md-6" id="mycol"></div>`);
    var myPanel = $(`<div class="card" id="util-card-` + card_id + `" style="margin-top: 1rem; width: 24rem;">
      <div class="card-body">
        <h5 class="card-title">`  + heading + `</h5>
        <textarea readonly style="height: 5rem; width: 100%;" id="text-area-` + card_id + `"></textarea>
        <a href="#" class="btn btn-primary" onclick="` + funcName + `('` + card_id + `')">` + btnText+ `</a>
        <a href="#" class="btn close">Close</a>
      </div>
    </div>`);

  myPanel.appendTo(myCol);
  myCol.appendTo("#card-main-row");

  $('.close').on('click', function(e){
    e.stopPropagation();  
        var $target = $(this).parents('#mycol');
        $target.hide('slow', function(){ $target.remove(); });
  });
}

function addCard2(heading, btnText, funcName) {
    card_id++; 
    var myCol = $(`<div class="col-lg-4 col-md-6" id="mycol"></div>`);
    var myPanel = $(`<div class="card" id="util-card-` + card_id + `" style="margin-top: 1rem; width: 24rem;">
      <div class="card-body">
        <h5 class="card-title">`  + heading + `</h5>
        <textarea placeholder="Input" style="height: 5rem; width: 100%;" id="input-text-area-` + card_id + `"></textarea>
        <textarea readonly style="height: 5rem; width: 100%;" id="text-area-` + card_id + `"></textarea>
        <a href="#" class="btn btn-primary" onclick="` + funcName + `('` + card_id + `')">` + btnText+ `</a>
        <a href="#" class="btn close">Close</a>
      </div>
    </div>`);

  myPanel.appendTo(myCol);
  myCol.appendTo("#card-main-row");

  $('.close').on('click', function(e){
    e.stopPropagation();  
        var $target = $(this).parents('#mycol');
        $target.hide('slow', function(){ $target.remove(); });
  });
}