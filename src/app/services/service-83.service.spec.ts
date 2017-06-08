/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service83Service } from './service-83.service';

describe('Service83Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service83Service]
    });
  });

  it('should ...', inject([Service83Service], (service: Service83Service) => {
    expect(service).toBeTruthy();
  }));
});
