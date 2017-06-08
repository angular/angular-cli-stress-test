/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service4Service } from './service-4.service';

describe('Service4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service4Service]
    });
  });

  it('should ...', inject([Service4Service], (service: Service4Service) => {
    expect(service).toBeTruthy();
  }));
});
