/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service684Service } from './service-684.service';

describe('Service684Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service684Service]
    });
  });

  it('should ...', inject([Service684Service], (service: Service684Service) => {
    expect(service).toBeTruthy();
  }));
});
