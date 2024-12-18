import { useState } from "react";

const RolesTabComponents = () => {
    const [activeTab, setActiveTab] = useState("Participants");

    const tabs = [
        { id: "Participants", label: "Participants", href: "#page1" },
        { id: "Volunteer", label: "Volunteer", href: "#page2" },
        { id: "Coordinator", label: "Coordinator", href: "#page3" },
        { id: "HOE", label: "HOE", href: "#page4" },
    ];
    return (
        <div className="p-4">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-gray-500 bg-gray-100  p-1">
            {tabs.map((tab) => (
                <li key={tab.id}>
                    <a
                        href={tab.href}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex justify-center py-4 ${
                            activeTab === tab.id
                                ? "bg-white rounded-full shadow text-indigo-900"
                                : ""
                        }`}
                    >
                        {tab.label}
                    </a>
                </li>
            ))}
        </ul>
        <div className="mt-4 text-center">
            <p className="text-sm sm:text-base font-medium">Active Tab: {activeTab}</p>
        </div>
    </div>
    )
}

export default RolesTabComponents