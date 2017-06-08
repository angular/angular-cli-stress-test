/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service403Service } from './service-403.service';

describe('Service403Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service403Service]
    });
  });

  it('should ...', inject([Service403Service], (service: Service403Service) => {
    expect(service).toBeTruthy();
  }));
});
