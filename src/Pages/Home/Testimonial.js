import React from "react";
import testimonial from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson harry",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam mollitia consequuntur enim a, nihil odio nobis quisquam natus adipisci quia quod blanditiis distinctio quae possimus facere id vel temporibus?",
      img: people1,
      location: "USA",
    },
    {
      _id: 2,
      name: "Alina rise",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam mollitia consequuntur enim a, nihil odio nobis quisquam natus adipisci quia quod blanditiis distinctio quae possimus facere id vel temporibus?",
      img: people2,
      location: "Canada",
    },
    {
      _id: 3,
      name: "misy khatun",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam mollitia consequuntur enim a, nihil odio nobis quisquam natus adipisci quia quod blanditiis distinctio quae possimus facere id vel temporibus?",
      img: people3,
      location: "BANGLADESH",
    },
  ];
  return (
    <section className="my-30">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-secondary text-xl">Testimonial</h2>
          <p className="text-3xl">What Our Patient Says</p>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={testimonial} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
