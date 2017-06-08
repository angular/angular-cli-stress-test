/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service718Service } from './service-718.service';

describe('Service718Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service718Service]
    });
  });

  it('should ...', inject([Service718Service], (service: Service718Service) => {
    expect(service).toBeTruthy();
  }));
});
