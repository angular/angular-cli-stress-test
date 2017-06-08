/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service857Service } from './service-857.service';

describe('Service857Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service857Service]
    });
  });

  it('should ...', inject([Service857Service], (service: Service857Service) => {
    expect(service).toBeTruthy();
  }));
});
