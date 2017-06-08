/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service546Service } from './service-546.service';

describe('Service546Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service546Service]
    });
  });

  it('should ...', inject([Service546Service], (service: Service546Service) => {
    expect(service).toBeTruthy();
  }));
});
