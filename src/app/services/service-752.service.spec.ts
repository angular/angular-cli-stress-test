/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service752Service } from './service-752.service';

describe('Service752Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service752Service]
    });
  });

  it('should ...', inject([Service752Service], (service: Service752Service) => {
    expect(service).toBeTruthy();
  }));
});
