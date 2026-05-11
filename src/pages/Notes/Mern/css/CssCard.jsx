import { useRef, useState, useEffect } from "react";

const CssCard = ({ item, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={item.id}
      className={`overflow-hidden transition-all mt-10 w-full duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img
        src={item.img}
        alt={item.title}
        className="block w-full"
        loading="lazy"
      />
    </div>
  );
};

export default CssCard;