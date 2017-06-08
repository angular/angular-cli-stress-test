/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service694Service } from './service-694.service';

describe('Service694Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service694Service]
    });
  });

  it('should ...', inject([Service694Service], (service: Service694Service) => {
    expect(service).toBeTruthy();
  }));
});
