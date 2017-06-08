/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service788Service } from './service-788.service';

describe('Service788Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service788Service]
    });
  });

  it('should ...', inject([Service788Service], (service: Service788Service) => {
    expect(service).toBeTruthy();
  }));
});
