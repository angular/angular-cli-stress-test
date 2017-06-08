/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service639Service } from './service-639.service';

describe('Service639Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service639Service]
    });
  });

  it('should ...', inject([Service639Service], (service: Service639Service) => {
    expect(service).toBeTruthy();
  }));
});
