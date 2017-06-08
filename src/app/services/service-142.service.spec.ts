/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service142Service } from './service-142.service';

describe('Service142Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service142Service]
    });
  });

  it('should ...', inject([Service142Service], (service: Service142Service) => {
    expect(service).toBeTruthy();
  }));
});
