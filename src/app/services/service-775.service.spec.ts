/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service775Service } from './service-775.service';

describe('Service775Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service775Service]
    });
  });

  it('should ...', inject([Service775Service], (service: Service775Service) => {
    expect(service).toBeTruthy();
  }));
});
