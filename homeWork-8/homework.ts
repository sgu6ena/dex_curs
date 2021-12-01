// @ts-ignore:next-line
const VehicleData = require("./data");

// Опишите типы данных для VehicleData
interface iStages {
    engineThrust: number;
    engineCount: number;
    engineType: string;
}

interface iDrive {
    stages: iStages[];
    supportedEnvironments: string[];
}
interface VehicleType {
    type: string;
    brand: string;
    model: string;
    drive: iDrive;
}
export const vehicles: VehicleType[] = VehicleData;

// реализуйте класс "Транспортное средство" и его потомков
// Ожидаемый вывод getTitle - "VAZ - 2105"
// Ожидаемый вывод getInfo:
//   для всех, кроме вертолётов - "Supported environments: {env}" с
//       перечислением всех доступных окружающих сред
//   для космических кораблей - "Total thrust: {calc}kN Engine count: {cnt}",
//       вместо {calc} - общая тага всех ступеней, вместо {cnt} - общее
//       количество двигателей.
//   для автомобилей - "Power: {pwr}HP Torque: {Tq}Nm", с выводом соотв. значений
//   для вертолётов - "Under secret"

class Vehicle {
    constructor(vehicle: VehicleType) {
    }

    getTitle(): string {
        return "title";
    }
    getInfo(): string {
        return "info";
    }
}

// реализйте функцию конвертации полученнх данных в конечный тип для
// последующего вывода данных о транспортном средстве

export function vehicleFabric(vehicle: VehicleType): Vehicle | null {
    return new Vehicle(vehicle);
}
