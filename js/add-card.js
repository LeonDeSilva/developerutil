var card_id = 0;

function addCard2(heading, func) {
    var myCol = $(`<div class="col-sm-4" id="mycol"></div>`);
    var myPanel = $(`<div class="card" id=util-card-"` + card_id + `"style="margin-top: 1rem; width: 24rem;">
      <div class="card-body">
        <h5 class="card-title">Base64 Encode</h5>
        <textarea placeholder="Input" style="height: 5rem; width: 20rem;"></textarea>
        <textarea readonly style="height: 5rem; width: 20rem;"></textarea>
        <a href="#" class="btn btn-primary">Encode</a>
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