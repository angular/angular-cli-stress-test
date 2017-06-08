/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service159Service } from './service-159.service';

describe('Service159Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service159Service]
    });
  });

  it('should ...', inject([Service159Service], (service: Service159Service) => {
    expect(service).toBeTruthy();
  }));
});
