/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service18Service } from './service-18.service';

describe('Service18Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service18Service]
    });
  });

  it('should ...', inject([Service18Service], (service: Service18Service) => {
    expect(service).toBeTruthy();
  }));
});
