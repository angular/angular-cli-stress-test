/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service575Service } from './service-575.service';

describe('Service575Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service575Service]
    });
  });

  it('should ...', inject([Service575Service], (service: Service575Service) => {
    expect(service).toBeTruthy();
  }));
});
