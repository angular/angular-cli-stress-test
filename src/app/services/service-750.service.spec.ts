/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service750Service } from './service-750.service';

describe('Service750Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service750Service]
    });
  });

  it('should ...', inject([Service750Service], (service: Service750Service) => {
    expect(service).toBeTruthy();
  }));
});
