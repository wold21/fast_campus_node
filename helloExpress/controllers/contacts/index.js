const { Router } = require("express");
const router = Router();
const ctrl = require("./contacts.ctrl");

router.get("/", ctrl.get_contacts);

router.get("/list", ctrl.get_contacts_list);

module.exports = router;
