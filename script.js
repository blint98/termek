$(function(){    
    $.ajax({url: "js.json", success: function(result){ 
        Tables();
        Tomb();
        Modosit();
        uj();
        addHtmlTableRow();
        
    }});
    
});

   





function Tables (){

    $("article").empty();
    $("article").append("<div class'container' ><h1>Termékek</h1>\n\
                            <div class'tab tab-1'>\n\
                            <table id='table' border='1'>\n\
                            <tr>\n\
                            <th>Terkméknév</th>\n\
                            <th>Leirás</th>\n\
                            <th>Készlet</th>\n\
                            <th>Ár</th>\n\
                            </tr>\n\
                            <tr>\n\
                            <td>value='"+termekTomb[index]["termeknev"]+"'</thd\n\
                            <td>value='"+termekTomb[index]["leiras"]+"'</td>\n\
                            <td>value='"+termekTomb[index]["keszlet"]+"'</td>\n\
                            <td>value='"+termekTomb[index]["ar"]+"'</td>\n\
                            <td></td>\n\
                            </tr>\n\
                            <tr >\n\
                            <td>value='"+termekTomb[index]["termeknev"]+"'</thd\n\
                            <td>value='"+termekTomb[index]["leiras"]+"'</td>\n\
                            <td>value='"+termekTomb[index]["keszlet"]+"'</td>\n\
                            <td>value='"+termekTomb[index]["ar"]+"'</td>\n\
                            <td></td>\n\
                            </tr>\n\
                            <tr>\n\
                            <td>value='"+termekTomb[index]["termeknev"]+"'</thd\n\
                            <td>value='"+termekTomb[index]["leiras"]+"'</td>\n\
                            <td>value='"+termekTomb[index]["keszlet"]+"'</td>\n\
                            <td>value='"+termekTomb[index]["ar"]+"'</td>\n\
                            </tr>\n\
                            </table>\n\
                            <div class='tab' tab-2>\n\
                            '<button onclick='editHtmlTbleSelectedRow();'>Módosit</button>'\n\
                            </div>\n\
                            </div>\n\
                        </div>")
                            
                            

    
    }
    function Tomb(index){
        
        const termek = {
        termeknev: $("#Terméknév").val(),
        leiras: $("#Leirás").val(),
        keszlet: $("#Készlet").val(),
        ar: $("#Ár").val(),                   
        };
        termekTomb[index]=termek;
        console.log(termekTomb);
        
    
    }

    //űrlap ahol bevihetünk új termékeket

    function Modosit(index){
        $("article").empty();
        $("article").append("<div id = urlap><h2>Termék adatok</h2>\n\
                                <form >\n\
                                <div>\n\
                                <label for='termeknev'>Terméknév: </label><input type='text' name='termeknev' id='termeknev' value='"+termekTomb[index]["termeknev"]+"' >\n\
                                <label for='leiras'>Leiras: </label><input type='text' id='leiras' name='leiras' value='"+termekTomb[index]["leiras"]+"'>\n\
                                <label for='keszlet'>Darabszám</label><input type='number' id='keszlet' name='keszlet' value='"+termekTomb[index]["keszlet"]+"'>\n\
                                \n\ <label for='ar'>Ár: </label><input type='number' id='ar' name='ar' value='"+termekTomb[index]["ar"]+"'> \
                                <input type='button' id ='ok' value='ok'> \n\
                                '<button onclick='removeSelectedRow();'>Töröl</button>'\n\
                                '<button onclick='addHtmlTableRow();'>Hozzáadd</button>'\n\
                                </div>\n\
                                </form>\n\
                                </div>");
        
        $("#urlap").addClass("urlapFormaz");
        $("#ok").click( function (){Tomb(index);}); 
        
        // uj adatok 
        }
        function uj(){
  
            const termek = {
              
                    termeknev: $("#Terméknév").val(),
                    leiras: $("#Leirás").val(),
                    keszlet: $("#Készlet").val(),
                    ar: $("#Ár").val(),                               
            };       
            termekTomb.push(termek);
            
    }
    
    var rowIndex,
        table = document.getElementById("table");
    // sorok hozzáadása
   function addHtmlTableRow(){

    var newRow =table.insertRow(table.length),
    cell1 =newRow.insertCell(0),
    cell2 =newRow.insertCell(1),
    cell3 =newRow.insertCell(2),
    cell4 =newRow.insertCell(3),
    termeknev = document.getElementById("termeknev");
    leiras = document.getElementById("leiras");
    keszlet = document.getElementById("keszlet");
    ar = document.getElementById("ar");

    cell1.innerHTML = termeknev;
    cell2.innerHTML = leiras;
    cell3.innerHTML = keszlet;
    cell4.innerHTML = ar;

    selectedRowToInput();
   }
   function selectedRowToInput()
   {
    
    for (var i = 1; i <table.rows; i++) {
       table.rows[i].onclick = function(){

        rIndex =this.rowIndex;
        document.getElementById("termeknev").value = this.cells[0].innerHTML;
        document.getElementById("leiras").value = this.cells[1].innerHTML;
        document.getElementById("keszlet").value = this.cells[2].innerHTML;
        document.getElementById("ar").value = this.cells[3].innerHTML;

       };
        
    }


   }
   selectedRowToInput();
   
   function editHtmlTbleSelectedRow() {
       var termeknev =  document.getElementById("termeknev").value  ;
       var keszlet =  document.getElementById("keszlet").value ;
       var leiras =  document.getElementById("leiras").value ;
       var ar =  document.getElementById("ar").value ;

       table.rows[rIndex].cells[0].innerHTML = termeknev;
       table.rows[rIndex].cells[1].innerHTML = leiras;
       table.rows[rIndex].cells[2].innerHTML = keszlet;
       table.rows[rIndex].cells[3].innerHTML = ar;
       
   }

   function removeSelectedRow() {

    table.deleteRow(rIndex);
    document.getElementById("termeknev").value  ="";
    document.getElementById("keszlet").value = "";
    document.getElementById("leiras").value = "";
    document.getElementById("ar").value = "";
       
   }


