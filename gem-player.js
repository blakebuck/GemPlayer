var GemPlayer = {
    altenator: 1,
    player: $("#GemPlayer"),
    gems: [],
    size: "large",
    addGem: function(URL){
        GemPlayer.gems.push(URL);
    },
    addGems: function(arr){
        for (var i = 0; i < arr.length; i++){
            GemPlayer.addGem(arr[i]);
        }
    },
    addGemToView: function(URL){
        var img = document.createElement("img");
        $(img).attr("src", URL);
        $(img).addClass("img-thumbnail");
        GemPlayer.altenator *= -1;
        var rotate = "rotate(" + getRandomInt(3, 10) * GemPlayer.altenator + "deg) ";
        var translate = "translateY(" + (getRandomInt(0, 20) - 10) + "px)";

        var transform = rotate + translate;
        $(img).css("-ms-transform", transform);
        $(img).css("-webkit-transform", transform);
        $(img).css("transform", transform);

        var zIndex = getRandomInt(0, 1);
        $(img).css("zIndex", zIndex);

        $("#GemViewPort").append(img);
    },
    loadPlayer:  function(){
        for (var i = 0; i < GemPlayer.gems.length; i++) {
            GemPlayer.addGemToView(GemPlayer.gems[i]);
        }

        $(".img-thumbnail").click(function(){
            var height = $(window).height();
            var width = $(window).width();
            var overlay = $("#overlay");
            overlay.show();
            overlay.height(height);
            overlay.width(width);

            $("#preview img").attr("src", $(this).attr("src"));

            var preview = $("#preview");
            var left = (width - preview.width()) / 2;
            preview.css("left", left + "px");
            preview.show();
        });

        $("#previewClose").click(function(){
            $("#overlay").hide();
            $("#preview").hide();
        });
    }
};

