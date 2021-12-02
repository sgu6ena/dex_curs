// @ts-ignore:next-line
const VehicleData = require("./data");

// Опишите типы данных для VehicleData
interface iStages {
    engineThrust: number;
    engineCount: number;
    engineType: string;
}

interface iDrive {
    stages?: iStages[];
    supportedEnvironments: string[];
    power?: number;
    torque?: number;
    type?: string;
}

type VehicleType = {
    type: string;
    brand: string;
    model: string;
    drive: iDrive;
};
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
    readonly type: string;
    readonly brand: string;
    readonly model: string;
    readonly env: string[];
    readonly pwr?: number;
    readonly tq?: number;
    readonly stages?: iStages[];
    info: string;
    title: string;

    constructor(vehicle: VehicleType) {
        this.type = vehicle.type;
        this.brand = vehicle.brand;
        this.model = vehicle.model;
        this.env = vehicle.drive.supportedEnvironments;
        this.pwr = vehicle.drive.power;
        this.tq = vehicle.drive.torque;
        this.stages = vehicle.drive.stages;
    }

    getTitle(): string {
        return `${this.brand} - ${this.model}`;
    }

    getInfo(): string {
        if (this.type === "Helicopter") {
            return `Under secret`;
        } else {
            const envInfo: string = `Supported environments: ${this.env.join(", ")}.`;
            switch (this.type) {
                case "Car":
                    return `${envInfo} Power: ${this.pwr}. HP Torque: ${this.tq}Nm.`;
                case "Spacecraft":
                    const cnt: number | undefined = this.stages
                        ?.map((stage) => stage.engineCount)
                        .reduce((total, current) => (total += current), 0);
                    const calc: number | undefined = this.stages
                        ?.map((stage) => stage.engineThrust)
                        .reduce((total, current) => (total += current), 0);
                    return `${envInfo} Total thrust: ${calc}kN Engine count: ${cnt}`;
                default:
                    return `${envInfo || "неизвестный тип"}`;
            }
        }
    }
}

// реализуйте функцию конвертации полученных данных в конечный тип для
// последующего вывода данных о транспортном средстве

export function vehicleFabric(vehicle: VehicleType): Vehicle | null {
    const newVehicle: Vehicle = new Vehicle(vehicle);
    newVehicle.info = newVehicle.getInfo();
    newVehicle.title = newVehicle.getTitle();
    return newVehicle;
}
