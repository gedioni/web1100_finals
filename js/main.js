var API_URL = "https://newsapi.org/v2/everything"
var API_KEY = "87c801038d694553879e6982c6d5e54a";

$(document).ready(function() {
    // Event for the search button, it will make use of the API
    // to search for news
    $(".button_search").click(function() {
        var keyword = $(".input_search").val();
        
        // Build the URL query
        var queryUrl = API_URL + "?q=" +keyword + "&apiKey=" + API_KEY;
        $(".search_result");

        // Send the query to the news API
        $.ajax({
            url: queryUrl,
            type: "GET",
            dataType: "json",
            success: (data) => {
                // Display the search results
                console.log(data);

                $(".search_result").html("");                
                
                for(var i = 0; i < data.articles.length; i++) {
                    var article = data.articles[i];

                    var html = "<article>";
                    html += "<h2>" + article.title + "</h2>";

                    if(article.hasOwnProperty("urlToImage")) {
                        html += "<img src='" + article.urlToImage + "' />";
                    }
                    html += "<p>" + article.description + "</p>";
                    html += "<a href='" + article.url + "'>Read full article</a>";
                    html += "</article>";

                    $(".search_result").append(html);
                
                }
            },
            error: (data) => {  
                // Display an error when something wrong happened during
                // communication with the server
                alert("Please type a search string");
                console.log(error);
            }
        });
    });
});