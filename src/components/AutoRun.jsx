
import Marquee from "react-fast-marquee";

const AutoRun = async() => {
const res = await fetch("https://tiles-galary.vercel.app/data.json");
const user = await res.json()

    //     {
    //         id: 1,
    //         name: "Babul Hossan",
    //         description: "An experienced sample technician with over 8 years of work in the garments industry, skilled in fabric analysis, pattern understanding, and quality control."
    //     },
    //     {
    //         id: 2,
    //         name: "Rahim Uddin",
    //         description: "A dedicated professional in the textile sector with strong teamwork, problem-solving ability, and experience in maintaining production efficiency."
    //     },
    //     {
    //         id: 3,
    //         name: "Karim Sheikh",
    //         description: "A passionate learner in web development who is exploring modern technologies like JavaScript, React, and Next.js to build real-world applications."
    //     }
    // ];

    return (
        <div className="flex items-center container my-10 mx-auto py-3 px-2 gap-4 mt-5 bg-[#F3F3F3]">

            <button className="btn btn-error">Latest</button>
            <Marquee pauseOnHover speed={100}>
                <p>
                    {
                        user.map(use => <span className="mx-8" key={use.id}>{use.description}</span>)
                    }
                </p>
            </Marquee>
        </div>
    );
};

export default AutoRun;