import Icon, { type IconName } from "./Icon";

type Service = {
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card-soft is-hoverable group flex h-full flex-col p-7 md:p-9">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green-ink transition-colors duration-200 group-hover:bg-green/15">
        <Icon name={service.icon} size={24} />
      </div>
      <h3 className="mt-5 text-[20px] font-bold leading-[1.3] text-navy md:text-[24px]">
        {service.title}
      </h3>
      <p className="mt-3 text-navy/80">{service.description}</p>
      <ul className="mt-5 flex flex-col gap-2.5 border-t border-ash/40 pt-5">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-navy/90">
            <span
              aria-hidden
              className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
