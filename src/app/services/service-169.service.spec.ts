/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service169Service } from './service-169.service';

describe('Service169Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service169Service]
    });
  });

  it('should ...', inject([Service169Service], (service: Service169Service) => {
    expect(service).toBeTruthy();
  }));
});
