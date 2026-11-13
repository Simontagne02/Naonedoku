/**
 * Données officielles du réseau de transport Naolib / TAN de Nantes
 * Filtré selon les lignes Tramway (1, 2, 3), Busway (4, 5) et Chronobus (C1 à C20)
 */

import { LineId, Station } from "../types/game";

export interface LineMeta {
  id: LineId;
  name: string;
  type: "tram" | "busway" | "chronobus";
  color: string;
  textColor: string;
  borderColor: string;
  badge: string;
}

export const LINES_META: Record<LineId, LineMeta> = {
  "1": {
    id: "1",
    name: "Ligne 1 (Tramway)",
    type: "tram",
    color: "#007a45",
    textColor: "#ffffff",
    borderColor: "#005c34",
    badge: "1",
  },
  "2": {
    id: "2",
    name: "Ligne 2 (Tramway)",
    type: "tram",
    color: "#e53138",
    textColor: "#ffffff",
    borderColor: "#ba1e25",
    badge: "2",
  },
  "3": {
    id: "3",
    name: "Ligne 3 (Tramway)",
    type: "tram",
    color: "#0079bc",
    textColor: "#ffffff",
    borderColor: "#00588a",
    badge: "3",
  },
  "4": {
    id: "4",
    name: "Ligne 4 (Busway)",
    type: "busway",
    color: "#ffcd1c",
    textColor: "#000000",
    borderColor: "#d4a70a",
    badge: "4",
  },
  "5": {
    id: "5",
    name: "Ligne 5 (Busway)",
    type: "busway",
    color: "#0bbbef",
    textColor: "#ffffff",
    borderColor: "#0998c4",
    badge: "5",
  },
  "C1": {
    id: "C1",
    name: "Chronobus C1",
    type: "chronobus",
    color: "#0bbbef",
    textColor: "#ffffff",
    borderColor: "#0886ad",
    badge: "C1",
  },
  "C2": {
    id: "C2",
    name: "Chronobus C2",
    type: "chronobus",
    color: "#ee7402",
    textColor: "#ffffff",
    borderColor: "#b55902",
    badge: "C2",
  },
  "C3": {
    id: "C3",
    name: "Chronobus C3",
    type: "chronobus",
    color: "#f7a600",
    textColor: "#000000",
    borderColor: "#bd8002",
    badge: "C3",
  },
  "C4": {
    id: "C4",
    name: "Chronobus C4",
    type: "chronobus",
    color: "#76b82a",
    textColor: "#ffffff",
    borderColor: "#578a1c",
    badge: "C4",
  },
  "C6": {
    id: "C6",
    name: "Chronobus C6",
    type: "chronobus",
    color: "#a877b2",
    textColor: "#ffffff",
    borderColor: "#7e5787",
    badge: "C6",
  },
  "C7": {
    id: "C7",
    name: "Chronobus C7",
    type: "chronobus",
    color: "#c8d300",
    textColor: "#000000",
    borderColor: "#959e00",
    badge: "C7",
  },
  "C8": {
    id: "C8",
    name: "Chronobus C8",
    type: "chronobus",
    color: "#c8d300",
    textColor: "#000000",
    borderColor: "#959e00",
    badge: "C8",
  },
  "C9": {
    id: "C9",
    name: "Chronobus C9",
    type: "chronobus",
    color: "#f5b5d3",
    textColor: "#000000",
    borderColor: "#ba839c",
    badge: "C9",
  },
  "C20": {
    id: "C20",
    name: "Chronobus C20",
    type: "chronobus",
    color: "#ffed00",
    textColor: "#000000",
    borderColor: "#bfae00",
    badge: "C20",
  },
};

