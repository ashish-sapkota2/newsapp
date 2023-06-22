import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =[
    {
      "source": { "id": "independent", "name": "Independent" },
      "author": "Sonia Twigg",
      "title": "England vs Australia LIVE: Cricket scorecard and Ashes updates from day three at Edgbaston",
      "description": "Australia trail by 82 runs at the start of day three in the first Ashes test",
      "url": "http://www.independent.co.uk/sport/cricket/ashes-score-live-england-australia-cricket-b2359682.html",
      "urlToImage": "https://static.independent.co.uk/2023/06/18/10/CRICKET%20England%20%2010511542.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2023-06-18T09:48:02Z",
      "content": "Ashes hero Usman Khawaja does press conference with daughter on his lap\r\nHitting a century in an Ashes match already put him among a select group of players but Usman Khawaja broke new ground when he… [+713 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading :false
    }
  }
  render() {
    return (
        <div className="container my-3">
            <h2>NewsMonkey -Top headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
                       return <div className="col-md-4" key ={element.url}>
                          <NewsItem title ={element.title.slice(0,45)} description ={element.description.slice(0,88)} imageurl ={element.urlToImage}
                          newsurl={element.url}/>
                          </div>

            })}

        </div>

      </div>
    )
  }
}

export default News
