/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service425Service } from './service-425.service';

describe('Service425Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service425Service]
    });
  });

  it('should ...', inject([Service425Service], (service: Service425Service) => {
    expect(service).toBeTruthy();
  }));
});
