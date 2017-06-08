/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service768Service } from './service-768.service';

describe('Service768Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service768Service]
    });
  });

  it('should ...', inject([Service768Service], (service: Service768Service) => {
    expect(service).toBeTruthy();
  }));
});
