/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service466Service } from './service-466.service';

describe('Service466Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service466Service]
    });
  });

  it('should ...', inject([Service466Service], (service: Service466Service) => {
    expect(service).toBeTruthy();
  }));
});
