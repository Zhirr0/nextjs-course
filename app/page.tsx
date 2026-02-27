import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";



const page = () => {
  return (
    <section>
      <h1 className="text-center capitalize">
        the hub for every dev <br /> event you can&apos;t miss
      </h1>
      <p className="text-center mt-5 capitalize">
        hackathos, meetups, and conferences, all in one place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>featured events</h3>

        <ul className="events">
          {events.map((event) => (
            <li className="list-none" key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
