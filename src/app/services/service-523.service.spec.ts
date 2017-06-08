/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service523Service } from './service-523.service';

describe('Service523Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service523Service]
    });
  });

  it('should ...', inject([Service523Service], (service: Service523Service) => {
    expect(service).toBeTruthy();
  }));
});
