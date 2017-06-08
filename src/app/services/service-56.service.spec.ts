/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service56Service } from './service-56.service';

describe('Service56Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service56Service]
    });
  });

  it('should ...', inject([Service56Service], (service: Service56Service) => {
    expect(service).toBeTruthy();
  }));
});
