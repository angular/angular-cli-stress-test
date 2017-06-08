/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service220Service } from './service-220.service';

describe('Service220Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service220Service]
    });
  });

  it('should ...', inject([Service220Service], (service: Service220Service) => {
    expect(service).toBeTruthy();
  }));
});
