/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service255Service } from './service-255.service';

describe('Service255Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service255Service]
    });
  });

  it('should ...', inject([Service255Service], (service: Service255Service) => {
    expect(service).toBeTruthy();
  }));
});
