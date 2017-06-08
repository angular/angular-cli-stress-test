/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service301Service } from './service-301.service';

describe('Service301Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service301Service]
    });
  });

  it('should ...', inject([Service301Service], (service: Service301Service) => {
    expect(service).toBeTruthy();
  }));
});
