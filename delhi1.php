
    $(document).ready(function () {
        var lastId = ''
        var lastPanelClicked = ''
        var lastYearData = ''
        var last_ahref = $("#accordion").children().last().find('a');
        lastId = last_ahref.attr('href');
        lastYearData = last_ahref.data('year');
        var url = 'https://sattamatka.org/dehliDataFetch.php';
        
        function getCurrentMonthYear () {
            var currentDate = new Date();
            var month = currentDate.getMonth() + 1;
            var year = currentDate.getFullYear();
                
            if (month < 10) month = '0' + month;
            return { month: month, year: year }
        }
        function loadData (divId, yearData) {
            var id='<?php echo $id?>';
            var freq='<?php echo $freq?>';
            var request = $.ajax({
                url: url,
                type: "POST",
                data: {yearsData : JSON.stringify(yearData),id: id,freq: freq}
            });
            request.done(function(msg) {
                $(divId).children('.acod-body').html(msg);
                $(divId).collapse('show');
            });
            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });
        }


        // third chart code start
        function disableNextThird () {
            var temp = getCurrentMonthYear();
            if (
                temp.year <= +$('#selected_year_third_chart').val()
            ){
                console.log(temp.year, $('#selected_year_third_chart').val());
                $('#next_for_third_chart').prop('disabled', true);
            } else {
                console.log(temp.year, $('#selected_year_third_chart').val());
                $('#next_for_third_chart').prop('disabled', false);
            }
        }
        function load_third_chart_data (year) {
            var id='<?php echo $id?>';
            var request = $.ajax({
                url: 'https://sattamatka.org/result-month-chart.php',
                type: 'POST',
                data: {year : year, id: id}
            });
            request.done(function(html) {
                $("#jodi_tab, .join_tab").hide();
                $("#data_table_third_chart").empty();
                $("#data_table_third_chart").html(html);
                // show the join tab
                $("#third_tab").show();
                $('#selected_year_third_chart').val(year);
                disableNextThird();
            });
            request.fail(function(jqXHR, textStatus) {
                alert( "Request failed: " + textStatus );
            });
        }
        $('.third_chart').click(function() {
            // hide the join tab
            $("#join_tab, #jodi_tab").hide();
            // show the jodi tab
            $("#third_tab").show();

            if (!$(this).parent().hasClass('active'))  {
                $('.jodi_chart, .panel_chart').parent().removeClass('active');
                $('.third_chart').parent().addClass('active');
            }
            var temp = getCurrentMonthYear();
            load_third_chart_data(temp.year);
            // grab year
            // get table data
            // inject table data
        })
        $('#previous_for_third_chart').click(function () {
            // minus 1 year from current year
            // call load table function passing that year
            load_third_chart_data(+$('#selected_year_third_chart').val() - 1);
        });
        $('#next_for_third_chart').click(function () {
            // plus 1 year from current year
            // call load table function passing that year
            var temp = getCurrentMonthYear();
            var selectedYear = +$('#selected_year_third_chart').val();
            if (temp.year > selectedYear) {
                load_third_chart_data(selectedYear + 1);
                // console.log(temp.year, selectedYear);
                // $('#next_for_third_chart').prop('disabled', false);
            } else {
                // disable the previous btn
                // $('#next_for_third_chart').prop('disabled', true);
            }
        });
        $('#submit_for_third_chart').click(function () {
            // get current selected year
            // call load table function passing that year
            var temp = getCurrentMonthYear();
            var selectedYear = +$('#selected_year_third_chart').val();
            if (temp.year >= selectedYear) {
                load_third_chart_data(selectedYear);
            }
        });
        $("#selected_year_third_chart").change(function (event) {
            var temp = getCurrentMonthYear();
            $('#submit_for_third_chart').prop('disabled', (event.target.value > temp.year));
        });
        // third chart code end


        $('.panel_chart').click(function() {
            // hide the join tab
            $("#join_tab, #third_tab").hide();
            // show the jodi tab
            $("#jodi_tab").show();

            if (!$(this).parent().hasClass('active'))  {
                $('.jodi_chart, .third_chart').parent().removeClass('active');
                $('.panel_chart').parent().addClass('active');
            }

            url = 'https://sattamatka.org/dehliDataFetch.php'
            loadData (lastId, lastYearData, 'https://sattamatka.org/dehliDataFetch.php');
            $(lastPanelClicked).collapse('hide');
        })
        $('.jodi_chart').click(function() {
            // delete below lines 2 if doesn't work
            $("#third_tab").hide();
            if (!$(this).parent().hasClass('active')) {
                $('.panel_chart, .third_chart').parent().removeClass('active');
                $('.jodi_chart').parent().addClass('active');
                var temp = getCurrentMonthYear()
                
                $('#month').val(temp.month);
                $('#year').val(temp.year);
                
                $('#selected_month option[value=' + temp.month + ']').prop('selected', true);
                $('#selected_year option[value=' + temp.year + ']').prop('selected', true);
                get_table_data(0);
            }

            // url = 'https://sattamatka.org/join-chart-db.php'
            // loadData (lastId, lastYearData, 'https://sattamatka.org/join-chart-db.php')
            // $(lastPanelClicked).collapse('hide');
        })
        $('.acod-clp').click(function() {
            lastPanelClicked = this;
            var divId = $(this).attr('href');
            var yearData = $(this).data("year");
            lastPanelClicked = divId
            loadData (divId, yearData)
        });
        //////////////// NEXT month get_table_data(1)
        //////////////// PREV month get_table_data(-1)
    
        function get_table_data (flag=0) {
            var id = <?= $id ?>;
            var month = $("#selected_month option:selected").val();
            var year = $("#selected_year option:selected").val();
            if (flag > 0) {
                month = parseInt($('#month').val()) + 1;
                if (month == 13){
                    month = 1;
                    year = (parseInt(year) + 1).toString();
                }
                if (month < 10) month = "0" + month.toString();
                else month = month.toString();
            }
            else if (flag < 0) {
                month = parseInt($('#month').val()) - 1;
                if (month == 0){
                    month = "12";
                    year = (parseInt(year) - 1).toString();
                }
                if (month < 10) month = "0" + month.toString();
                else month = month.toString();
            }
            if (id) {
                $.post("https://sattamatka.org/join-chart-db.php", {id: id, month: month, year: year} ,function(data){
                    try {
                        // alert(data)
                        data = JSON.parse(data);
                        var month = data.month;
                        var year = data.year;
                        var keys = Object.keys(data.rows);
                        keys.sort(function(a, b){return a-b});
                        //
                        var html = '<table style="white-space: nowrap;" class="table table-bordered">';
                        html += '<thead style="color:white;background-color:#34495E;">';
                        html += '<tr><th style="background-color:#34495E;border-bottom:0px;border-right:0px;max-width: 100px;min-width: 100px;position:absolute;">Date</th><th style="max-width: 100px;min-width: 100px;"></th>';
    
                        var temp = data.th.replace(/'/g, '"');
                        var ths = JSON.parse(temp);
                        for (var i = 0; i < ths.length; i++) {
                            html += '<th>' + ths[i] + '</th>';
                        }
                        html += '</tr></thead><tbody>';
                        var values = [];
                        for (key of keys){
                            html += '<tr><td style="text-align:center;background-color:#AAB7B8;max-width: 100px;min-width: 100px;position:absolute;border-right:0px">';
                            html += key + '/' + month + '/' + year + '</td>';
                            html += '<th style="text-align:center;max-width: 100px;min-width: 100px;background-color:#AAB7B8;border-left:0px;"></th>';
                            values = [];
                            var temp_in = data.rows[key].replace(/"/g, '');
                            temp_in = temp_in.replace(/'/g, '"');
    
                            values = JSON.parse(temp_in);
                            var first = false;
                            var color = '';
                            for (value of values) {
                                if (!first) {
                                    color = '#F1948A';
                                    first = true;
                                }
                                else {
                                    color = '#F4D03F';
                                }
                                if (value == '-') {
                                    html += '<td style="text-align:center;background-color:' + color + ';max-width: 100px;min-width: 40px;"> - </td>';
                                }
                                else {
                                    // console.log(value);
                                    html += '<td style="text-align:center;background-color:' + color + ';max-width: 100px;min-width: 40px;">' + value + '</td>';
                                }
                            }
                            html += '</tr>'
                        }
                        html += '</tbody></table></div>';
                        // hide the jodi tab content
                        $("#jodi_tab").hide();
    
                        $("#data_table").empty();
                        $("#data_table").html(html);
                        // show the join tab
                        $("#join_tab").show();
    
                        $('#month').val(month);
                        $('#year').val(year);
                        
                        $('#selected_month option[value=' + month + ']').prop('selected', true);
                        $('#selected_year option[value=' + year + ']').prop('selected', true);
                        disableNext ();
                    } catch (e) {
                        console.log(e);
                    }
                });
            }
        }
        function disableNext () {
            var temp = getCurrentMonthYear();
            if (
                (temp.year < $('#year').val()) || 
                ((temp.year >= $('#year').val()) && (+temp.month <= $('#month').val()))
            ){
                $('#next').prop('disabled', true);
            } else {
                $('#next').prop('disabled', false);
            }
        }
        function disableGo (val, type) {
            var temp = getCurrentMonthYear();
            if (type === 'month') {
                if (+temp.month <= val && (temp.year <= $('#selected_year').val())){
                    $('#submit').prop('disabled', true);
                } else {
                    $('#submit').prop('disabled', false);
                }
            } else {
                // if (temp.year <= val && (temp.year < $('#selected_year').val()) && (temp.month <= $('#selected_month').val())) $('#submit').prop('disabled', true);
                if ((temp.year > val) || (temp.month >= $('#selected_month').val()) ) $('#submit').prop('disabled', false);
                else $('#submit').prop('disabled', true);
            }
        }
        $("#selected_month").change(function (event) {
            disableGo(event.target.value, 'month');
        });
        $("#selected_year").change(function (event) {
            disableGo(event.target.value, 'year');
        });
        $('#previous').on('click', function() {
            get_table_data(-1);
        });
        $('#next').on('click', function() {
            get_table_data(1);
        });
    
        $('#submit').on('click', function() {
            get_table_data();
        });

    });
