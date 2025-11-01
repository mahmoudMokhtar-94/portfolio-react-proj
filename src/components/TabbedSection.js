import React, { useState } from "react";
import "../styles/tabbed-section.css";
import ProjectsContent from "./ProjectsContent";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState("projects");

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return <ProjectsContent />;
      case "contact":
        return <ContactForm />;
      case "contact-info":
        return <ContactInfo />;
      default:
        return <ProjectsContent />;
    }
  };

  const getTabClass = (tabKey) => {
    return `tab-button ${activeTab === tabKey ? "active" : ""}`;
  };

  return (
    <section className="tabbed-section-container" id="tabbedSection">
      <h2 className="section-heading">My Projects</h2>
      <p className="section-description">
        My name is Abulrahman, I live in Gharbia, El Mahalla El Kubra Center,
        These are some of my projects.
      </p>

      <div className="tab-group">
        <button
          className={getTabClass("projects")}
          onClick={() => setActiveTab("projects")}
        >
          1st Section
        </button>
        <button
          className={getTabClass("contact")}
          onClick={() => setActiveTab("contact")}
        >
          2nd Section
        </button>
        <button
          className={getTabClass("contact-info")}
          onClick={() => setActiveTab("contact-info")}
        >
          3rd Section
        </button>
      </div>

      <div className="tab-content-wrapper">{renderContent()}</div>
    </section>
  );
}
