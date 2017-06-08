/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service3Service } from './service-3.service';

describe('Service3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service3Service]
    });
  });

  it('should ...', inject([Service3Service], (service: Service3Service) => {
    expect(service).toBeTruthy();
  }));
});