var images = [];
images.push("http://gemracer.com/claimedGems/017a3947e4b98f09013e37374050c468.jpg");
images.push("http://gemracer.com/claimedGems/051dea49afb22793001c18f7e1128a7d.jpg");
images.push("http://gemracer.com/claimedGems/057dd01ff18f5c5bf2ed30f0d5a6b4d2.jpg");
images.push("http://gemracer.com/claimedGems/06bc677b0cacdfd1a476265ea121f1c9.jpg");
images.push("http://gemracer.com/claimedGems/08dccff021a5a340150b958fb96209fb.jpg");
images.push("http://gemracer.com/claimedGems/12271ed3d576dcea2c5cd2b3a64042df.jpg");
images.push("http://gemracer.com/claimedGems/133e53ccb6a08139dd262dc917297355.jpg");
images.push("http://gemracer.com/claimedGems/17c8edd56ed252f4d32ea5a53cd8553f.jpg");
images.push("http://gemracer.com/claimedGems/1c35172ac55445de56687139b5246715.jpg");
images.push("http://gemracer.com/claimedGems/1d2ed9ac3c624908bd69dbb28aa6d45d.jpg");
images.push("http://gemracer.com/claimedGems/1dec01564668905869a5155816ca5bf2.jpg");
images.push("http://gemracer.com/claimedGems/263a9d2eca8193fa2c5dbf4ba284835c.jpg");
images.push("http://gemracer.com/claimedGems/26d6cde82acfe9ef3a0052062d01b547.jpg");
images.push("http://gemracer.com/claimedGems/2db3285ffe73400f020dec1849d94711.jpg");
images.push("http://gemracer.com/claimedGems/2ed1cc5bfcb5d0a5f9f26490218cad16.jpg");
images.push("http://gemracer.com/claimedGems/34e61cd34ca1a3b6b65814127efc9ade.jpg");
images.push("http://gemracer.com/claimedGems/37f732c464a04e9d6f9d47af75f6c5f3.jpg");
images.push("http://gemracer.com/claimedGems/3ead1b58144da449321f657e486c0205.jpg");
images.push("http://gemracer.com/claimedGems/46643036d82b37ff57f9b99c0b64f8c8.jpg");
images.push("http://gemracer.com/claimedGems/46bcc53bf85201772bdece35f7c830bd.jpg");
images.push("http://gemracer.com/claimedGems/47179d4b3b89ceddbbb44a93e429dc37.jpg");
images.push("http://gemracer.com/claimedGems/47dc6ff19a986ccff46693bb20430cce.jpg");
images.push("http://gemracer.com/claimedGems/49426781001aca937ab49e0314d7d42b.jpg");
images.push("http://gemracer.com/claimedGems/49728440bb2a4fb7817bb8d41b803d6a.jpg");
images.push("http://gemracer.com/claimedGems/4ab0c4dbc7c5c175e044aceb7dc526bf.jpg");
images.push("http://gemracer.com/claimedGems/4d7240c564eb82a2a3c19e22e525fd3e.jpg");
images.push("http://gemracer.com/claimedGems/5869eaed2b636aef756cc6addbc2ea83.jpg");
images.push("http://gemracer.com/claimedGems/5a37b8a45a3882c573d7358c99a1f53b.jpg");
images.push("http://gemracer.com/claimedGems/5d51ba6700bc46ae90ac810a7a018d12.jpg");
images.push("http://gemracer.com/claimedGems/5dd16237315c50fa9b3289a36885d97d.jpg");
images.push("http://gemracer.com/claimedGems/5ed08eb9ee63aafd871ed7bad7297f49.jpg");
images.push("http://gemracer.com/claimedGems/621b598fdfb1db20f3d8c170f10d419e.jpg");
images.push("http://gemracer.com/claimedGems/689b08cd8af6c56dbf8a61ccdb153425.jpg");
images.push("http://gemracer.com/claimedGems/6a002f16f3c96b98d6814f30f5dfcc9e.jpg");
images.push("http://gemracer.com/claimedGems/6bbc89aa1956c6402ae636d7024b4cd5.jpg");
images.push("http://gemracer.com/claimedGems/6c81d1dd6c152c9cc04e0d72bde3642b.jpg");
images.push("http://gemracer.com/claimedGems/6cb1b7e10782bd7be804fa49a915d55f.jpg");
images.push("http://gemracer.com/claimedGems/6cf3f877416ac9b95dc2b74b737195f1.jpg");
images.push("http://gemracer.com/claimedGems/6e0b69490901fb364287520a2a812666.jpg");
images.push("http://gemracer.com/claimedGems/7199491574550f00e59d28804c5690a5.jpg");
images.push("http://gemracer.com/claimedGems/74b5b6b1adf70e12e4bf60cdb1491a5b.jpg");
images.push("http://gemracer.com/claimedGems/81e585f82bbffe75e29b3a45e814ee5d.jpg");
images.push("http://gemracer.com/claimedGems/84177b727773f1da8998eb55cd27e156.jpg");
images.push("http://gemracer.com/claimedGems/845996172cf769ef934c3e76c1eb6634.jpg");
images.push("http://gemracer.com/claimedGems/888d7030c0bbf9f8eafcf0bfce10a7dd.jpg");
images.push("http://gemracer.com/claimedGems/8ae80a1d3452994898b35689e654a7dd.jpg");
images.push("http://gemracer.com/claimedGems/92f37ccde47043c5106bb579335c999f.jpg");
images.push("http://gemracer.com/claimedGems/933aa7bf6edad6aa19cfa8603bbbc803.jpg");
images.push("http://gemracer.com/claimedGems/9395d93cbea6db5fc02a9e25342030de.jpg");
images.push("http://gemracer.com/claimedGems/964b27b710687e8767761923686c4b64.jpg");
images.push("http://gemracer.com/claimedGems/971b3cb19cf3c83c7d7bc9f8e9bb4f32.jpg");
images.push("http://gemracer.com/claimedGems/9f9a7fcc9448f261b2a94d230c2c2979.jpg");
images.push("http://gemracer.com/claimedGems/a6eb34739dac94aea90808ba93dfb6d7.jpg");
images.push("http://gemracer.com/claimedGems/ab5a368b2c83718ae3191200f4b23fd6.jpg");
images.push("http://gemracer.com/claimedGems/ae79fcc9e5bfd6b8319ccc6a72e43caf.jpg");
images.push("http://gemracer.com/claimedGems/ae823ac759b5e18f71bc687f7b00814c.jpg");
images.push("http://gemracer.com/claimedGems/b93dce1f66bdf8da43a849f999ffe23c.jpg");
images.push("http://gemracer.com/claimedGems/bf5de585ac821f74f6fca122b19296aa.jpg");
images.push("http://gemracer.com/claimedGems/bf8711e6c75359d163931e44778aa3d3.jpg");
images.push("http://gemracer.com/claimedGems/c1896838ca064c99de40c8d71459e8c2.jpg");
images.push("http://gemracer.com/claimedGems/c4ae93bfe3ad8f9c1cd13f79809751f2.jpg");
images.push("http://gemracer.com/claimedGems/c5aff3f4e1cb5afe60bc32f82efca22d.jpg");
images.push("http://gemracer.com/claimedGems/ca587cbeb9253141cbfb63f82e51d3a8.jpg");
images.push("http://gemracer.com/claimedGems/cd76de5f3adf040d5fe5f3f247cf5d52.jpg");
images.push("http://gemracer.com/claimedGems/cd8f5135e353582cede2ad898f2ec7bf.jpg");
images.push("http://gemracer.com/claimedGems/d11e96395b6de1fcbd3b430965574366.jpg");
images.push("http://gemracer.com/claimedGems/d1204f40b29ba8405f12351c013ee135.jpg");
images.push("http://gemracer.com/claimedGems/d1fc3c710a6efc0d7c15c6ae2ecbf5f5.jpg");
images.push("http://gemracer.com/claimedGems/d592a90c4c63734a609d4c5f57311ad7.jpg");
images.push("http://gemracer.com/claimedGems/dbf2887d3fcc07d66ace50d00124aa4b.jpg");
images.push("http://gemracer.com/claimedGems/ddac364244a89f09a3a215925359648f.jpg");
images.push("http://gemracer.com/claimedGems/e0240711d686655531461aeaf7d0d966.jpg");
images.push("http://gemracer.com/claimedGems/e3b90f4179aace5ce374a8c2007293fb.jpg");
images.push("http://gemracer.com/claimedGems/e826f81683fb45708c4757d0602aeaed.jpg");
images.push("http://gemracer.com/claimedGems/f5e7ffa24fc4e28f0c6a47b2c6c4cd36.jpg");
images.push("http://gemracer.com/claimedGems/f642e3626a53ba9d3309dfd3aef1b129.jpg");
images.push("http://gemracer.com/claimedGems/f6584c12850af0fce9df5711b53c9714.jpg");

