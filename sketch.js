//loading data from github repository
Plotly.d3.csv('https://raw.githubusercontent.com/giannagiordano/2017_military_expenditure_by_country/master/SIPRIdata.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    //visualizing the data
    var data = [{
        //creating choropleth map
        type: 'choropleth',
        //country names come with map
        locationmode: 'country names',
        //displaying countries from data set
        locations: unpack(rows, 'Country'),
        //displaying percentages from data set
        z: unpack(rows, 'Percent'),
        //color scale based on percentages
        autocolorscale: true
    }];

    var layout = {
        //displaying the title at the top of the page
        title: 'Military expenditure by country as a percentage of government spending in 2017',
        geo: {
            projection: {
                type: 'robinson'
            }
        }
      };

      //displaying the data visualization
      Plotly.plot(myDiv, data, layout, {showLink: false});
  
  });
