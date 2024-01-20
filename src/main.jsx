import B from "./Blocks";
import App from "./components/worlds/App";

const blockpositions = [
    
    // Line 1
    { position: '13 00 20', block: B.GrassBlock },
    { position: '13 00 20', block: B.GrassBlock },
    { position: '14 00 20', block: B.GrassBlock },
    { position: '15 00 20', block: B.GrassBlock },
    { position: '16 00 20', block: B.GrassBlock },
    { position: '17 00 20', block: B.GrassBlock },
    { position: '18 00 20', block: B.GrassBlock },
    { position: '19 00 20', block: B.GrassBlock },

    // Line 2
    // { position: '10 02 19', block: B.IronBars, states: { facing: D.south } },
    // { position: '10 01 19', block: B.IronBars, states: { facing: D.south } },
    { position: '10 00 19', block: B.GrassBlock },
    { position: '11 00 19', block: B.GrassBlock },
    { position: '12 00 19', block: B.GrassBlock },
    { position: '13 00 19', block: B.GrassBlock },
    { position: '14 00 19', block: B.GrassBlock },
    { position: '15 00 19', block: B.GrassBlock },
    { position: '16 00 19', block: B.GrassBlock },
    { position: '17 00 19', block: B.GrassBlock },
    { position: '18 00 19', block: B.GrassBlock },
    { position: '19 00 19', block: B.GrassBlock },
    { position: '20 00 19', block: B.GrassBlock },
    { position: '21 00 19', block: B.GrassBlock },
    { position: '22 00 19', block: B.GrassBlock },

    // Line 3
    { position: '08 00 18', block: B.GrassBlock },
    { position: '09 00 18', block: B.GrassBlock },
    { position: '10 00 18', block: B.GrassBlock },
    { position: '11 00 18', block: B.GrassBlock },
    { position: '12 00 18', block: B.GrassBlock },
    { position: '13 00 18', block: B.GrassBlock },
    { position: '14 00 18', block: B.GrassBlock },
    { position: '15 00 18', block: B.GrassBlock },
    { position: '16 00 18', block: B.GrassBlock },
    { position: '17 00 18', block: B.GrassBlock },
    { position: '18 00 18', block: B.GrassBlock },
    { position: '19 00 18', block: B.GrassBlock },
    { position: '20 00 18', block: B.GrassBlock },
    { position: '21 00 18', block: B.GrassBlock },
    { position: '22 00 18', block: B.GrassBlock },
    { position: '23 00 18', block: B.GrassBlock },
    { position: '24 00 18', block: B.GrassBlock },

    // Line 4
    { position: '07 00 17', block: B.GrassBlock },
    { position: '08 00 17', block: B.GrassBlock },
    { position: '09 00 17', block: B.GrassBlock },
    { position: '10 00 17', block: B.GrassBlock },
    { position: '11 00 17', block: B.GrassBlock },
    { position: '12 00 17', block: B.GrassBlock },
    { position: '13 01 17', block: B.GrassBlock },
    { position: '14 01 17', block: B.GrassBlock },
    { position: '15 01 17', block: B.GrassBlock },
    { position: '16 01 17', block: B.GrassBlock },
    { position: '17 01 17', block: B.GrassBlock },
    { position: '18 01 17', block: B.GrassBlock },
    { position: '19 01 17', block: B.GrassBlock },
    { position: '20 00 17', block: B.GrassBlock },
    { position: '21 00 17', block: B.GrassBlock },
    { position: '22 00 17', block: B.GrassBlock },
    { position: '23 00 17', block: B.GrassBlock },
    { position: '24 00 17', block: B.GrassBlock },
    { position: '25 00 17', block: B.GrassBlock },

    // Line 5
    { position: '06 00 16', block: B.GrassBlock },
    { position: '07 00 16', block: B.GrassBlock },
    { position: '08 00 16', block: B.GrassBlock },
    { position: '09 00 16', block: B.GrassBlock },
    { position: '10 00 16', block: B.GrassBlock },
    { position: '11 01 16', block: B.GrassBlock },
    { position: '12 01 16', block: B.GrassBlock },
    { position: '13 01 16', block: B.GrassBlock },
    { position: '14 01 16', block: B.GrassBlock },
    { position: '15 01 16', block: B.GrassBlock },
    { position: '16 01 16', block: B.GrassBlock },
    { position: '17 01 16', block: B.GrassBlock },
    { position: '18 01 16', block: B.GrassBlock },
    { position: '19 01 16', block: B.GrassBlock },
    { position: '20 01 16', block: B.GrassBlock },
    { position: '21 01 16', block: B.GrassBlock },
    { position: '22 00 16', block: B.GrassBlock },
    { position: '23 00 16', block: B.GrassBlock },
    { position: '24 00 16', block: B.GrassBlock },
    { position: '25 00 16', block: B.GrassBlock },
    { position: '26 00 16', block: B.GrassBlock },

    // Line 6
    { position: '05 00 15', block: B.GrassBlock },
    { position: '06 00 15', block: B.GrassBlock },
    { position: '07 00 15', block: B.GrassBlock },
    { position: '08 00 15', block: B.GrassBlock },
    { position: '09 01 15', block: B.GrassBlock },
    { position: '10 01 15', block: B.GrassBlock },
    { position: '11 01 15', block: B.GrassBlock },
    { position: '12 01 15', block: B.GrassBlock },
    { position: '13 02 15', block: B.GrassBlock },
    { position: '14 02 15', block: B.GrassBlock },
    { position: '15 02 15', block: B.GrassBlock },
    { position: '16 02 15', block: B.GrassBlock },
    { position: '17 02 15', block: B.GrassBlock },
    { position: '18 02 15', block: B.GrassBlock },
    { position: '19 02 15', block: B.GrassBlock },
    { position: '20 01 15', block: B.GrassBlock },
    { position: '21 01 15', block: B.GrassBlock },
    { position: '22 01 15', block: B.GrassBlock },
    { position: '23 01 15', block: B.GrassBlock },
    { position: '24 00 15', block: B.GrassBlock },
    { position: '25 00 15', block: B.GrassBlock },
    { position: '26 00 15', block: B.GrassBlock },
    { position: '27 00 15', block: B.GrassBlock },

    // Line 7
    { position: '04 00 14', block: B.GrassBlock },
    { position: '05 00 14', block: B.GrassBlock },
    { position: '06 00 14', block: B.GrassBlock },
    { position: '07 00 14', block: B.GrassBlock },
    { position: '08 01 14', block: B.GrassBlock },
    { position: '09 01 14', block: B.GrassBlock },
    { position: '10 01 14', block: B.GrassBlock },
    { position: '11 02 14', block: B.GrassBlock },
    { position: '12 02 14', block: B.GrassBlock },
    { position: '13 02 14', block: B.GrassBlock },
    { position: '14 02 14', block: B.GrassBlock },
    { position: '15 02 14', block: B.GrassBlock },
    { position: '16 02 14', block: B.GrassBlock },
    { position: '17 02 14', block: B.GrassBlock },
    { position: '18 02 14', block: B.GrassBlock },
    { position: '19 02 14', block: B.GrassBlock },
    { position: '20 02 14', block: B.GrassBlock },
    { position: '21 02 14', block: B.GrassBlock },
    { position: '22 01 14', block: B.GrassBlock },
    { position: '23 01 14', block: B.GrassBlock },
    { position: '24 01 14', block: B.GrassBlock },
    { position: '25 00 14', block: B.GrassBlock },
    { position: '26 00 14', block: B.GrassBlock },
    { position: '27 00 14', block: B.GrassBlock },
    { position: '28 00 14', block: B.GrassBlock },

    // Line 8
    { position: '04 00 13', block: B.GrassBlock },
    { position: '05 00 13', block: B.GrassBlock },
    { position: '06 00 13', block: B.GrassBlock },
    { position: '07 01 13', block: B.GrassBlock },
    { position: '08 01 13', block: B.GrassBlock },
    { position: '09 01 13', block: B.GrassBlock },
    { position: '10 02 13', block: B.GrassBlock },
    { position: '11 02 13', block: B.GrassBlock },
    { position: '12 02 13', block: B.GrassBlock },
    { position: '13 02 13', block: B.GrassBlock },
    { position: '14 02 13', block: B.GrassBlock },
    { position: '15 02 13', block: B.GrassBlock },
    { position: '16 02 13', block: B.GrassBlock },
    { position: '17 02 13', block: B.GrassBlock },
    { position: '18 02 13', block: B.GrassBlock },
    { position: '19 02 13', block: B.GrassBlock },
    { position: '20 02 13', block: B.GrassBlock },
    { position: '21 02 13', block: B.GrassBlock },
    { position: '22 02 13', block: B.GrassBlock },
    { position: '23 01 13', block: B.GrassBlock },
    { position: '24 01 13', block: B.GrassBlock },
    { position: '25 01 13', block: B.GrassBlock },
    { position: '26 00 13', block: B.GrassBlock },
    { position: '27 00 13', block: B.GrassBlock },
    { position: '28 00 13', block: B.GrassBlock },

    // Line 9
    { position: '03 00 12', block: B.GrassBlock },
    { position: '04 00 12', block: B.GrassBlock },
    { position: '05 00 12', block: B.GrassBlock },
    { position: '06 00 12', block: B.GrassBlock },
    { position: '07 01 12', block: B.GrassBlock },
    { position: '08 01 12', block: B.GrassBlock },
    { position: '09 02 12', block: B.GrassBlock },
    { position: '10 02 12', block: B.GrassBlock },
    { position: '11 02 12', block: B.GrassBlock },
    { position: '12 02 12', block: B.GrassBlock },
    { position: '13 02 12', block: B.GrassBlock },
    { position: '14 02 12', block: B.GrassBlock },
    { position: '15 02 12', block: B.GrassBlock },
    { position: '16 02 12', block: B.GrassBlock },
    { position: '17 02 12', block: B.GrassBlock },
    { position: '18 02 12', block: B.GrassBlock },
    { position: '19 02 12', block: B.GrassBlock },
    { position: '20 02 12', block: B.GrassBlock },
    { position: '21 02 12', block: B.GrassBlock },
    { position: '22 02 12', block: B.GrassBlock },
    { position: '23 02 12', block: B.GrassBlock },
    { position: '24 01 12', block: B.GrassBlock },
    { position: '25 01 12', block: B.GrassBlock },
    { position: '26 00 12', block: B.GrassBlock },
    { position: '27 00 12', block: B.GrassBlock },
    { position: '28 00 12', block: B.GrassBlock },
    { position: '29 00 12', block: B.GrassBlock },

    // Line 10
    { position: '03 00 11', block: B.GrassBlock },
    { position: '04 00 11', block: B.GrassBlock },
    { position: '05 00 11', block: B.GrassBlock },
    { position: '06 01 11', block: B.GrassBlock },
    { position: '07 01 11', block: B.GrassBlock },
    { position: '08 02 11', block: B.GrassBlock },
    { position: '09 02 11', block: B.GrassBlock },
    { position: '10 02 11', block: B.GrassBlock },
    { position: '11 02 11', block: B.GrassBlock },
    { position: '12 02 11', block: B.GrassBlock },
    { position: '13 02 11', block: B.GrassBlock },
    { position: '14 02 11', block: B.GrassBlock },
    { position: '15 02 11', block: B.GrassBlock },
    { position: '16 02 11', block: B.GrassBlock },
    { position: '17 02 11', block: B.GrassBlock },
    { position: '18 02 11', block: B.GrassBlock },
    { position: '19 02 11', block: B.GrassBlock },
    { position: '20 02 11', block: B.GrassBlock },
    { position: '21 02 11', block: B.GrassBlock },
    { position: '22 02 11', block: B.GrassBlock },
    { position: '23 02 11', block: B.GrassBlock },
    { position: '24 02 11', block: B.GrassBlock },
    { position: '25 01 11', block: B.GrassBlock },
    { position: '26 01 11', block: B.GrassBlock },
    { position: '27 00 11', block: B.GrassBlock },
    { position: '28 00 11', block: B.GrassBlock },
    { position: '29 00 11', block: B.GrassBlock },

    // Line 11
    { position: '03 00 10', block: B.GrassBlock },
    { position: '04 00 10', block: B.GrassBlock },
    { position: '05 00 10', block: B.GrassBlock },
    { position: '06 01 10', block: B.GrassBlock },
    { position: '07 01 10', block: B.GrassBlock },
    { position: '08 02 10', block: B.GrassBlock },
    { position: '09 02 10', block: B.GrassBlock },
    { position: '10 02 10', block: B.GrassBlock },
    { position: '11 02 10', block: B.GrassBlock },
    { position: '12 02 10', block: B.GrassBlock },
    { position: '13 02 10', block: B.GrassBlock },
    { position: '14 02 10', block: B.GrassBlock },
    { position: '15 02 10', block: B.GrassBlock },
    { position: '16 02 10', block: B.GrassBlock },
    { position: '17 02 10', block: B.GrassBlock },
    { position: '18 02 10', block: B.GrassBlock },
    { position: '19 02 10', block: B.GrassBlock },
    { position: '20 02 10', block: B.GrassBlock },
    { position: '21 02 10', block: B.GrassBlock },
    { position: '22 02 10', block: B.GrassBlock },
    { position: '23 02 10', block: B.GrassBlock },
    { position: '24 02 10', block: B.GrassBlock },
    { position: '25 01 10', block: B.GrassBlock },
    { position: '26 01 10', block: B.GrassBlock },
    { position: '27 00 10', block: B.GrassBlock },
    { position: '28 00 10', block: B.GrassBlock },
    { position: '29 00 10', block: B.GrassBlock },

    // Line 12
    { position: '02 00 09', block: B.GrassBlock },
    { position: '03 00 09', block: B.GrassBlock },
    { position: '04 00 09', block: B.GrassBlock },
    { position: '05 01 09', block: B.GrassBlock },
    { position: '06 01 09', block: B.GrassBlock },
    { position: '07 02 09', block: B.GrassBlock },
    { position: '08 02 09', block: B.GrassBlock },
    { position: '09 02 09', block: B.GrassBlock },
    { position: '10 02 09', block: B.GrassBlock },
    { position: '11 02 09', block: B.GrassBlock },
    { position: '12 02 09', block: B.GrassBlock },
    { position: '13 02 09', block: B.GrassBlock },
    { position: '14 02 09', block: B.GrassBlock },
    { position: '15 02 09', block: B.GrassBlock },
    { position: '16 02 09', block: B.GrassBlock },
    { position: '17 02 09', block: B.GrassBlock },
    { position: '18 02 09', block: B.GrassBlock },
    { position: '19 02 09', block: B.GrassBlock },
    { position: '20 02 09', block: B.GrassBlock },
    { position: '21 02 09', block: B.GrassBlock },
    { position: '22 02 09', block: B.GrassBlock },
    { position: '23 02 09', block: B.GrassBlock },
    { position: '24 02 09', block: B.GrassBlock },
    { position: '25 02 09', block: B.GrassBlock },
    { position: '26 01 09', block: B.GrassBlock },
    { position: '27 01 09', block: B.GrassBlock },
    { position: '28 00 09', block: B.GrassBlock },
    { position: '29 00 09', block: B.GrassBlock },
    { position: '30 00 09', block: B.GrassBlock },

    // Line 13
    { position: '02 00 08', block: B.GrassBlock },
    { position: '03 00 08', block: B.GrassBlock },
    { position: '04 00 08', block: B.GrassBlock },
    { position: '05 01 08', block: B.GrassBlock },
    { position: '06 01 08', block: B.GrassBlock },
    { position: '07 02 08', block: B.GrassBlock },
    { position: '08 02 08', block: B.GrassBlock },
    { position: '09 02 08', block: B.GrassBlock },
    { position: '10 02 08', block: B.GrassBlock },
    { position: '11 02 08', block: B.GrassBlock },
    { position: '12 02 08', block: B.GrassBlock },
    { position: '13 02 08', block: B.GrassBlock },
    { position: '14 02 08', block: B.GrassBlock },
    { position: '15 02 08', block: B.GrassBlock },
    { position: '16 02 08', block: B.GrassBlock },
    { position: '17 02 08', block: B.GrassBlock },
    { position: '18 02 08', block: B.GrassBlock },
    { position: '19 02 08', block: B.GrassBlock },
    { position: '20 02 08', block: B.GrassBlock },
    { position: '21 02 08', block: B.GrassBlock },
    { position: '22 02 08', block: B.GrassBlock },
    { position: '23 02 08', block: B.GrassBlock },
    { position: '24 02 08', block: B.GrassBlock },
    { position: '25 02 08', block: B.GrassBlock },
    { position: '26 01 08', block: B.GrassBlock },
    { position: '27 01 08', block: B.GrassBlock },
    { position: '28 00 08', block: B.GrassBlock },
    { position: '29 00 08', block: B.GrassBlock },
    { position: '30 00 08', block: B.GrassBlock },


    // Line 14
    { position: '02 00 07', block: B.GrassBlock },
    { position: '03 00 07', block: B.GrassBlock },
    { position: '04 00 07', block: B.GrassBlock },
    { position: '05 01 07', block: B.GrassBlock },
    { position: '06 01 07', block: B.GrassBlock },
    { position: '07 02 07', block: B.GrassBlock },
    { position: '08 02 07', block: B.GrassBlock },
    { position: '09 02 07', block: B.GrassBlock },
    { position: '10 02 07', block: B.GrassBlock },
    { position: '11 02 07', block: B.GrassBlock },
    { position: '12 02 07', block: B.GrassBlock },
    { position: '13 02 07', block: B.GrassBlock },
    { position: '14 02 07', block: B.GrassBlock },
    { position: '15 02 07', block: B.GrassBlock },
    { position: '16 02 07', block: B.GrassBlock },
    { position: '17 02 07', block: B.GrassBlock },
    { position: '18 02 07', block: B.GrassBlock },
    { position: '19 02 07', block: B.GrassBlock },
    { position: '20 02 07', block: B.GrassBlock },
    { position: '21 02 07', block: B.GrassBlock },
    { position: '22 02 07', block: B.GrassBlock },
    { position: '23 02 07', block: B.GrassBlock },
    { position: '24 02 07', block: B.GrassBlock },
    { position: '25 02 07', block: B.GrassBlock },
    { position: '26 01 07', block: B.GrassBlock },
    { position: '27 01 07', block: B.StoneBricks },
    { position: '28 00 07', block: B.GrassBlock },
    { position: '29 00 07', block: B.GrassBlock },
    { position: '30 00 07', block: B.GrassBlock },

    // Line 15
    { position: '02 00 06', block: B.GrassBlock },
    { position: '03 00 06', block: B.GrassBlock },
    { position: '04 00 06', block: B.GrassBlock },
    { position: '05 01 06', block: B.GrassBlock },
    { position: '06 01 06', block: B.GrassBlock },
    { position: '07 02 06', block: B.GrassBlock },
    { position: '08 02 06', block: B.GrassBlock },
    { position: '09 02 06', block: B.GrassBlock },
    { position: '10 02 06', block: B.GrassBlock },
    { position: '11 02 06', block: B.GrassBlock },
    { position: '12 02 06', block: B.GrassBlock },
    { position: '13 02 06', block: B.GrassBlock },
    { position: '14 02 06', block: B.GrassBlock },
    { position: '15 02 06', block: B.GrassBlock },
    { position: '16 02 06', block: B.GrassBlock },
    { position: '17 02 06', block: B.GrassBlock },
    { position: '18 02 06', block: B.GrassBlock },
    { position: '19 02 06', block: B.GrassBlock },
    { position: '20 02 06', block: B.GrassBlock },
    { position: '21 02 06', block: B.GrassBlock },
    { position: '22 02 06', block: B.GrassBlock },
    { position: '23 02 06', block: B.GrassBlock },
    { position: '24 02 06', block: B.GrassBlock },
    { position: '25 02 06', block: B.GrassBlock },
    { position: '26 01 06', block: B.GrassBlock },
    { position: '27 01 06', block: B.StoneBricks },
    { position: '28 00 06', block: B.GrassBlock },
    { position: '29 00 06', block: B.GrassBlock },
    { position: '30 00 06', block: B.GrassBlock },

    // Line 16
    { position: '02 00 05', block: B.GrassBlock },
    { position: '03 00 05', block: B.GrassBlock },
    { position: '04 00 05', block: B.GrassBlock },
    { position: '05 01 05', block: B.GrassBlock },
    { position: '06 01 05', block: B.GrassBlock },
    { position: '07 02 05', block: B.GrassBlock },
    { position: '08 02 05', block: B.GrassBlock },
    { position: '09 02 05', block: B.GrassBlock },
    { position: '10 02 05', block: B.GrassBlock },
    { position: '11 02 05', block: B.GrassBlock },
    { position: '12 02 05', block: B.GrassBlock },
    { position: '13 02 05', block: B.GrassBlock },
    { position: '14 02 05', block: B.GrassBlock },
    { position: '15 02 05', block: B.GrassBlock },
    { position: '16 02 05', block: B.GrassBlock },
    { position: '17 02 05', block: B.GrassBlock },
    { position: '18 02 05', block: B.GrassBlock },
    { position: '19 02 05', block: B.GrassBlock },
    { position: '20 02 05', block: B.GrassBlock },
    { position: '21 02 05', block: B.GrassBlock },
    { position: '22 02 05', block: B.GrassBlock },
    { position: '23 02 05', block: B.GrassBlock },
    { position: '24 02 05', block: B.GrassBlock },
    { position: '25 02 05', block: B.GrassBlock },
    { position: '26 01 05', block: B.GrassBlock },
    { position: '27 01 05', block: B.StoneBricks },
    { position: '28 00 05', block: B.GrassBlock },
    { position: '29 00 05', block: B.GrassBlock },
    { position: '30 00 05', block: B.GrassBlock },

    // Line 17
    { position: '02 00 04', block: B.GrassBlock },
    { position: '03 00 04', block: B.GrassBlock },
    { position: '04 00 04', block: B.GrassBlock },
    { position: '05 01 04', block: B.GrassBlock },
    { position: '06 01 04', block: B.GrassBlock },
    { position: '07 02 04', block: B.GrassBlock },
    { position: '08 02 04', block: B.GrassBlock },
    { position: '09 02 04', block: B.GrassBlock },
    { position: '10 02 04', block: B.GrassBlock },
    { position: '11 02 04', block: B.GrassBlock },
    { position: '12 02 04', block: B.GrassBlock },
    { position: '13 02 04', block: B.GrassBlock },
    { position: '14 02 04', block: B.GrassBlock },
    { position: '15 02 04', block: B.GrassBlock },
    { position: '16 02 04', block: B.GrassBlock },
    { position: '17 02 04', block: B.GrassBlock },
    { position: '18 02 04', block: B.GrassBlock },
    { position: '19 02 04', block: B.GrassBlock },
    { position: '20 02 04', block: B.GrassBlock },
    { position: '21 02 04', block: B.GrassBlock },
    { position: '22 02 04', block: B.GrassBlock },
    { position: '23 02 04', block: B.GrassBlock },
    { position: '24 02 04', block: B.GrassBlock },
    { position: '25 02 04', block: B.GrassBlock },
    { position: '26 01 04', block: B.GrassBlock },
    { position: '27 01 04', block: B.StoneBricks },
    { position: '28 00 04', block: B.GrassBlock },
    { position: '29 00 04', block: B.GrassBlock },
    { position: '30 00 04', block: B.GrassBlock },

    // Line 18
    { position: '02 00 03', block: B.GrassBlock },
    { position: '03 00 03', block: B.GrassBlock },
    { position: '04 00 03', block: B.GrassBlock },
    { position: '05 01 03', block: B.GrassBlock },
    { position: '06 01 03', block: B.GrassBlock },
    { position: '07 02 03', block: B.GrassBlock },
    { position: '08 02 03', block: B.GrassBlock },
    { position: '09 02 03', block: B.GrassBlock },
    { position: '10 02 03', block: B.GrassBlock },
    { position: '11 02 03', block: B.GrassBlock },
    { position: '12 02 03', block: B.GrassBlock },
    { position: '13 02 03', block: B.GrassBlock },
    { position: '14 02 03', block: B.GrassBlock },
    { position: '15 02 03', block: B.GrassBlock },
    { position: '16 02 03', block: B.GrassBlock },
    { position: '17 02 03', block: B.GrassBlock },
    { position: '18 02 03', block: B.GrassBlock },
    { position: '19 02 03', block: B.GrassBlock },
    { position: '20 02 03', block: B.GrassBlock },
    { position: '21 02 03', block: B.GrassBlock },
    { position: '22 02 03', block: B.GrassBlock },
    { position: '23 02 03', block: B.GrassBlock },
    { position: '24 02 03', block: B.GrassBlock },
    { position: '25 02 03', block: B.GrassBlock },
    { position: '26 01 03', block: B.GrassBlock },
    { position: '27 01 03', block: B.StoneBricks },
    { position: '28 00 03', block: B.GrassBlock },
    { position: '29 00 03', block: B.GrassBlock },
    { position: '30 00 03', block: B.GrassBlock },

    // Line 19
    { position: '03 00 02', block: B.GrassBlock },
    { position: '04 00 02', block: B.GrassBlock },
    { position: '05 00 02', block: B.GrassBlock },
    { position: '06 01 02', block: B.GrassBlock },
    { position: '07 01 02', block: B.GrassBlock },
    { position: '08 02 02', block: B.GrassBlock },
    { position: '09 02 02', block: B.GrassBlock },
    { position: '10 02 02', block: B.GrassBlock },
    { position: '11 02 02', block: B.GrassBlock },
    { position: '12 02 02', block: B.GrassBlock },
    { position: '13 02 02', block: B.GrassBlock },
    { position: '14 02 02', block: B.GrassBlock },
    { position: '15 02 02', block: B.GrassBlock },
    { position: '16 02 02', block: B.GrassBlock },
    { position: '17 02 02', block: B.GrassBlock },
    { position: '18 02 02', block: B.GrassBlock },
    { position: '19 02 02', block: B.GrassBlock },
    { position: '20 02 02', block: B.GrassBlock },
    { position: '21 02 02', block: B.GrassBlock },
    { position: '22 02 02', block: B.GrassBlock },
    { position: '23 02 02', block: B.GrassBlock },
    { position: '24 02 02', block: B.GrassBlock },
    { position: '25 01 02', block: B.GrassBlock },
    { position: '26 01 02', block: B.GrassBlock },
    { position: '27 00 02', block: B.GrassBlock },
    { position: '28 00 02', block: B.GrassBlock },
    { position: '29 00 02', block: B.GrassBlock },

    // Line 19
    { position: '03 00 01', block: B.GrassBlock },
    { position: '04 00 01', block: B.GrassBlock },
    { position: '05 00 01', block: B.GrassBlock },
    { position: '06 01 01', block: B.GrassBlock },
    { position: '07 01 01', block: B.GrassBlock },
    { position: '08 02 01', block: B.GrassBlock },
    { position: '09 02 01', block: B.GrassBlock },
    { position: '10 02 01', block: B.GrassBlock },
    { position: '11 02 01', block: B.GrassBlock },
    { position: '12 02 01', block: B.GrassBlock },
    { position: '13 02 01', block: B.GrassBlock },
    { position: '14 02 01', block: B.GrassBlock },
    { position: '15 02 01', block: B.GrassBlock },
    { position: '16 02 01', block: B.GrassBlock },
    { position: '17 02 01', block: B.GrassBlock },
    { position: '18 02 01', block: B.GrassBlock },
    { position: '19 02 01', block: B.GrassBlock },
    { position: '20 02 01', block: B.GrassBlock },
    { position: '21 02 01', block: B.GrassBlock },
    { position: '22 02 01', block: B.GrassBlock },
    { position: '23 02 01', block: B.GrassBlock },
    { position: '24 02 01', block: B.GrassBlock },
    { position: '25 01 01', block: B.GrassBlock },
    { position: '26 01 01', block: B.GrassBlock },
    { position: '27 00 01', block: B.GrassBlock },
    { position: '28 00 01', block: B.GrassBlock },
    { position: '29 00 01', block: B.GrassBlock },

    // Line 20
    { position: '03 00 00', block: B.GrassBlock },
    { position: '04 00 00', block: B.GrassBlock },
    { position: '05 00 00', block: B.GrassBlock },
    { position: '06 00 00', block: B.GrassBlock },
    { position: '07 01 00', block: B.GrassBlock },
    { position: '08 01 00', block: B.GrassBlock },
    { position: '09 02 00', block: B.GrassBlock },
    { position: '10 02 00', block: B.GrassBlock },
    { position: '11 02 00', block: B.GrassBlock },
    { position: '12 02 00', block: B.GrassBlock },
    { position: '13 02 00', block: B.GrassBlock },
    { position: '14 02 00', block: B.GrassBlock },
    { position: '15 02 00', block: B.GrassBlock },
    { position: '16 02 00', block: B.GrassBlock },
    { position: '17 02 00', block: B.GrassBlock },
    { position: '18 02 00', block: B.GrassBlock },
    { position: '19 02 00', block: B.GrassBlock },
    { position: '20 02 00', block: B.GrassBlock },
    { position: '21 02 00', block: B.GrassBlock },
    { position: '22 02 00', block: B.GrassBlock },
    { position: '23 02 00', block: B.Cobblestone },
    { position: '24 01 00', block: B.GrassBlock },
    { position: '25 01 00', block: B.GrassBlock },
    { position: '26 00 00', block: B.GrassBlock },
    { position: '27 00 00', block: B.GrassBlock },
    { position: '28 00 00', block: B.GrassBlock },
    { position: '29 00 00', block: B.GrassBlock },

    // Line 21
    { position: '04 00 -01', block: B.GrassBlock },
    { position: '05 00 -01', block: B.GrassBlock },
    { position: '06 00 -01', block: B.GrassBlock },
    { position: '07 01 -01', block: B.GrassBlock },
    { position: '08 01 -01', block: B.GrassBlock },
    { position: '09 01 -01', block: B.GrassBlock },
    { position: '10 02 -01', block: B.GrassBlock },
    { position: '11 02 -01', block: B.GrassBlock },
    { position: '12 02 -01', block: B.GrassBlock },
    { position: '13 02 -01', block: B.GrassBlock },
    { position: '14 02 -01', block: B.GrassBlock },
    { position: '15 02 -01', block: B.GrassBlock },
    { position: '16 02 -01', block: B.GrassBlock },
    { position: '17 02 -01', block: B.GrassBlock },
    { position: '18 02 -01', block: B.GrassBlock },
    { position: '19 02 -01', block: B.GrassBlock },
    { position: '20 02 -01', block: B.GrassBlock },
    { position: '21 02 -01', block: B.GrassBlock },
    { position: '22 02 -01', block: B.GrassBlock },
    { position: '23 01 -01', block: B.GrassBlock },
    { position: '24 01 -01', block: B.GrassBlock },
    { position: '25 01 -01', block: B.GrassBlock },
    { position: '26 00 -01', block: B.GrassBlock },
    { position: '27 00 -01', block: B.GrassBlock },
    { position: '28 00 -01', block: B.GrassBlock },

    // Line 22
    { position: '04 00 -02', block: B.GrassBlock },
    { position: '05 00 -02', block: B.GrassBlock },
    { position: '06 00 -02', block: B.GrassBlock },
    { position: '07 00 -02', block: B.GrassBlock },
    { position: '08 01 -02', block: B.GrassBlock },
    { position: '09 01 -02', block: B.GrassBlock },
    { position: '10 01 -02', block: B.GrassBlock },
    { position: '11 02 -02', block: B.GrassBlock },
    { position: '12 02 -02', block: B.GrassBlock },
    { position: '13 02 -02', block: B.GrassBlock },
    { position: '14 02 -02', block: B.GrassBlock },
    { position: '15 02 -02', block: B.GrassBlock },
    { position: '16 02 -02', block: B.GrassBlock },
    { position: '17 02 -02', block: B.GrassBlock },
    { position: '18 02 -02', block: B.GrassBlock },
    { position: '19 02 -02', block: B.GrassBlock },
    { position: '20 02 -02', block: B.GrassBlock },
    { position: '21 02 -02', block: B.GrassBlock },
    { position: '22 01 -02', block: B.GrassBlock },
    { position: '23 01 -02', block: B.GrassBlock },
    { position: '24 01 -02', block: B.GrassBlock },
    { position: '25 00 -02', block: B.GrassBlock },
    { position: '26 00 -02', block: B.GrassBlock },
    { position: '27 00 -02', block: B.GrassBlock },
    { position: '28 00 -02', block: B.GrassBlock },

    // Line 23
    { position: '05 00 -03', block: B.GrassBlock },
    { position: '06 00 -03', block: B.GrassBlock },
    { position: '07 00 -03', block: B.GrassBlock },
    { position: '08 00 -03', block: B.GrassBlock },
    { position: '09 01 -03', block: B.GrassBlock },
    { position: '10 01 -03', block: B.GrassBlock },
    { position: '11 01 -03', block: B.GrassBlock },
    { position: '12 01 -03', block: B.GrassBlock },
    { position: '13 02 -03', block: B.GrassBlock },
    { position: '14 02 -03', block: B.GrassBlock },
    { position: '15 02 -03', block: B.GrassBlock },
    { position: '16 02 -03', block: B.GrassBlock },
    { position: '17 02 -03', block: B.GrassBlock },
    { position: '18 02 -03', block: B.GrassBlock },
    { position: '19 02 -03', block: B.GrassBlock },
    { position: '20 01 -03', block: B.GrassBlock },
    { position: '21 01 -03', block: B.GrassBlock },
    { position: '22 01 -03', block: B.GrassBlock },
    { position: '23 01 -03', block: B.GrassBlock },
    { position: '24 00 -03', block: B.GrassBlock },
    { position: '25 00 -03', block: B.GrassBlock },
    { position: '26 00 -03', block: B.GrassBlock },
    { position: '27 00 -03', block: B.GrassBlock },

    // Line 24
    { position: '06 00 -04', block: B.GrassBlock },
    { position: '07 00 -04', block: B.GrassBlock },
    { position: '08 00 -04', block: B.GrassBlock },
    { position: '09 00 -04', block: B.GrassBlock },
    { position: '10 00 -04', block: B.GrassBlock },
    { position: '11 01 -04', block: B.GrassBlock },
    { position: '12 01 -04', block: B.GrassBlock },
    { position: '13 01 -04', block: B.GrassBlock },
    { position: '14 01 -04', block: B.GrassBlock },
    { position: '15 01 -04', block: B.GrassBlock },
    { position: '16 01 -04', block: B.GrassBlock },
    { position: '17 01 -04', block: B.GrassBlock },
    { position: '18 01 -04', block: B.GrassBlock },
    { position: '19 01 -04', block: B.GrassBlock },
    { position: '20 01 -04', block: B.GrassBlock },
    { position: '21 01 -04', block: B.GrassBlock },
    { position: '22 00 -04', block: B.GrassBlock },
    { position: '23 00 -04', block: B.GrassBlock },
    { position: '24 00 -04', block: B.GrassBlock },
    { position: '25 00 -04', block: B.GrassBlock },
    { position: '26 00 -04', block: B.GrassBlock },

    // Line 25
    { position: '07 00 -05', block: B.GrassBlock },
    { position: '08 00 -05', block: B.GrassBlock },
    { position: '09 00 -05', block: B.GrassBlock },
    { position: '10 00 -05', block: B.GrassBlock },
    { position: '11 00 -05', block: B.GrassBlock },
    { position: '12 00 -05', block: B.GrassBlock },
    { position: '13 01 -05', block: B.GrassBlock },
    { position: '14 01 -05', block: B.GrassBlock },
    { position: '15 01 -05', block: B.GrassBlock },
    { position: '16 01 -05', block: B.GrassBlock },
    { position: '17 01 -05', block: B.GrassBlock },
    { position: '18 01 -05', block: B.GrassBlock },
    { position: '19 01 -05', block: B.GrassBlock },
    { position: '20 00 -05', block: B.GrassBlock },
    { position: '21 00 -05', block: B.GrassBlock },
    { position: '22 00 -05', block: B.GrassBlock },
    { position: '23 00 -05', block: B.GrassBlock },
    { position: '24 00 -05', block: B.GrassBlock },
    { position: '25 00 -05', block: B.GrassBlock },

    // Line 26
    { position: '08 00 -06', block: B.GrassBlock },
    { position: '09 00 -06', block: B.GrassBlock },
    { position: '10 00 -06', block: B.GrassBlock },
    { position: '11 00 -06', block: B.GrassBlock },
    { position: '12 00 -06', block: B.GrassBlock },
    { position: '13 00 -06', block: B.GrassBlock },
    { position: '14 00 -06', block: B.GrassBlock },
    { position: '15 00 -06', block: B.GrassBlock },
    { position: '16 00 -06', block: B.GrassBlock },
    { position: '17 00 -06', block: B.GrassBlock },
    { position: '18 00 -06', block: B.GrassBlock },
    { position: '19 00 -06', block: B.GrassBlock },
    { position: '20 00 -06', block: B.GrassBlock },
    { position: '21 00 -06', block: B.GrassBlock },
    { position: '22 00 -06', block: B.GrassBlock },
    { position: '23 00 -06', block: B.GrassBlock },
    { position: '24 00 -06', block: B.GrassBlock },

    // Line 27
    { position: '10 00 -07', block: B.GrassBlock },
    { position: '11 00 -07', block: B.GrassBlock },
    { position: '12 00 -07', block: B.GrassBlock },
    { position: '13 00 -07', block: B.GrassBlock },
    { position: '14 00 -07', block: B.GrassBlock },
    { position: '15 00 -07', block: B.GrassBlock },
    { position: '16 00 -07', block: B.GrassBlock },
    { position: '17 00 -07', block: B.GrassBlock },
    { position: '18 00 -07', block: B.GrassBlock },
    { position: '19 00 -07', block: B.GrassBlock },
    { position: '20 00 -07', block: B.GrassBlock },
    { position: '21 00 -07', block: B.GrassBlock },
    { position: '22 00 -07', block: B.GrassBlock },

    // Line 28
    { position: '13 00 -08', block: B.GrassBlock },
    { position: '14 00 -08', block: B.GrassBlock },
    { position: '15 00 -08', block: B.GrassBlock },
    { position: '16 00 -08', block: B.GrassBlock },
    { position: '17 00 -08', block: B.GrassBlock },
    { position: '18 00 -08', block: B.GrassBlock },
    { position: '19 00 -08', block: B.GrassBlock },

    // Castle
    // Escada esquerda
    { position: '23 03 00', block: B.Cobblestone },
    { position: '23 04 00', block: B.StoneBricksWall },
    { position: '24 02 00', block: B.MossyStoneBricks },
    { position: '24 03 00', block: B.StoneBricks },
    { position: '25 02 00', block: B.MossyStoneBricks },
    { position: '25 03 00', block: B.CrackedStoneBricks },
    { position: '25 04 00', block: B.StoneBricksWall },
    { position: '26 01 00', block: B.StoneBricks },
    { position: '26 02 00', block: B.StoneBricks },
    { position: '26 03 00', block: B.StoneBricks },
    { position: '27 01 00', block: B.Cobblestone },
    { position: '27 02 00', block: B.Cobblestone },
    { position: '27 03 00', block: B.Cobblestone },
    { position: '27 04 00', block: B.StoneBricksWall },

    { position: '27 01 01', block: B.StoneBricks },
    { position: '27 02 01', block: B.StoneBricks },
    { position: '27 03 01', block: B.StoneBricks },
    { position: '27 01 02', block: B.StoneBricks },
    { position: '27 02 02', block: B.StoneBricks },
    { position: '27 03 02', block: B.StoneBricks },
    { position: '27 04 02', block: B.StoneBricksWall },
    { position: '27 02 03', block: B.StoneBricks },
    { position: '27 03 03', block: B.StoneBricks },
    { position: '27 02 04', block: B.StoneBricks },
    { position: '27 03 04', block: B.StoneBricks },
    { position: '27 04 04', block: B.StoneBricksWall },
    { position: '27 02 05', block: B.StoneBricks },
    { position: '27 03 05', block: B.StoneBricks },
    { position: '27 02 06', block: B.StoneBricks },
    { position: '27 03 06', block: B.StoneBricks },
    { position: '27 04 06', block: B.StoneBricksWall },


    // Escada direita
    { position: '15 03 00', block: B.CrackedStoneBricks },
    { position: '14 03 00', block: B.Cobblestone },
    { position: '14 04 00', block: B.MossyStoneBricks },
    { position: '13 03 00', block: B.CrackedStoneBricks },
    { position: '13 04 00', block: B.Cobblestone },
    { position: '13 05 00', block: B.StoneBricks },
    { position: '13 06 00', block: B.StoneBricksWall },
    { position: '12 03 00', block: B.Cobblestone },
    { position: '12 04 00', block: B.StoneBricks },
    { position: '12 05 00', block: B.CrackedStoneBricks },
    { position: '11 03 00', block: B.CrackedStoneBricks },
    { position: '11 04 00', block: B.StoneBricks },
    { position: '11 05 00', block: B.StoneBricks },
    { position: '11 06 00', block: B.StoneBricksWall },
    { position: '10 03 00', block: B.Cobblestone },
    { position: '10 04 00', block: B.MossyStoneBricks },
    { position: '10 05 00', block: B.Cobblestone },



    // Torre Esquerda  


    
];

App.render(blockpositions);
