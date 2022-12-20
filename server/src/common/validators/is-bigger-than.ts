import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments
} from "class-validator"
import Big from "big.js"

export function IsBiggerThan(
  property: string,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isBiggerThan",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints
          const relatedValue = Big((args.object as any)[relatedPropertyName])
          const valueBig = Big(value)

          return valueBig.gt(relatedValue)
        }
      }
    })
  }
}
