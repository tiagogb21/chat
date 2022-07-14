import { RiHospitalFill } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";

export default function SideBar() {
  return (
    <section className="channel-list__sidebar">
      <article className="channel-list__sidebar__icon1">
        <article className="icon1__inner">
          <RiHospitalFill className="channel-icon" />
        </article>
      </article>
      <article className="channel-list__sidebar__icon2">
        <article className="icon1__inner">
          <GrLogout className="channel-icon" />
        </article>
      </article>
    </section>
  );
}
