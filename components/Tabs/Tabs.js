import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Tabs.module.css";

import { slugify } from "../../utils/slugify";

const Tabs = ({ children, initialTab }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const router = useRouter();

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(slugify(newActiveTab));
  };

  useEffect(() => {
    if (initialTab.tab) {
      setActiveTab(initialTab.tab);
      console.log(initialTab);
    }
  }, []);

  useEffect(() => {
    router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {
      shallow: true,
    });
    console.log(activeTab);
  }, [activeTab]);

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <li
              className={slugify(label) == activeTab ? styles.current : ""}
              key={label}
            >
              <a href="#" onClick={(e) => handleClick(e, label)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      {children.map((one) => {
        if (slugify(one.props.label) == activeTab)
          return (
            <div key={one.props.label} className={styles.content}>
              {one.props.children}
            </div>
          );
      })}
    </div>
  );
};

export { Tabs };
