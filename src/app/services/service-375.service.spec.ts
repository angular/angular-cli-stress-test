/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service375Service } from './service-375.service';

describe('Service375Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service375Service]
    });
  });

  it('should ...', inject([Service375Service], (service: Service375Service) => {
    expect(service).toBeTruthy();
  }));
});
