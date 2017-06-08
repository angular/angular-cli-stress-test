/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service753Service } from './service-753.service';

describe('Service753Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service753Service]
    });
  });

  it('should ...', inject([Service753Service], (service: Service753Service) => {
    expect(service).toBeTruthy();
  }));
});
