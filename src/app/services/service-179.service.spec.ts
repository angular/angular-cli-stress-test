/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service179Service } from './service-179.service';

describe('Service179Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service179Service]
    });
  });

  it('should ...', inject([Service179Service], (service: Service179Service) => {
    expect(service).toBeTruthy();
  }));
});
