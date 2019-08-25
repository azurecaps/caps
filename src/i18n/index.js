import en from "./en";
import fr from "./fr";

export const messages = {
    en,
    fr
};

export default function(id) {
    let lng = localStorage.getItem("lng");

    if (!lng) {
        return id;
    }

    return messages[lng][id] && 0 !== messages[lng][id].length
        ? messages[lng][id]
        : id;
}
