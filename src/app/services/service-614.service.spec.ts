/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service614Service } from './service-614.service';

describe('Service614Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service614Service]
    });
  });

  it('should ...', inject([Service614Service], (service: Service614Service) => {
    expect(service).toBeTruthy();
  }));
});