export const NANTES_STATIONS: Station[] = [
  {
    "id": "sp-314",
    "name": "50 Otages",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2",
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.219936,
    "lon": -1.555552
  },
  {
    "id": "sp-519",
    "name": "8 Mai",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.189137,
    "lon": -1.55138
  },
  {
    "id": "sp-1054",
    "name": "Abel Durand",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.220139,
    "lon": -1.603323
  },
  {
    "id": "sp-524",
    "name": "Aimé Delrue",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2",
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.209114,
    "lon": -1.550219
  },
  {
    "id": "sp-597",
    "name": "Alexandre Vincent - Ste-Thérèse",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.232689,
    "lon": -1.577249
  },
  {
    "id": "sp-220",
    "name": "Ambroise Paré",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.228992,
    "lon": -1.608603
  },
  {
    "id": "sp-318",
    "name": "Américains",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.235939,
    "lon": -1.568077
  },
  {
    "id": "sp-564",
    "name": "Anatole France",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.224152,
    "lon": -1.571613
  },
  {
    "id": "sp-295",
    "name": "Angevinière",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.245392,
    "lon": -1.611643
  },
  {
    "id": "sp-759",
    "name": "Armor",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.231064,
    "lon": -1.631667
  },
  {
    "id": "sp-1144",
    "name": "Babinière",
    "commune": "La Chapelle-sur-Erdre",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": true,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.259411,
    "lon": -1.546842
  },
  {
    "id": "sp-511",
    "name": "Balinière",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.1856,
    "lon": -1.554175
  },
  {
    "id": "sp-58",
    "name": "Bas-Chantenay",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.19762,
    "lon": -1.588684
  },
  {
    "id": "sp-325",
    "name": "Basse Chênaie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.241398,
    "lon": -1.50876
  },
  {
    "id": "sp-478",
    "name": "Basse-Goulaine",
    "commune": "Basse-Goulaine",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.210812,
    "lon": -1.465725
  },
  {
    "id": "sp-825",
    "name": "Batignolles",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.25555,
    "lon": -1.529833
  },
  {
    "id": "sp-460",
    "name": "Baugerie",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.203617,
    "lon": -1.52057
  },
  {
    "id": "sp-795",
    "name": "Bd Charles Gautier",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.222404,
    "lon": -1.607159
  },
  {
    "id": "sp-1",
    "name": "Bd de Doulon",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C3"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.224266,
    "lon": -1.519962
  },
  {
    "id": "sp-55",
    "name": "Bd des Anglais",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.227036,
    "lon": -1.581529
  },
  {
    "id": "sp-339",
    "name": "Beaugency",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.203545,
    "lon": -1.490082
  },
  {
    "id": "sp-10",
    "name": "Beaujoire",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C6"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.258999,
    "lon": -1.526701
  },
  {
    "id": "sp-578",
    "name": "Beaulieu",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.203876,
    "lon": -1.53622
  },
  {
    "id": "sp-329",
    "name": "Beauséjour",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.238132,
    "lon": -1.586809
  },
  {
    "id": "sp-327",
    "name": "Bel Air",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.225624,
    "lon": -1.559457
  },
  {
    "id": "sp-52",
    "name": "Belges - Montbazon",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.235146,
    "lon": -1.540754
  },
  {
    "id": "sp-406",
    "name": "Belloc",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.203381,
    "lon": -1.614656
  },
  {
    "id": "sp-771",
    "name": "Bergeronnettes",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.240696,
    "lon": -1.60033
  },
  {
    "id": "sp-733",
    "name": "Berlin",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "5",
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.216263,
    "lon": -1.536079
  },
  {
    "id": "sp-328",
    "name": "Berlioz",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.239628,
    "lon": -1.571565
  },
  {
    "id": "sp-413",
    "name": "Bernanos",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.206326,
    "lon": -1.61359
  },
  {
    "id": "sp-1048",
    "name": "Bertrand",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.257076,
    "lon": -1.575714
  },
  {
    "id": "sp-602",
    "name": "Bignon",
    "commune": "Orvault",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.249256,
    "lon": -1.597781
  },
  {
    "id": "sp-973",
    "name": "Bio Ouest Laënnec",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.232933,
    "lon": -1.642404
  },
  {
    "id": "sp-115",
    "name": "Blanchet",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.171494,
    "lon": -1.543272
  },
  {
    "id": "sp-358",
    "name": "Bois des Anses",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.246891,
    "lon": -1.494903
  },
  {
    "id": "sp-891",
    "name": "Bois Hardy",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.198204,
    "lon": -1.600277
  },
  {
    "id": "sp-347",
    "name": "Boissière",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.254791,
    "lon": -1.565827
  },
  {
    "id": "sp-1081",
    "name": "Bonde",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.222752,
    "lon": -1.552013
  },
  {
    "id": "sp-691",
    "name": "Bonne Garde",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.196873,
    "lon": -1.531321
  },
  {
    "id": "sp-4",
    "name": "Bouffay",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.214584,
    "lon": -1.552348
  },
  {
    "id": "sp-895",
    "name": "Bougainville",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.198895,
    "lon": -1.584268
  },
  {
    "id": "sp-154",
    "name": "Bougrière",
    "commune": "Sainte-Luce-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.255047,
    "lon": -1.471909
  },
  {
    "id": "sp-1035",
    "name": "Bourdonnais",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.20599,
    "lon": -1.579714
  },
  {
    "id": "sp-490",
    "name": "Bourdonnières",
    "commune": "Vertou",
    "zone": "Sud Loire",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.186871,
    "lon": -1.521521
  },
  {
    "id": "sp-246",
    "name": "Bourgeonnière",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.253147,
    "lon": -1.560601
  },
  {
    "id": "sp-167",
    "name": "Bout des Pavés",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.253319,
    "lon": -1.576118
  },
  {
    "id": "sp-778",
    "name": "Bouvardière",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.238422,
    "lon": -1.598394
  },
  {
    "id": "sp-544",
    "name": "Branchoire",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.218082,
    "lon": -1.603581
  },
  {
    "id": "sp-600",
    "name": "Bretagne",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.217251,
    "lon": -1.558388
  },
  {
    "id": "sp-1078",
    "name": "Bretéché",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.225536,
    "lon": -1.548041
  },
  {
    "id": "sp-323",
    "name": "Bruneau",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.228104,
    "lon": -1.561575
  },
  {
    "id": "sp-140",
    "name": "Bussonnière",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.269337,
    "lon": -1.443391
  },
  {
    "id": "sp-458",
    "name": "Cambronne",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.206581,
    "lon": -1.506412
  },
  {
    "id": "sp-558",
    "name": "Camus",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.219223,
    "lon": -1.572769
  },
  {
    "id": "sp-476",
    "name": "Canal",
    "commune": "Basse-Goulaine",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.216076,
    "lon": -1.471871
  },
  {
    "id": "sp-534",
    "name": "Canclaux",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1",
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.214397,
    "lon": -1.574622
  },
  {
    "id": "sp-890",
    "name": "Carrière Misery",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.199619,
    "lon": -1.580657
  },
  {
    "id": "sp-141",
    "name": "Centre de Thouaré",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.266781,
    "lon": -1.441342
  },
  {
    "id": "sp-1039",
    "name": "Chalâtres",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.231438,
    "lon": -1.538304
  },
  {
    "id": "sp-1085",
    "name": "Châlet",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.229698,
    "lon": -1.544331
  },
  {
    "id": "sp-82",
    "name": "Chalonges",
    "commune": "Basse-Goulaine",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.189552,
    "lon": -1.472265
  },
  {
    "id": "sp-585",
    "name": "Champ de Courses",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.244755,
    "lon": -1.561573
  },
  {
    "id": "sp-132",
    "name": "Champ Fleuri",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.14394,
    "lon": -1.5252
  },
  {
    "id": "sp-21",
    "name": "Chantiers Navals",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.209007,
    "lon": -1.567242
  },
  {
    "id": "sp-244",
    "name": "Chantrerie - Grandes Écoles",
    "commune": "Carquefou",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": true,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.282032,
    "lon": -1.517515
  },
  {
    "id": "sp-1040",
    "name": "Chanzy",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.224285,
    "lon": -1.545999
  },
  {
    "id": "sp-484",
    "name": "Chapeau Verni",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.189175,
    "lon": -1.510074
  },
  {
    "id": "sp-1060",
    "name": "Châtaigniers",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.221874,
    "lon": -1.602368
  },
  {
    "id": "sp-517",
    "name": "Château de Rezé",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.185825,
    "lon": -1.559577
  },
  {
    "id": "sp-473",
    "name": "Châtelets",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C4",
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.197025,
    "lon": -1.540559
  },
  {
    "id": "sp-1052",
    "name": "Chauvinière",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.251534,
    "lon": -1.572086
  },
  {
    "id": "sp-354",
    "name": "Chêne des Anglais",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2",
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.261402,
    "lon": -1.57377
  },
  {
    "id": "sp-1046",
    "name": "Chocolaterie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.242821,
    "lon": -1.527858
  },
  {
    "id": "sp-781",
    "name": "Cimetière Gaudinière",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.243004,
    "lon": -1.582808
  },
  {
    "id": "sp-319",
    "name": "Cirque - Marais",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.218102,
    "lon": -1.557164
  },
  {
    "id": "sp-689",
    "name": "Cité des Congrès",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.213604,
    "lon": -1.544985
  },
  {
    "id": "sp-359",
    "name": "Clairais",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.275517,
    "lon": -1.43833
  },
  {
    "id": "sp-787",
    "name": "Claude Bernard",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.223106,
    "lon": -1.611849
  },
  {
    "id": "sp-356",
    "name": "Clémencière",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.269508,
    "lon": -1.43563
  },
  {
    "id": "sp-129",
    "name": "Clos du Moulin",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.145149,
    "lon": -1.521236
  },
  {
    "id": "sp-687",
    "name": "Clos Toreau",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.194191,
    "lon": -1.52916
  },
  {
    "id": "sp-1087",
    "name": "Cochard",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.224285,
    "lon": -1.550073
  },
  {
    "id": "sp-746",
    "name": "Cochardières",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.229679,
    "lon": -1.633737
  },
  {
    "id": "sp-1056",
    "name": "Colonac",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.224625,
    "lon": -1.602998
  },
  {
    "id": "sp-20",
    "name": "Commerce",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "2",
      "3",
      "C2",
      "C3",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.214268,
    "lon": -1.555908
  },
  {
    "id": "sp-561",
    "name": "Conservatoire",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.207626,
    "lon": -1.534514
  },
  {
    "id": "sp-550",
    "name": "Copernic - Musées",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1",
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.214897,
    "lon": -1.564548
  },
  {
    "id": "sp-133",
    "name": "Corberie",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.152248,
    "lon": -1.524032
  },
  {
    "id": "sp-121",
    "name": "Corbinerie",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.161537,
    "lon": -1.542181
  },
  {
    "id": "sp-480",
    "name": "Corbon",
    "commune": "Basse-Goulaine",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.212852,
    "lon": -1.461117
  },
  {
    "id": "sp-429",
    "name": "Coty",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.249016,
    "lon": -1.488137
  },
  {
    "id": "sp-1088",
    "name": "Couchant",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.270149,
    "lon": -1.513774
  },
  {
    "id": "sp-1084",
    "name": "Coudray",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.232346,
    "lon": -1.542427
  },
  {
    "id": "sp-1057",
    "name": "Courteline",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.236519,
    "lon": -1.58695
  },
  {
    "id": "sp-1090",
    "name": "Cousteau",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.240192,
    "lon": -1.513075
  },
  {
    "id": "sp-1033",
    "name": "Croissant",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.240757,
    "lon": -1.530404
  },
  {
    "id": "sp-5",
    "name": "Croix Bonneau",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.209724,
    "lon": -1.596353
  },
  {
    "id": "sp-1073",
    "name": "Delacroix",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.223652,
    "lon": -1.589331
  },
  {
    "id": "sp-547",
    "name": "Delorme",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.215469,
    "lon": -1.564403
  },
  {
    "id": "sp-1059",
    "name": "Dervallières",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.228817,
    "lon": -1.598185
  },
  {
    "id": "sp-1044",
    "name": "Desaix",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.226917,
    "lon": -1.542739
  },
  {
    "id": "sp-470",
    "name": "Douettée",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.207767,
    "lon": -1.498699
  },
  {
    "id": "sp-549",
    "name": "Doumer",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.221767,
    "lon": -1.578219
  },
  {
    "id": "sp-12",
    "name": "Du Chaffault",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.207573,
    "lon": -1.581837
  },
  {
    "id": "sp-30",
    "name": "Duchesse Anne - Château",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.216103,
    "lon": -1.546821
  },
  {
    "id": "sp-1063",
    "name": "Duguay Trouin",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.224297,
    "lon": -1.616547
  },
  {
    "id": "sp-508",
    "name": "École Centrale - Audencia",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2",
      "C20"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": true,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.248417,
    "lon": -1.551429
  },
  {
    "id": "sp-122",
    "name": "Écoles",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.146038,
    "lon": -1.528282
  },
  {
    "id": "sp-1068",
    "name": "Écosse",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.215164,
    "lon": -1.526253
  },
  {
    "id": "sp-528",
    "name": "Édit de Nantes",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1",
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.214451,
    "lon": -1.568584
  },
  {
    "id": "sp-1069",
    "name": "Edith Piaf",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.228195,
    "lon": -1.623873
  },
  {
    "id": "sp-13",
    "name": "Égalité",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.209114,
    "lon": -1.587787
  },
  {
    "id": "sp-1058",
    "name": "Eglantine",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.235165,
    "lon": -1.588221
  },
  {
    "id": "sp-1086",
    "name": "Embellie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.265114,
    "lon": -1.518601
  },
  {
    "id": "sp-772",
    "name": "Équipement",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.223835,
    "lon": -1.575579
  },
  {
    "id": "sp-533",
    "name": "Éraudière",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.242287,
    "lon": -1.534976
  },
  {
    "id": "sp-520",
    "name": "Espace Diderot",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.184685,
    "lon": -1.563048
  },
  {
    "id": "sp-884",
    "name": "Fac de Lettres",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": true,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.245518,
    "lon": -1.551838
  },
  {
    "id": "sp-513",
    "name": "Facultés",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": true,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.246273,
    "lon": -1.555323
  },
  {
    "id": "sp-769",
    "name": "Fallières",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.224979,
    "lon": -1.579427
  },
  {
    "id": "sp-896",
    "name": "Fardière",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.198463,
    "lon": -1.605963
  },
  {
    "id": "sp-326",
    "name": "Félix Faure",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.227238,
    "lon": -1.569848
  },
  {
    "id": "sp-1001",
    "name": "Félix Tableau",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.187775,
    "lon": -1.546988
  },
  {
    "id": "sp-170",
    "name": "Ferrière",
    "commune": "Orvault",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.243637,
    "lon": -1.591343
  },
  {
    "id": "sp-124",
    "name": "Flora Tristan",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.17606,
    "lon": -1.543817
  },
  {
    "id": "sp-201",
    "name": "Foch - Cathédrale",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "4",
      "C1",
      "C6"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.219833,
    "lon": -1.551019
  },
  {
    "id": "sp-731",
    "name": "Fonderies",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.206394,
    "lon": -1.543781
  },
  {
    "id": "sp-340",
    "name": "Fontaine",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.205463,
    "lon": -1.489231
  },
  {
    "id": "sp-1047",
    "name": "Forêt",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.244297,
    "lon": -1.575455
  },
  {
    "id": "sp-29",
    "name": "Frachon",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.219273,
    "lon": -1.621584
  },
  {
    "id": "sp-2",
    "name": "François Mitterrand",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.221878,
    "lon": -1.638216
  },
  {
    "id": "sp-1072",
    "name": "Franklin",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.225864,
    "lon": -1.6197
  },
  {
    "id": "sp-577",
    "name": "Galarne",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.208191,
    "lon": -1.529852
  },
  {
    "id": "sp-62",
    "name": "Gare de Chantenay",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C1",
      "C20"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": true,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.197811,
    "lon": -1.593918
  },
  {
    "id": "sp-735",
    "name": "Gare de l'État",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": true,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.204472,
    "lon": -1.560182
  },
  {
    "id": "sp-514",
    "name": "Gare de Pont Rousseau",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "2"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": true,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.19302,
    "lon": -1.549084
  },
  {
    "id": "sp-1147",
    "name": "Gare des Pas Enchantés",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": true,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.205303,
    "lon": -1.509883
  },
  {
    "id": "sp-8",
    "name": "Gare Maritime",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C20"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.20676,
    "lon": -1.573395
  },
  {
    "id": "sp-33",
    "name": "Gare Nord - Jardin des Plantes",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": true,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.217499,
    "lon": -1.543726
  },
  {
    "id": "sp-732",
    "name": "Gare Sud",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "5",
      "C2",
      "C3",
      "C8"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": true,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.215809,
    "lon": -1.541719
  },
  {
    "id": "sp-468",
    "name": "Gibraye",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.205051,
    "lon": -1.516313
  },
  {
    "id": "sp-290",
    "name": "Gicquelière",
    "commune": "Sainte-Luce-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.258125,
    "lon": -1.458752
  },
  {
    "id": "sp-775",
    "name": "Grand Carcouët",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.231728,
    "lon": -1.591942
  },
  {
    "id": "sp-466",
    "name": "Grand Portail",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.201855,
    "lon": -1.523287
  },
  {
    "id": "sp-510",
    "name": "Grande Ouche",
    "commune": "Bouguenais",
    "zone": "Sud Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.181412,
    "lon": -1.579663
  },
  {
    "id": "sp-467",
    "name": "Greneraie",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "4",
      "C4",
      "C9"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.199547,
    "lon": -1.533383
  },
  {
    "id": "sp-474",
    "name": "Grezillières",
    "commune": "Basse-Goulaine",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.214291,
    "lon": -1.478575
  },
  {
    "id": "sp-481",
    "name": "Grignon",
    "commune": "Basse-Goulaine",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.2164,
    "lon": -1.466402
  },
  {
    "id": "sp-555",
    "name": "Grillaud",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.219997,
    "lon": -1.581729
  },
  {
    "id": "sp-337",
    "name": "Grootaers",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.239525,
    "lon": -1.584861
  },
  {
    "id": "sp-530",
    "name": "Guindré",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.239368,
    "lon": -1.53772
  },
  {
    "id": "sp-361",
    "name": "Halbarderie",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.268345,
    "lon": -1.438038
  },
  {
    "id": "sp-32",
    "name": "Haluchère - Batignolles",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C1"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": true,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.249043,
    "lon": -1.522768
  },
  {
    "id": "sp-25",
    "name": "Halvêque",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.258148,
    "lon": -1.519949
  },
  {
    "id": "sp-734",
    "name": "Hangar à Bananes",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.20047,
    "lon": -1.572735
  },
  {
    "id": "sp-531",
    "name": "Harouys",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.216793,
    "lon": -1.567043
  },
  {
    "id": "sp-737",
    "name": "Haubans",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "5",
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.214527,
    "lon": -1.529985
  },
  {
    "id": "sp-120",
    "name": "Haute Lande",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.154346,
    "lon": -1.523569
  },
  {
    "id": "sp-1034",
    "name": "Hérelle",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.201504,
    "lon": -1.586686
  },
  {
    "id": "sp-792",
    "name": "Hermeland",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.230225,
    "lon": -1.616984
  },
  {
    "id": "sp-573",
    "name": "Hippodrome",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.24733,
    "lon": -1.567571
  },
  {
    "id": "sp-1071",
    "name": "Hongrie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.215965,
    "lon": -1.523945
  },
  {
    "id": "sp-7",
    "name": "Hôpital Bellier",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.221653,
    "lon": -1.527733
  },
  {
    "id": "sp-196",
    "name": "Hôtel de Ville",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1",
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.217793,
    "lon": -1.554348
  },
  {
    "id": "sp-506",
    "name": "Hôtel Dieu",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2",
      "3",
      "C2",
      "C3",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.212219,
    "lon": -1.553578
  },
  {
    "id": "sp-685",
    "name": "Île de Nantes",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "4",
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.206333,
    "lon": -1.539216
  },
  {
    "id": "sp-11",
    "name": "Jamet",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.210049,
    "lon": -1.603099
  },
  {
    "id": "sp-1055",
    "name": "Janvraie",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.199741,
    "lon": -1.61183
  },
  {
    "id": "sp-1070",
    "name": "Jean Ingres",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.222256,
    "lon": -1.596414
  },
  {
    "id": "sp-276",
    "name": "Jean Jaurès",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.30125,
    "lon": -1.549782
  },
  {
    "id": "sp-38",
    "name": "Jean Macé",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.200008,
    "lon": -1.58913
  },
  {
    "id": "sp-26",
    "name": "Jean Moulin",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.207081,
    "lon": -1.599989
  },
  {
    "id": "sp-598",
    "name": "Jean Rostand",
    "commune": "Orvault",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.246025,
    "lon": -1.593902
  },
  {
    "id": "sp-626",
    "name": "Joliverie",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": true,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.18985,
    "lon": -1.519349
  },
  {
    "id": "sp-537",
    "name": "Keren",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.244598,
    "lon": -1.533519
  },
  {
    "id": "sp-546",
    "name": "Koufra",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.25,
    "lon": -1.530322
  },
  {
    "id": "sp-128",
    "name": "La Carrée",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.168625,
    "lon": -1.543255
  },
  {
    "id": "sp-1051",
    "name": "La Close",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.241615,
    "lon": -1.573471
  },
  {
    "id": "sp-1049",
    "name": "La Coulée",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.259399,
    "lon": -1.576159
  },
  {
    "id": "sp-284",
    "name": "La Grille",
    "commune": "Sainte-Luce-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.250984,
    "lon": -1.481615
  },
  {
    "id": "sp-1064",
    "name": "La Roche",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.21666,
    "lon": -1.518661
  },
  {
    "id": "sp-1089",
    "name": "Lallié",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.227348,
    "lon": -1.545642
  },
  {
    "id": "sp-552",
    "name": "Lamartine",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.216511,
    "lon": -1.57874
  },
  {
    "id": "sp-542",
    "name": "Lamoricière",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1",
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.214497,
    "lon": -1.572486
  },
  {
    "id": "sp-18",
    "name": "Landreau",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.231934,
    "lon": -1.516051
  },
  {
    "id": "sp-27",
    "name": "Lauriers",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.204784,
    "lon": -1.604038
  },
  {
    "id": "sp-184",
    "name": "Le Cardo",
    "commune": "Orvault",
    "zone": "Nord Loire",
    "lines": [
      "2",
      "C2"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.26181,
    "lon": -1.584298
  },
  {
    "id": "sp-334",
    "name": "Le Goffic",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.230427,
    "lon": -1.563481
  },
  {
    "id": "sp-1053",
    "name": "Le Nain",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.226833,
    "lon": -1.600729
  },
  {
    "id": "sp-1041",
    "name": "Lechat",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.203926,
    "lon": -1.580984
  },
  {
    "id": "sp-515",
    "name": "Les Couëts",
    "commune": "Bouguenais",
    "zone": "Sud Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.180183,
    "lon": -1.585829
  },
  {
    "id": "sp-116",
    "name": "Les Faulx",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.157314,
    "lon": -1.522666
  },
  {
    "id": "sp-269",
    "name": "Les Roches",
    "commune": "Orvault",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.263302,
    "lon": -1.579928
  },
  {
    "id": "sp-131",
    "name": "Les Sorinières",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.159122,
    "lon": -1.518118
  },
  {
    "id": "sp-766",
    "name": "Lieu Unique",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2",
      "C3",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.215633,
    "lon": -1.546006
  },
  {
    "id": "sp-237",
    "name": "Linot",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.265427,
    "lon": -1.526018
  },
  {
    "id": "sp-554",
    "name": "Littré",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.217743,
    "lon": -1.582395
  },
  {
    "id": "sp-603",
    "name": "Longchamp",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.235031,
    "lon": -1.582387
  },
  {
    "id": "sp-343",
    "name": "Lourneau",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.200218,
    "lon": -1.48834
  },
  {
    "id": "sp-1036",
    "name": "Lusançay",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.202682,
    "lon": -1.582462
  },
  {
    "id": "sp-34",
    "name": "Mairie de Doulon",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.226807,
    "lon": -1.518957
  },
  {
    "id": "sp-125",
    "name": "Mairie des Sorinières",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.148994,
    "lon": -1.532011
  },
  {
    "id": "sp-1061",
    "name": "Malakoff",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.216225,
    "lon": -1.521288
  },
  {
    "id": "sp-522",
    "name": "Mangin",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "2",
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.201584,
    "lon": -1.545464
  },
  {
    "id": "sp-23",
    "name": "Manufacture",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.218918,
    "lon": -1.536925
  },
  {
    "id": "sp-690",
    "name": "Maraîchers",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.184746,
    "lon": -1.510606
  },
  {
    "id": "sp-311",
    "name": "Marcel Paul",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "3",
      "C8"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.246197,
    "lon": -1.616345
  },
  {
    "id": "sp-370",
    "name": "Maurienne",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.275307,
    "lon": -1.443192
  },
  {
    "id": "sp-686",
    "name": "Mauvoisins",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.190147,
    "lon": -1.525545
  },
  {
    "id": "sp-15",
    "name": "Médiathèque",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.210545,
    "lon": -1.561415
  },
  {
    "id": "sp-195",
    "name": "Mellinet",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.211384,
    "lon": -1.576811
  },
  {
    "id": "sp-6",
    "name": "Mendès France - Bellevue",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.208961,
    "lon": -1.611697
  },
  {
    "id": "sp-40",
    "name": "Michelet",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": true,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.234955,
    "lon": -1.556815
  },
  {
    "id": "sp-149",
    "name": "Minais",
    "commune": "Sainte-Luce-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.257069,
    "lon": -1.466276
  },
  {
    "id": "sp-536",
    "name": "Mondésir",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.217766,
    "lon": -1.568938
  },
  {
    "id": "sp-779",
    "name": "Monteil",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2",
      "C3",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.214005,
    "lon": -1.549322
  },
  {
    "id": "sp-518",
    "name": "Morrhonnière - Petit Port",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.24128,
    "lon": -1.556738
  },
  {
    "id": "sp-512",
    "name": "Motte Rouge",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.228344,
    "lon": -1.553835
  },
  {
    "id": "sp-292",
    "name": "Moulin Cassé",
    "commune": "Sainte-Luce-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.155914,
    "lon": -1.70997
  },
  {
    "id": "sp-243",
    "name": "Moulin de Porterie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.275707,
    "lon": -1.512809
  },
  {
    "id": "sp-9",
    "name": "Moutonnerie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.219601,
    "lon": -1.533263
  },
  {
    "id": "sp-22",
    "name": "Neruda",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.217579,
    "lon": -1.612588
  },
  {
    "id": "sp-507",
    "name": "Neustrie",
    "commune": "Bouguenais",
    "zone": "Sud Loire",
    "lines": [
      "3"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.177128,
    "lon": -1.592979
  },
  {
    "id": "sp-768",
    "name": "Nil",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.241993,
    "lon": -1.607986
  },
  {
    "id": "sp-736",
    "name": "Nizan",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.205696,
    "lon": -1.550825
  },
  {
    "id": "sp-91",
    "name": "Noé Cottée",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.194298,
    "lon": -1.479043
  },
  {
    "id": "sp-777",
    "name": "Noëlles",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.24025,
    "lon": -1.604304
  },
  {
    "id": "sp-182",
    "name": "Orvault Grand Val",
    "commune": "Orvault",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.26223,
    "lon": -1.593085
  },
  {
    "id": "sp-393",
    "name": "Orvault Morlière",
    "commune": "Orvault",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.246956,
    "lon": -1.603415
  },
  {
    "id": "sp-110",
    "name": "Ouche des landes",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.194977,
    "lon": -1.482377
  },
  {
    "id": "sp-130",
    "name": "Papillons",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.146431,
    "lon": -1.51912
  },
  {
    "id": "sp-282",
    "name": "Parc des Sports",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.26046,
    "lon": -1.449934
  },
  {
    "id": "sp-788",
    "name": "Patouillerie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.245369,
    "lon": -1.580976
  },
  {
    "id": "sp-1080",
    "name": "Perron",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.22467,
    "lon": -1.60138
  },
  {
    "id": "sp-571",
    "name": "Petit Port",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.243649,
    "lon": -1.557285
  },
  {
    "id": "sp-3",
    "name": "Pin Sec",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.243427,
    "lon": -1.518419
  },
  {
    "id": "sp-1076",
    "name": "Pinier",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.182156,
    "lon": -1.54545
  },
  {
    "id": "sp-291",
    "name": "Pirmil",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "2",
      "3",
      "C4",
      "C9"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.196301,
    "lon": -1.542528
  },
  {
    "id": "sp-189",
    "name": "Place du Cirque",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2",
      "C1",
      "C2",
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.216896,
    "lon": -1.556938
  },
  {
    "id": "sp-601",
    "name": "Plaisance",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.240459,
    "lon": -1.591497
  },
  {
    "id": "sp-286",
    "name": "Planchonnais",
    "commune": "Sainte-Luce-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.253536,
    "lon": -1.474848
  },
  {
    "id": "sp-1045",
    "name": "Platanes",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.245426,
    "lon": -1.524904
  },
  {
    "id": "sp-1038",
    "name": "Plessis Tison",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.23661,
    "lon": -1.533551
  },
  {
    "id": "sp-37",
    "name": "Poincaré",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3",
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.222527,
    "lon": -1.585323
  },
  {
    "id": "sp-142",
    "name": "Point du Jour",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.264877,
    "lon": -1.443948
  },
  {
    "id": "sp-479",
    "name": "Poitou",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.209518,
    "lon": -1.469452
  },
  {
    "id": "sp-783",
    "name": "Polyclinique",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.22797,
    "lon": -1.611646
  },
  {
    "id": "sp-576",
    "name": "Pompidou",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.209309,
    "lon": -1.527896
  },
  {
    "id": "sp-285",
    "name": "Pont de la Métairie",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.262428,
    "lon": -1.446674
  },
  {
    "id": "sp-172",
    "name": "Pont du Cens",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.248669,
    "lon": -1.57703
  },
  {
    "id": "sp-523",
    "name": "Pont Rousseau - Martyrs",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "3",
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.192013,
    "lon": -1.548013
  },
  {
    "id": "sp-538",
    "name": "Pontecorvo",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.246426,
    "lon": -1.532286
  },
  {
    "id": "sp-368",
    "name": "Portail Rouge",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.244175,
    "lon": -1.504713
  },
  {
    "id": "sp-127",
    "name": "Porte de Rezé",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.157211,
    "lon": -1.540865
  },
  {
    "id": "sp-105",
    "name": "Porte de Vertou",
    "commune": "Vertou",
    "zone": "Sud Loire",
    "lines": [
      "4"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.180843,
    "lon": -1.505483
  },
  {
    "id": "sp-1132",
    "name": "Portechaise",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.20071,
    "lon": -1.525771
  },
  {
    "id": "sp-84",
    "name": "Portereau",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.192665,
    "lon": -1.476584
  },
  {
    "id": "sp-1082",
    "name": "Portricq",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.265182,
    "lon": -1.521495
  },
  {
    "id": "sp-730",
    "name": "Prairie au Duc",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.20425,
    "lon": -1.564716
  },
  {
    "id": "sp-1065",
    "name": "Prairie de Mauves",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.220139,
    "lon": -1.51657
  },
  {
    "id": "sp-357",
    "name": "Pré Poulain",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.272278,
    "lon": -1.444596
  },
  {
    "id": "sp-119",
    "name": "Prières",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.150253,
    "lon": -1.526282
  },
  {
    "id": "sp-1066",
    "name": "Procé",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3",
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.222553,
    "lon": -1.581613
  },
  {
    "id": "sp-111",
    "name": "Profondine",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.196136,
    "lon": -1.48852
  },
  {
    "id": "sp-459",
    "name": "Pyramide",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.208042,
    "lon": -1.492731
  },
  {
    "id": "sp-729",
    "name": "Quai des Antilles",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.203739,
    "lon": -1.569633
  },
  {
    "id": "sp-472",
    "name": "Quintaine",
    "commune": "Basse-Goulaine",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.216721,
    "lon": -1.463124
  },
  {
    "id": "sp-117",
    "name": "Ragon",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.165253,
    "lon": -1.542545
  },
  {
    "id": "sp-31",
    "name": "Ranzay",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C6"
    ],
    "isTerminus": true,
    "hasParkAndRide": true,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.253036,
    "lon": -1.529883
  },
  {
    "id": "sp-1067",
    "name": "Raoul Dufy",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.22263,
    "lon": -1.599567
  },
  {
    "id": "sp-271",
    "name": "Recteur Schmitt",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": true,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.252422,
    "lon": -1.553133
  },
  {
    "id": "sp-349",
    "name": "René Cassin",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2",
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.264385,
    "lon": -1.575581
  },
  {
    "id": "sp-316",
    "name": "Rennes - Longchamp",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.238297,
    "lon": -1.570305
  },
  {
    "id": "sp-569",
    "name": "République",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.205265,
    "lon": -1.554844
  },
  {
    "id": "sp-118",
    "name": "Retas",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.154873,
    "lon": -1.536999
  },
  {
    "id": "sp-14",
    "name": "Romain Rolland",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.206657,
    "lon": -1.609693
  },
  {
    "id": "sp-24",
    "name": "Romanet",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.211639,
    "lon": -1.610412
  },
  {
    "id": "sp-44",
    "name": "Rond-Point de Paris",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.23386,
    "lon": -1.535765
  },
  {
    "id": "sp-53",
    "name": "Rond-Point de Rennes",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.232815,
    "lon": -1.56574
  },
  {
    "id": "sp-49",
    "name": "Rond-Point de Vannes",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.229931,
    "lon": -1.572466
  },
  {
    "id": "sp-230",
    "name": "Roseraie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.260742,
    "lon": -1.52837
  },
  {
    "id": "sp-126",
    "name": "Rouet",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.148422,
    "lon": -1.521874
  },
  {
    "id": "sp-1050",
    "name": "Route de la Chapelle",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.254707,
    "lon": -1.576197
  },
  {
    "id": "sp-364",
    "name": "Rue de Mauves",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.271515,
    "lon": -1.432713
  },
  {
    "id": "sp-123",
    "name": "Rue de Nantes",
    "commune": "Les Sorinières",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.15123,
    "lon": -1.534288
  },
  {
    "id": "sp-897",
    "name": "Salorges",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.205032,
    "lon": -1.574683
  },
  {
    "id": "sp-1062",
    "name": "San Francisco",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.217831,
    "lon": -1.516098
  },
  {
    "id": "sp-352",
    "name": "Santos Dumont",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.259445,
    "lon": -1.567839
  },
  {
    "id": "sp-221",
    "name": "Saupin",
    "commune": "Nantes",
    "zone": "Sud Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.18404,
    "lon": -1.475718
  },
  {
    "id": "sp-341",
    "name": "Savarières",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.208393,
    "lon": -1.489593
  },
  {
    "id": "sp-17",
    "name": "Schoelcher",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.220528,
    "lon": -1.627982
  },
  {
    "id": "sp-395",
    "name": "Sillon de Bretagne",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "3",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.245598,
    "lon": -1.608656
  },
  {
    "id": "sp-202",
    "name": "Sophie Trébuchet",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.219994,
    "lon": -1.546249
  },
  {
    "id": "sp-28",
    "name": "Souillarderie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C7"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.23806,
    "lon": -1.516095
  },
  {
    "id": "sp-1037",
    "name": "St-Aignan",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.208115,
    "lon": -1.578385
  },
  {
    "id": "sp-1042",
    "name": "St-Clément",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.222179,
    "lon": -1.546824
  },
  {
    "id": "sp-1043",
    "name": "St-Donatien",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.229176,
    "lon": -1.540571
  },
  {
    "id": "sp-516",
    "name": "St-Félix",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.231388,
    "lon": -1.556521
  },
  {
    "id": "sp-1083",
    "name": "St-Joseph de Porterie",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.267849,
    "lon": -1.516902
  },
  {
    "id": "sp-1079",
    "name": "St-Laurent",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.223186,
    "lon": -1.597466
  },
  {
    "id": "sp-521",
    "name": "St-Mihiel",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.223324,
    "lon": -1.553401
  },
  {
    "id": "sp-559",
    "name": "St-Nicolas",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1",
      "C3",
      "C6",
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.215633,
    "lon": -1.55988
  },
  {
    "id": "sp-1077",
    "name": "St-Paul - Salengro",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.184849,
    "lon": -1.546192
  },
  {
    "id": "sp-194",
    "name": "St-Pierre",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C1",
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.218102,
    "lon": -1.551851
  },
  {
    "id": "sp-462",
    "name": "St-Sébastien",
    "commune": "Saint-Sébastien-sur-Loire",
    "zone": "Sud Loire",
    "lines": [
      "C9"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.207531,
    "lon": -1.503032
  },
  {
    "id": "sp-322",
    "name": "St-Stanislas",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.222515,
    "lon": -1.556786
  },
  {
    "id": "sp-155",
    "name": "Ste-Luce",
    "commune": "Sainte-Luce-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.250343,
    "lon": -1.484982
  },
  {
    "id": "sp-773",
    "name": "Sully Prudhomme",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.237225,
    "lon": -1.596188
  },
  {
    "id": "sp-776",
    "name": "Suzanne Lenglen",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.228523,
    "lon": -1.587421
  },
  {
    "id": "sp-320",
    "name": "Talensac",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.221512,
    "lon": -1.555922
  },
  {
    "id": "sp-16",
    "name": "Tertre",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "1",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.214622,
    "lon": -1.607531
  },
  {
    "id": "sp-811",
    "name": "Thébaudières",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.310764,
    "lon": -1.359488
  },
  {
    "id": "sp-780",
    "name": "Tillay",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.228771,
    "lon": -1.606353
  },
  {
    "id": "sp-19",
    "name": "Tourmaline",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "1"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.221439,
    "lon": -1.632582
  },
  {
    "id": "sp-560",
    "name": "Toutes Joies",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.220821,
    "lon": -1.571566
  },
  {
    "id": "sp-808",
    "name": "Trianon",
    "commune": "Thouaré-sur-Loire",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": true,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.273239,
    "lon": -1.430471
  },
  {
    "id": "sp-562",
    "name": "Tribunes",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.24955,
    "lon": -1.568616
  },
  {
    "id": "sp-688",
    "name": "Tripode",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.208294,
    "lon": -1.540631
  },
  {
    "id": "sp-526",
    "name": "Trocardière",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.183224,
    "lon": -1.569993
  },
  {
    "id": "sp-114",
    "name": "Trois Moulins",
    "commune": "Rezé",
    "zone": "Sud Loire",
    "lines": [
      "C4"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.17831,
    "lon": -1.544335
  },
  {
    "id": "sp-179",
    "name": "Vallée",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C2",
      "C20"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.250633,
    "lon": -1.576746
  },
  {
    "id": "sp-767",
    "name": "Verlaine",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C8"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.234074,
    "lon": -1.595067
  },
  {
    "id": "sp-367",
    "name": "Vesprées",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C7"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.246021,
    "lon": -1.502346
  },
  {
    "id": "sp-335",
    "name": "Viarme - Talensac",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": false,
    "lat": 47.221062,
    "lon": -1.562539
  },
  {
    "id": "sp-1074",
    "name": "Vincent Auriol",
    "commune": "Nantes",
    "zone": "Nord Loire",
    "lines": [
      "C3",
      "C6"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": true,
    "lat": 47.221806,
    "lon": -1.592212
  },
  {
    "id": "sp-509",
    "name": "Vincent Gâche",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "2",
      "3",
      "5"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": false,
    "isHistoricPerson": true,
    "lat": 47.206326,
    "lon": -1.548146
  },
  {
    "id": "sp-525",
    "name": "Wattignies",
    "commune": "Nantes",
    "zone": "Île de Nantes",
    "lines": [
      "2",
      "3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.203873,
    "lon": -1.546433
  },
  {
    "id": "sp-1075",
    "name": "Zénith",
    "commune": "Saint-Herblain",
    "zone": "Nord Loire",
    "lines": [
      "C3"
    ],
    "isTerminus": false,
    "hasParkAndRide": false,
    "hasTerConnection": false,
    "hasUniversity": false,
    "nearWater": true,
    "isHistoricPerson": false,
    "lat": 47.230553,
    "lon": -1.629307
  }
];

export const STATIONS_MAP = new Map<string, Station>(
  NANTES_STATIONS.map((s) => [s.id, s])
);
