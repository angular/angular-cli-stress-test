/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service785Service } from './service-785.service';

describe('Service785Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service785Service]
    });
  });

  it('should ...', inject([Service785Service], (service: Service785Service) => {
    expect(service).toBeTruthy();
  }));
});
