/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service52Service } from './service-52.service';

describe('Service52Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service52Service]
    });
  });

  it('should ...', inject([Service52Service], (service: Service52Service) => {
    expect(service).toBeTruthy();
  }));
});
