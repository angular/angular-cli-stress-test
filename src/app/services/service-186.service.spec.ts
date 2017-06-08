/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service186Service } from './service-186.service';

describe('Service186Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service186Service]
    });
  });

  it('should ...', inject([Service186Service], (service: Service186Service) => {
    expect(service).toBeTruthy();
  }));
});
