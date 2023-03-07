const getIdFromClick = (ev) => {
    let idFromId = ev.target.id.split("-"); // split the id to array
    if (!ev.target.id) {
        /*
            if press on icon then there is no id
            then we need to take the id of the parent which is btn
          */
        idFromId = ev.target.parentElement.id.split("-");
    }
    return idFromId[1];
};

export default getIdFromClick;