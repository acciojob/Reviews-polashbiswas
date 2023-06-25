import React,{useState} from "react";
import '../styles/App.css';

const App = () => {

    let reviewsArr = [
        {
          id: 1,
          name: 'susan smith',
          job: 'web developer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
          id: 2,
          name: 'anna johnson',
          job: 'web designer',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
          text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
          id: 3,
          name: 'peter jones',
          job: 'intern',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
          id: 4,
          name: 'bill anderson',
          job: 'the boss',
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
    ];

    let [reviews, setReviews] = useState(0);

    function prevButton(){
        setReviews((reviews - 1 + reviewsArr.length) % reviewsArr.length);
    }
    function nextButton(){
        setReviews((reviews + 1) % reviewsArr.length);
    }
    function surButton(){
        let randonIndex = reviews;
        while(randonIndex === reviews){
            randonIndex = Math.floor(Math.random() * reviewsArr.length);
        }
        setReviews(randonIndex);
        // console.log(reviews);
    }

    return(
        <div>
            <h1 id="review-heading">Our Reviews</h1>
            <div className="review">
                {
                    reviewsArr.map((item, index) => (
                        <div key={item.id} className={index === reviews ? 'slide active' : 'slide'}>
                            <p className="job">{item.job}</p>
                            <img src={item.image} alt="pic" className="person-img"/>
                            <p id={'author'+"-"+item.id} className="author">{item.name}</p>
                            <p className="info">{item.text}</p>
                        </div>
                    ))
                }
                <button className="prev-btn" onClick={prevButton}>prev</button>
            <button className="next-btn" onClick={nextButton}>next</button>
            <button className="random-btn" onClick={surButton}>surprise me</button>
            </div>
            
        </div>
    )
}

export default App;
