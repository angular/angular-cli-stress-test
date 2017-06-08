/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service320Service } from './service-320.service';

describe('Service320Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service320Service]
    });
  });

  it('should ...', inject([Service320Service], (service: Service320Service) => {
    expect(service).toBeTruthy();
  }));
});
