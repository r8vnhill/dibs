import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CodeBlock from "@theme/CodeBlock";
import styles from "./ModuleSetup.module.css";

interface SetupModuleProps {
  children: React.ReactNode;
  module: string;
  task: string;
}

const ModuleSetup: React.FC<SetupModuleProps> = ({ children, module, task }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const animationStyles = useSpring({
    from: { maxHeight: 0, opacity: 0 },
    to: {
      maxHeight: isOpen ? 1000 : 0,
      opacity: isOpen ? 1 : 0,
    },
    config: { tension: 300, friction: 30 },
  });

  return (
    <div className={styles.container}>
      <button
        className={styles.summary}
        onClick={toggle}
        aria-expanded={isOpen}
      >
        Comencemos por crear un módulo para la lección...
      </button>
      <animated.div style={animationStyles} className={styles.content}>
        <div className={styles.innerContent}>
          {children}
          <p>
            Preocúpate de que el plugin <code>{module}</code> esté aplicado en el
            archivo <code>build.gradle.kts</code> de tu proyecto.
          </p>
          <CodeBlock language="bash">{`./gradlew ${task}`}</CodeBlock>
          <p>
            Recuerda agregar el nuevo módulo al archivo{" "}
            <code>settings.gradle.kts</code>.
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default ModuleSetup;
