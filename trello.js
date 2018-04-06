var presentColumn = "";
var cardContent = "";

$(document).ready(() => {
    function initSortable() {
        $(".column").sortable({
            connectWith: ".column",
        });

        $("#sortable2, #sortable3, #sortable1").sortable({
            connectWith: "ul"
        });
    }

    function closeModal() {
        $(".close").click((event) => {
            $("#myModal").css({ "display": "none" });
        });
    }

    function addCardHandler() {
        $(".myBtn").click((event) => {
            presentColumn = $(event.target).closest(".box").find("ul");
            $("#myModal").css({ "display": "block" });
        });   
    }
    
    function removeCard() {
        $("ul").click((event) => {
            const targetClassIsRemove= $(event.target).hasClass("removeCard");
            if(!targetClassIsRemove) {
                return;
            }
            const target = $(event.target).closest(".indiRow");
            $(target).remove();
        });
        /*$(".removeCard").click((event)=>{
            const target = $(event.target).closest(".indiRow");
            $(target).remove();
        });*/
    }

    function inputHandler() {
        $("#myinput").on('change', function(e) {
            cardContent = this.value;
        });
    }

    function reset() {
        cardContent="";
        presentColumn="";
        $("#myinput").val('');
    }

    function addCard() {
        $(".addCard").click(() =>{
            $(presentColumn).append('<li class="indiRow">'+ cardContent +' <span class="removeCard">X</span></li>');
            $("#myModal").css({ "display": "none" });
            reset();
        });
    }

    initSortable();
    addCardHandler();
    removeCard();
    closeModal();
    inputHandler();
    addCard();
});