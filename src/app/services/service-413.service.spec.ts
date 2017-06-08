/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service413Service } from './service-413.service';

describe('Service413Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service413Service]
    });
  });

  it('should ...', inject([Service413Service], (service: Service413Service) => {
    expect(service).toBeTruthy();
  }));
});