GemPlayer.addGems(images);

$(function(){
    GemPlayer.loadPlayer();

    var directionalBtn = $(".directionalBtn");
    directionalBtn.click(function () {
        var direction = $(this).attr("id") == "prevGem" ? "left" : "right";
        scroll(direction);
    });

    if (mobilecheck()){
        $("#GemViewPort").css("overflow", "scroll");
    }
    else {
        var btnPressInterval;
        directionalBtn.mousedown(function(){
            var direction = $(this).attr("id") == "prevGem" ? "left" : "right";
            btnPressInterval = setInterval(function(){scroll(direction);}, 500);
            return false;
        });

        $(document).mouseup(function(){
            clearInterval(btnPressInterval);
            return false;
        });
    }

    var playInterval;
    $("#playPauseGems").click(function(){
        if ($(this).html() == "Play"){
            $(this).html("Pause");
            playInterval = setInterval(function(){scroll("right");}, 1000);
        }
        else {
            $(this).html("Play");
            clearInterval(playInterval);
        }
    });

});

function scroll(direction){
    direction = direction == "left" ? -1 : 1;
    var GemViewPort = $("#GemViewPort");
    var currentPos = GemViewPort.scrollLeft();
    var newPos = currentPos + (150 * direction);
    GemViewPort.scrollLeft(newPos);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.mobilecheck = function() {
    var check = false;
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}