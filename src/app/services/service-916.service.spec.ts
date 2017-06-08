/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service916Service } from './service-916.service';

describe('Service916Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service916Service]
    });
  });

  it('should ...', inject([Service916Service], (service: Service916Service) => {
    expect(service).toBeTruthy();
  }));
});
