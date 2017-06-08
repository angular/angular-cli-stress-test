/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service585Service } from './service-585.service';

describe('Service585Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service585Service]
    });
  });

  it('should ...', inject([Service585Service], (service: Service585Service) => {
    expect(service).toBeTruthy();
  }));
});
