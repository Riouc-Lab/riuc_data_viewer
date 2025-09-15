export const truncateDescription = (description, limit) => {
    if (!description || typeof description !== "string") return "";
    return description.length <= limit
        ? description
        : description.slice(0, limit) + "...";
};