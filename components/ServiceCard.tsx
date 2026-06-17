import Icon, { type IconName } from "./Icon";

type Service = {
  icon: IconName;
  title: string;
  description: string;
  bullets: string[];
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group hover-lift flex h-full flex-col rounded-2xl border border-ash/50 bg-white p-7 shadow-soft hover:-translate-y-1 hover:border-green/50 hover:shadow-lift">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green-ink transition-colors duration-200 group-hover:bg-green/15">
        <Icon name={service.icon} size={24} />
      </div>
      <h3 className="mt-5 text-xl font-bold text-navy sm:text-2xl">{service.title}</h3>
      <p className="mt-3 text-navy/75">{service.description}</p>
      <ul className="mt-5 flex flex-col gap-2.5 border-t border-ash/40 pt-5">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-navy/85">
            <Icon
              name="check"
              size={16}
              className="mt-0.5 shrink-0 text-green"
              aria-hidden
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
