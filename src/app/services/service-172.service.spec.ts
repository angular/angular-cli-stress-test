/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service172Service } from './service-172.service';

describe('Service172Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service172Service]
    });
  });

  it('should ...', inject([Service172Service], (service: Service172Service) => {
    expect(service).toBeTruthy();
  }));
});
