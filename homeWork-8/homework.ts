// @ts-ignore:next-line
const VehicleData = require("./data");

// Опишите типы данных для VehicleData
interface iStages {
    engineThrust: number;
    engineCount: number;
    engineType: string;
}

interface CarDrive {
    supportedEnvironments: string[];
    torque: number;
    power: number;
    type: string;
}

interface SpacecraftDrive {
    supportedEnvironments: string[];
    stages: iStages[];
    power: number;
}

interface HelicopterDrive {
    supportedEnvironments: string[];
    totalPower: number;
    engineCount: number;
}

type VehicleType<T> = {
    type: string;
    brand: string;
    model: string;
    drive: T;
};

export const vehicles: VehicleType<
    HelicopterDrive | SpacecraftDrive | CarDrive
    >[] = VehicleData;

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

abstract class Vehicle<T extends SpacecraftDrive | HelicopterDrive | CarDrive> {
    readonly type: string;
    readonly brand: string;
    readonly model: string;
    readonly drive: T;

    constructor(vehicle: VehicleType<T>) {
        this.type = vehicle.type;
        this.brand = vehicle.brand;
        this.model = vehicle.model;
        this.drive = vehicle.drive;
    }

    getTitle(): string {
        return `${this.brand} - ${this.model}`;
    }

    getInfo(): string {
        return `Supported environments: ${this.drive.supportedEnvironments.join(
            ", "
        )}`;
    }
}

class Car extends Vehicle<CarDrive> {
    pwr: number = this.drive.power;
    tq: number = this.drive.torque;
    getInfo(): string {
        return `${super.getInfo()}. Power: ${this.pwr}. HP Torque: ${this.tq}Nm.`;
    }
}

class Helicopter extends Vehicle<HelicopterDrive> {
    getInfo(): string {
        return `UNDER SECRET`;
    }
}

class Spacecraft extends Vehicle<SpacecraftDrive> {
    cnt: number  = this.drive.stages.reduce((total, current) => (total += current.engineCount), 0)
    calc: number  = this.drive.stages.reduce((total, current) => (total += current.engineThrust), 0);
    getInfo(): string {
        return `${super.getInfo()}.Total thrust: ${this.calc}kN. Engine count: ${this.cnt}. `;
    }
}


// реализуйте функцию конвертации полученнх данных в конечный тип для
// последующего вывода данных о транспортном средстве

export function vehicleFabric <T extends SpacecraftDrive | HelicopterDrive | CarDrive>(vehicle: VehicleType<T>): Car| Helicopter|Spacecraft | null {
    switch (vehicle.type) {
        case "Car":
            return new Car(vehicle);
        case "Helicopter":
            return new Helicopter(vehicle);
        case "Spacecraft":
            return new Spacecraft(vehicle);
        default:
            return null;
    }
}
