import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform<string, Date> {
  transform(value: string, _metadata: ArgumentMetadata): Date {
    if (!value) { return; }


    if (new Date(value).toString() === 'Invalid Date') {
      throw new BadRequestException();
    }

    return new Date(value);
  }
}