"use strict";
exports.__esModule = true;
exports.HeatingType = exports.OwnershipType = exports.BuildingMaterial = exports.WaterProvider = exports.ElectricityProvider = void 0;
var ElectricityProvider;
(function (ElectricityProvider) {
    ElectricityProvider["INITIAL"] = "";
    ElectricityProvider["NEK"] = "National Eletric Company";
    ElectricityProvider["CEZ"] = "CEZ";
    ElectricityProvider["EVN"] = "EVN";
})(ElectricityProvider = exports.ElectricityProvider || (exports.ElectricityProvider = {}));
var WaterProvider;
(function (WaterProvider) {
    WaterProvider["INITIAL"] = "";
    WaterProvider["VIK"] = "VIK";
    WaterProvider["VIKSofia"] = "V i K Sofia";
    WaterProvider["NWS"] = "New Water Solutions";
    WaterProvider["TruboprovdaVPernik"] = "Garantirano ot Gerb";
})(WaterProvider = exports.WaterProvider || (exports.WaterProvider = {}));
var BuildingMaterial;
(function (BuildingMaterial) {
    BuildingMaterial["INITIAL"] = "";
    BuildingMaterial["BRICK"] = "Brick";
    BuildingMaterial["CONCRETE"] = "Concrete";
    BuildingMaterial["MONOLITH"] = "Monolithic block structure";
    BuildingMaterial["WOOD"] = "Wood";
})(BuildingMaterial = exports.BuildingMaterial || (exports.BuildingMaterial = {}));
var OwnershipType;
(function (OwnershipType) {
    OwnershipType["INITIAL"] = "";
    OwnershipType["OWN"] = "Own";
    OwnershipType["RENT"] = "Rent";
})(OwnershipType = exports.OwnershipType || (exports.OwnershipType = {}));
var HeatingType;
(function (HeatingType) {
    HeatingType["INITIAL"] = "";
    HeatingType["AC"] = "Air conditioners";
    HeatingType["WOOD"] = "Firewood";
    HeatingType["PELLETS"] = "Wooden pellets";
    HeatingType["COAL"] = "Charcoal";
    HeatingType["BITCOINFARM"] = "BTC farms";
    HeatingType["TEC"] = "Centralized heating";
})(HeatingType = exports.HeatingType || (exports.HeatingType = {}));
