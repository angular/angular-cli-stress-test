/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service781Service } from './service-781.service';

describe('Service781Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service781Service]
    });
  });

  it('should ...', inject([Service781Service], (service: Service781Service) => {
    expect(service).toBeTruthy();
  }));
});
