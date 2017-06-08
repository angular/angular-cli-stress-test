/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service23Service } from './service-23.service';

describe('Service23Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service23Service]
    });
  });

  it('should ...', inject([Service23Service], (service: Service23Service) => {
    expect(service).toBeTruthy();
  }));
});
