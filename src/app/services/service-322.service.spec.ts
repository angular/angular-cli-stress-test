/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service322Service } from './service-322.service';

describe('Service322Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service322Service]
    });
  });

  it('should ...', inject([Service322Service], (service: Service322Service) => {
    expect(service).toBeTruthy();
  }));
});
