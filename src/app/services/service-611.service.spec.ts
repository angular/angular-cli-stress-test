/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service611Service } from './service-611.service';

describe('Service611Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service611Service]
    });
  });

  it('should ...', inject([Service611Service], (service: Service611Service) => {
    expect(service).toBeTruthy();
  }));
});
